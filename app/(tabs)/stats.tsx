import { ScrollView, View, Text, StyleSheet } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { useLearning } from "@/context/LearningContext";
import { courseUnits } from "@/data/courseData";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function StatCard({ icon, value, label, color }: { icon: string; value: string; label: string; color: string }) {
  const colors = useColors();
  return (
    <View style={[styles.statCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={[styles.statIconBg, { backgroundColor: color + "20" }]}>
        <MaterialIcons name={icon as any} size={22} color={color} />
      </View>
      <Text style={[styles.statValue, { color: colors.foreground }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: colors.muted }]}>{label}</Text>
    </View>
  );
}

export default function StatsScreen() {
  const colors = useColors();
  const { state } = useLearning();

  // Calculate stats
  const completedLessons = Object.values(state.lessonProgress).filter(lp => lp.completed).length;
  const totalLessons = courseUnits.reduce((sum, u) => sum + u.lessons.length, 0);

  const completedUnits = Object.values(state.unitProgress).filter(up => {
    return up.lessonsCompleted >= up.totalLessons && up.totalLessons > 0;
  }).length;

  const totalVocabLearned = courseUnits.reduce((sum, unit) => {
    return sum + unit.lessons.reduce((lSum, lesson) => {
      if (state.lessonProgress[lesson.id]?.completed) {
        return lSum + lesson.vocabulary.length;
      }
      return lSum;
    }, 0);
  }, 0);

  const avgScore = Object.values(state.lessonProgress).length > 0
    ? Math.round(
        Object.values(state.lessonProgress).reduce((sum, lp) => sum + (lp.score ?? 0), 0) /
        Object.values(state.lessonProgress).length
      )
    : 0;

  // Unit progress list
  const unlockedUnits = courseUnits.filter(u => state.unitProgress[u.id]?.unlocked);

  return (
    <ScreenContainer containerClassName="bg-background">
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Text style={[styles.headerTitle, { color: colors.foreground }]}>学习统计</Text>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* XP & Streak highlight */}
        <View style={[styles.highlightCard, { backgroundColor: colors.primary + "12", borderColor: colors.primary + "30" }]}>
          <View style={styles.highlightLeft}>
            <Text style={styles.highlightEmoji}>⭐</Text>
            <View>
              <Text style={[styles.highlightValue, { color: colors.primary }]}>{state.totalXP}</Text>
              <Text style={[styles.highlightLabel, { color: colors.muted }]}>总经验值 XP</Text>
            </View>
          </View>
          <View style={[styles.highlightDivider, { backgroundColor: colors.border }]} />
          <View style={styles.highlightRight}>
            <Text style={styles.highlightEmoji}>🔥</Text>
            <View>
              <Text style={[styles.highlightValue, { color: colors.secondary }]}>{state.streak}</Text>
              <Text style={[styles.highlightLabel, { color: colors.muted }]}>连续打卡天数</Text>
            </View>
          </View>
        </View>

        {/* Stats grid */}
        <View style={styles.statsGrid}>
          <StatCard icon="school" value={`${completedLessons}`} label="完成课程" color="#FF6B35" />
          <StatCard icon="emoji-events" value={`${completedUnits}`} label="完成单元" color="#0EA5E9" />
          <StatCard icon="menu-book" value={`${totalVocabLearned}`} label="学习词汇" color="#22C55E" />
          <StatCard icon="stars" value={`${avgScore}%`} label="平均正确率" color="#F59E0B" />
        </View>

        {/* Overall progress */}
        <View style={[styles.section, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>总体进度</Text>
          <View style={styles.overallProgress}>
            <View style={styles.progressInfo}>
              <Text style={[styles.progressFraction, { color: colors.foreground }]}>
                {completedLessons} / {totalLessons}
              </Text>
              <Text style={[styles.progressDesc, { color: colors.muted }]}>课程完成</Text>
            </View>
            <View style={[styles.bigProgressBg, { backgroundColor: colors.border }]}>
              <View style={[
                styles.bigProgressFill,
                {
                  width: `${totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0}%` as any,
                  backgroundColor: colors.primary
                }
              ]} />
            </View>
            <Text style={[styles.progressPercent, { color: colors.primary }]}>
              {totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0}%
            </Text>
          </View>
        </View>

        {/* Unit progress list */}
        {unlockedUnits.length > 0 && (
          <View style={[styles.section, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={[styles.sectionTitle, { color: colors.foreground }]}>单元进度</Text>
            {unlockedUnits.map((unit, index) => {
              const progress = state.unitProgress[unit.id];
              const percent = progress
                ? Math.round((progress.lessonsCompleted / progress.totalLessons) * 100)
                : 0;

              return (
                <View key={unit.id} style={[
                  styles.unitProgressRow,
                  index < unlockedUnits.length - 1 && { borderBottomWidth: 0.5, borderBottomColor: colors.border }
                ]}>
                  <Text style={styles.unitEmoji}>{unit.icon}</Text>
                  <View style={styles.unitProgressInfo}>
                    <View style={styles.unitProgressHeader}>
                      <Text style={[styles.unitProgressTitle, { color: colors.foreground }]} numberOfLines={1}>
                        {unit.titleChinese}
                      </Text>
                      <Text style={[styles.unitProgressFraction, { color: unit.color }]}>
                        {progress?.lessonsCompleted ?? 0}/{progress?.totalLessons ?? 0}
                      </Text>
                    </View>
                    <View style={[styles.unitProgressBg, { backgroundColor: colors.border }]}>
                      <View style={[
                        styles.unitProgressFill,
                        { width: `${percent}%` as any, backgroundColor: unit.color }
                      ]} />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        )}

        {/* Achievements */}
        <View style={[styles.section, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>成就徽章</Text>
          <View style={styles.achievementsGrid}>
            {[
              { emoji: "🌱", title: "初学者", desc: "完成第一节课", unlocked: completedLessons >= 1 },
              { emoji: "📚", title: "勤学者", desc: "完成5节课", unlocked: completedLessons >= 5 },
              { emoji: "🎓", title: "学习达人", desc: "完成10节课", unlocked: completedLessons >= 10 },
              { emoji: "🔥", title: "坚持不懈", desc: "连续打卡7天", unlocked: state.streak >= 7 },
              { emoji: "⭐", title: "积分达人", desc: "获得100 XP", unlocked: state.totalXP >= 100 },
              { emoji: "🏆", title: "印尼语高手", desc: "完成所有入门课", unlocked: completedUnits >= 5 },
            ].map((achievement, i) => (
              <View
                key={i}
                style={[
                  styles.achievementItem,
                  {
                    backgroundColor: achievement.unlocked ? colors.primary + "12" : colors.border + "30",
                    borderColor: achievement.unlocked ? colors.primary + "40" : colors.border,
                  }
                ]}
              >
                <Text style={[styles.achievementEmoji, { opacity: achievement.unlocked ? 1 : 0.3 }]}>
                  {achievement.emoji}
                </Text>
                <Text style={[styles.achievementTitle, { color: achievement.unlocked ? colors.foreground : colors.muted }]}>
                  {achievement.title}
                </Text>
                <Text style={[styles.achievementDesc, { color: colors.muted }]} numberOfLines={2}>
                  {achievement.desc}
                </Text>
                {achievement.unlocked && (
                  <View style={[styles.unlockedBadge, { backgroundColor: colors.primary }]}>
                    <MaterialIcons name="check" size={10} color="white" />
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 16,
  },
  highlightCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
  },
  highlightLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  highlightRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  highlightEmoji: {
    fontSize: 28,
  },
  highlightValue: {
    fontSize: 22,
    fontWeight: "800",
  },
  highlightLabel: {
    fontSize: 12,
    marginTop: 1,
  },
  highlightDivider: {
    width: 1,
    height: 40,
    marginHorizontal: 16,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  statCard: {
    width: "47%",
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    alignItems: "center",
    gap: 6,
  },
  statIconBg: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  statValue: {
    fontSize: 22,
    fontWeight: "800",
  },
  statLabel: {
    fontSize: 12,
    textAlign: "center",
  },
  section: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 14,
  },
  overallProgress: {
    gap: 8,
  },
  progressInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressFraction: {
    fontSize: 16,
    fontWeight: "700",
  },
  progressDesc: {
    fontSize: 13,
  },
  bigProgressBg: {
    height: 10,
    borderRadius: 5,
  },
  bigProgressFill: {
    height: 10,
    borderRadius: 5,
    minWidth: 10,
  },
  progressPercent: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
  },
  unitProgressRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    gap: 10,
  },
  unitEmoji: {
    fontSize: 20,
    width: 28,
    textAlign: "center",
  },
  unitProgressInfo: {
    flex: 1,
    gap: 6,
  },
  unitProgressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  unitProgressTitle: {
    fontSize: 14,
    fontWeight: "600",
    flex: 1,
    marginRight: 8,
  },
  unitProgressFraction: {
    fontSize: 13,
    fontWeight: "700",
  },
  unitProgressBg: {
    height: 6,
    borderRadius: 3,
  },
  unitProgressFill: {
    height: 6,
    borderRadius: 3,
    minWidth: 6,
  },
  achievementsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  achievementItem: {
    width: "30%",
    borderRadius: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    gap: 4,
    position: "relative",
  },
  achievementEmoji: {
    fontSize: 28,
  },
  achievementTitle: {
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },
  achievementDesc: {
    fontSize: 10,
    textAlign: "center",
    lineHeight: 14,
  },
  unlockedBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
