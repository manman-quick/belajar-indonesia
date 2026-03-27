import { ScrollView, View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { useLearning } from "@/context/LearningContext";
import { courseUnits } from "@/data/courseData";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function HeartIcon({ filled, color }: { filled: boolean; color: string }) {
  return (
    <MaterialIcons
      name={filled ? "favorite" : "favorite-border"}
      size={18}
      color={filled ? "#EF4444" : color}
    />
  );
}

function UnitCard({ unit, index }: { unit: typeof courseUnits[0]; index: number }) {
  const colors = useColors();
  const router = useRouter();
  const { isUnitUnlocked, getUnitCompletionPercent, state } = useLearning();

  const unlocked = isUnitUnlocked(unit.id);
  const completionPercent = getUnitCompletionPercent(unit.id);
  const isCompleted = completionPercent === 100;
  const unitProgress = state.unitProgress[unit.id];

  const handlePress = () => {
    if (!unlocked) return;
    router.push(`/unit/${unit.id}` as any);
  };

  return (
    <View style={styles.unitRow}>
      {/* Connector line */}
      {index > 0 && (
        <View style={[styles.connector, { backgroundColor: colors.border }]} />
      )}

      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.unitCard,
          {
            backgroundColor: unlocked ? colors.surface : colors.surface,
            borderColor: unlocked ? unit.color : colors.border,
            opacity: pressed ? 0.85 : 1,
          }
        ]}
      >
        {/* Lock overlay */}
        {!unlocked && (
          <View style={[styles.lockOverlay, { backgroundColor: colors.surface }]}>
            <MaterialIcons name="lock" size={28} color={colors.muted} />
          </View>
        )}

        <View style={styles.unitCardContent}>
          {/* Icon circle */}
          <View style={[
            styles.unitIconCircle,
            {
              backgroundColor: unlocked ? unit.color + "20" : colors.border + "40",
              borderColor: unlocked ? unit.color : colors.border,
            }
          ]}>
            <Text style={styles.unitIcon}>{unit.icon}</Text>
            {isCompleted && (
              <View style={[styles.completedBadge, { backgroundColor: "#22C55E" }]}>
                <MaterialIcons name="check" size={10} color="white" />
              </View>
            )}
          </View>

          {/* Unit info */}
          <View style={styles.unitInfo}>
            <Text style={[styles.unitStage, { color: unit.color, opacity: unlocked ? 1 : 0.5 }]}>
              {unit.stage === "beginner" ? "入门" : "进阶"} · 单元 {index + 1}
            </Text>
            <Text style={[styles.unitTitle, { color: unlocked ? colors.foreground : colors.muted }]}>
              {unit.titleChinese}
            </Text>
            <Text style={[styles.unitSubtitle, { color: colors.muted }]} numberOfLines={1}>
              {unit.title}
            </Text>
          </View>

          {/* Progress */}
          <View style={styles.unitProgress}>
            {unlocked ? (
              <>
                <Text style={[styles.progressText, { color: unit.color }]}>
                  {unitProgress?.lessonsCompleted ?? 0}/{unitProgress?.totalLessons ?? 0}
                </Text>
                <Text style={[styles.progressLabel, { color: colors.muted }]}>课</Text>
              </>
            ) : (
              <MaterialIcons name="lock" size={20} color={colors.muted} />
            )}
          </View>
        </View>

        {/* Progress bar */}
        {unlocked && (
          <View style={[styles.progressBarBg, { backgroundColor: colors.border }]}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${completionPercent}%` as any, backgroundColor: unit.color }
              ]}
            />
          </View>
        )}
      </Pressable>
    </View>
  );
}

export default function HomeScreen() {
  const colors = useColors();
  const { state } = useLearning();
  const beginnerUnits = courseUnits.filter(u => u.stage === "beginner");
  const intermediateUnits = courseUnits.filter(u => u.stage === "intermediate");

  const hearts = Array.from({ length: state.maxHearts }, (_, i) => i < state.hearts);

  return (
    <ScreenContainer containerClassName="bg-background">
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.background, borderBottomColor: colors.border }]}>
        <View>
          <Text style={[styles.appTitle, { color: colors.primary }]}>Belajar Indonesia</Text>
          <Text style={[styles.appSubtitle, { color: colors.muted }]}>印尼语学习</Text>
        </View>
        <View style={styles.headerRight}>
          {/* Streak */}
          <View style={[styles.streakBadge, { backgroundColor: colors.primary + "15" }]}>
            <Text style={styles.streakFire}>🔥</Text>
            <Text style={[styles.streakCount, { color: colors.primary }]}>{state.streak}</Text>
          </View>
          {/* Hearts */}
          <View style={styles.heartsRow}>
            {hearts.map((filled, i) => (
              <HeartIcon key={i} filled={filled} color={colors.muted} />
            ))}
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* XP Banner */}
        <View style={[styles.xpBanner, { backgroundColor: colors.primary + "12", borderColor: colors.primary + "30" }]}>
          <View style={styles.xpLeft}>
            <Text style={styles.xpStar}>⭐</Text>
            <View>
              <Text style={[styles.xpValue, { color: colors.primary }]}>{state.totalXP} XP</Text>
              <Text style={[styles.xpLabel, { color: colors.muted }]}>总经验值</Text>
            </View>
          </View>
          <View style={[styles.xpDivider, { backgroundColor: colors.border }]} />
          <View style={styles.xpRight}>
            <Text style={styles.xpCalendar}>📅</Text>
            <View>
              <Text style={[styles.xpValue, { color: colors.secondary }]}>{state.streak} 天</Text>
              <Text style={[styles.xpLabel, { color: colors.muted }]}>连续打卡</Text>
            </View>
          </View>
        </View>

        {/* Beginner Section */}
        <View style={styles.sectionHeader}>
          <View style={[styles.sectionBadge, { backgroundColor: "#FF6B3520" }]}>
            <Text style={[styles.sectionBadgeText, { color: "#FF6B35" }]}>入门阶段</Text>
          </View>
          <Text style={[styles.sectionDesc, { color: colors.muted }]}>Pemula</Text>
        </View>

        {beginnerUnits.map((unit, index) => (
          <UnitCard key={unit.id} unit={unit} index={index} />
        ))}

        {/* Intermediate Section */}
        <View style={[styles.sectionHeader, { marginTop: 24 }]}>
          <View style={[styles.sectionBadge, { backgroundColor: "#0EA5E920" }]}>
            <Text style={[styles.sectionBadgeText, { color: "#0EA5E9" }]}>进阶阶段</Text>
          </View>
          <Text style={[styles.sectionDesc, { color: colors.muted }]}>Menengah</Text>
        </View>

        {intermediateUnits.map((unit, index) => (
          <UnitCard key={unit.id} unit={unit} index={beginnerUnits.length + index} />
        ))}

        <View style={{ height: 32 }} />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 0.5,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  appSubtitle: {
    fontSize: 12,
    marginTop: 1,
  },
  headerRight: {
    alignItems: "flex-end",
    gap: 6,
  },
  streakBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 4,
  },
  streakFire: {
    fontSize: 14,
  },
  streakCount: {
    fontSize: 14,
    fontWeight: "700",
  },
  heartsRow: {
    flexDirection: "row",
    gap: 2,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  xpBanner: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
  },
  xpLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  xpStar: {
    fontSize: 24,
  },
  xpCalendar: {
    fontSize: 24,
  },
  xpValue: {
    fontSize: 18,
    fontWeight: "700",
  },
  xpLabel: {
    fontSize: 12,
    marginTop: 1,
  },
  xpDivider: {
    width: 1,
    height: 36,
    marginHorizontal: 16,
  },
  xpRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 8,
  },
  sectionBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  sectionBadgeText: {
    fontSize: 13,
    fontWeight: "700",
  },
  sectionDesc: {
    fontSize: 13,
    fontStyle: "italic",
  },
  unitRow: {
    alignItems: "center",
    marginBottom: 8,
  },
  connector: {
    width: 2,
    height: 8,
    marginBottom: 0,
  },
  unitCard: {
    width: "100%",
    borderRadius: 16,
    borderWidth: 1.5,
    overflow: "hidden",
  },
  lockOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    opacity: 0.7,
  },
  unitCardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    gap: 12,
  },
  unitIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  unitIcon: {
    fontSize: 24,
  },
  completedBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  unitInfo: {
    flex: 1,
  },
  unitStage: {
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 2,
  },
  unitTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 2,
  },
  unitSubtitle: {
    fontSize: 12,
  },
  unitProgress: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 40,
  },
  progressText: {
    fontSize: 15,
    fontWeight: "700",
  },
  progressLabel: {
    fontSize: 11,
    marginTop: 1,
  },
  progressBarBg: {
    height: 4,
    marginHorizontal: 14,
    marginBottom: 10,
    borderRadius: 2,
  },
  progressBarFill: {
    height: 4,
    borderRadius: 2,
    minWidth: 4,
  },
});
