import { ScrollView, View, Text, Pressable, StyleSheet, Switch } from "react-native";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { useLearning } from "@/context/LearningContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function SettingRow({
  icon,
  iconColor,
  title,
  subtitle,
  rightElement,
  onPress,
}: {
  icon: string;
  iconColor: string;
  title: string;
  subtitle?: string;
  rightElement?: React.ReactNode;
  onPress?: () => void;
}) {
  const colors = useColors();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.settingRow,
        { borderBottomColor: colors.border, opacity: pressed && onPress ? 0.7 : 1 }
      ]}
    >
      <View style={[styles.settingIcon, { backgroundColor: iconColor + "20" }]}>
        <MaterialIcons name={icon as any} size={18} color={iconColor} />
      </View>
      <View style={styles.settingInfo}>
        <Text style={[styles.settingTitle, { color: colors.foreground }]}>{title}</Text>
        {subtitle && <Text style={[styles.settingSubtitle, { color: colors.muted }]}>{subtitle}</Text>}
      </View>
      {rightElement || (onPress && <MaterialIcons name="chevron-right" size={20} color={colors.muted} />)}
    </Pressable>
  );
}

export default function ProfileScreen() {
  const colors = useColors();
  const { state } = useLearning();
  const [dailyGoal, setDailyGoal] = useState(20);
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);

  const completedLessons = Object.values(state.lessonProgress).filter(lp => lp.completed).length;

  const levelInfo = (() => {
    if (state.totalXP < 50) return { level: 1, title: "初学者", next: 50 };
    if (state.totalXP < 150) return { level: 2, title: "入门学习者", next: 150 };
    if (state.totalXP < 300) return { level: 3, title: "基础掌握者", next: 300 };
    if (state.totalXP < 500) return { level: 4, title: "进阶学习者", next: 500 };
    if (state.totalXP < 800) return { level: 5, title: "中级学习者", next: 800 };
    return { level: 6, title: "高级学习者", next: 9999 };
  })();

  const xpProgress = levelInfo.level < 6
    ? Math.min(100, Math.round((state.totalXP / levelInfo.next) * 100))
    : 100;

  return (
    <ScreenContainer containerClassName="bg-background">
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Text style={[styles.headerTitle, { color: colors.foreground }]}>我的</Text>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Profile card */}
        <View style={[styles.profileCard, { backgroundColor: colors.primary + "12", borderColor: colors.primary + "30" }]}>
          <View style={[styles.avatarCircle, { backgroundColor: colors.primary }]}>
            <Text style={styles.avatarEmoji}>🦜</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: colors.foreground }]}>印尼语学习者</Text>
            <View style={[styles.levelBadge, { backgroundColor: colors.primary }]}>
              <Text style={styles.levelBadgeText}>Lv.{levelInfo.level} {levelInfo.title}</Text>
            </View>
          </View>
        </View>

        {/* XP Progress */}
        <View style={[styles.xpCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={styles.xpHeader}>
            <Text style={[styles.xpTitle, { color: colors.foreground }]}>经验值进度</Text>
            <Text style={[styles.xpValue, { color: colors.primary }]}>{state.totalXP} XP</Text>
          </View>
          <View style={[styles.xpBarBg, { backgroundColor: colors.border }]}>
            <View style={[styles.xpBarFill, { width: `${xpProgress}%` as any, backgroundColor: colors.primary }]} />
          </View>
          {levelInfo.level < 6 && (
            <Text style={[styles.xpNextLevel, { color: colors.muted }]}>
              距离下一级还需 {levelInfo.next - state.totalXP} XP
            </Text>
          )}
        </View>

        {/* Quick stats */}
        <View style={styles.quickStats}>
          {[
            { emoji: "🔥", value: `${state.streak}`, label: "连续天数" },
            { emoji: "📖", value: `${completedLessons}`, label: "完成课程" },
            { emoji: "❤️", value: `${state.hearts}/${state.maxHearts}`, label: "剩余体力" },
          ].map((item, i) => (
            <View key={i} style={[styles.quickStatItem, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={styles.quickStatEmoji}>{item.emoji}</Text>
              <Text style={[styles.quickStatValue, { color: colors.foreground }]}>{item.value}</Text>
              <Text style={[styles.quickStatLabel, { color: colors.muted }]}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Settings */}
        <View style={[styles.settingsSection, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.settingsSectionTitle, { color: colors.muted }]}>学习设置</Text>

          <SettingRow
            icon="flag"
            iconColor="#FF6B35"
            title="每日学习目标"
            subtitle={`${dailyGoal} XP / 天`}
          />

          <SettingRow
            icon="notifications"
            iconColor="#0EA5E9"
            title="学习提醒"
            subtitle="每天提醒您学习"
            rightElement={
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: colors.border, true: colors.primary + "80" }}
                thumbColor={notifications ? colors.primary : colors.muted}
              />
            }
          />

          <SettingRow
            icon="volume-up"
            iconColor="#22C55E"
            title="音效"
            subtitle="答题时播放音效"
            rightElement={
              <Switch
                value={soundEffects}
                onValueChange={setSoundEffects}
                trackColor={{ false: colors.border, true: colors.primary + "80" }}
                thumbColor={soundEffects ? colors.primary : colors.muted}
              />
            }
          />
        </View>

        {/* About */}
        <View style={[styles.settingsSection, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.settingsSectionTitle, { color: colors.muted }]}>关于</Text>

          <SettingRow
            icon="info"
            iconColor="#A855F7"
            title="关于 Belajar Indonesia"
            subtitle="版本 1.0.0"
          />

          <SettingRow
            icon="translate"
            iconColor="#F59E0B"
            title="课程内容"
            subtitle="10个单元 · 25节课 · 200+词汇"
          />
        </View>

        {/* App description */}
        <View style={[styles.aboutCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={styles.aboutFlag}>🇮🇩</Text>
          <Text style={[styles.aboutTitle, { color: colors.foreground }]}>Belajar Indonesia</Text>
          <Text style={[styles.aboutDesc, { color: colors.muted }]}>
            专为中文母语者设计的印尼语学习应用，从基础发音到进阶语法，系统化帮助您掌握印度尼西亚语。
          </Text>
          <Text style={[styles.aboutMotto, { color: colors.primary }]}>
            "Selamat belajar! 祝学习愉快！"
          </Text>
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
    gap: 14,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    gap: 14,
  },
  avatarCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarEmoji: {
    fontSize: 28,
  },
  profileInfo: {
    flex: 1,
    gap: 6,
  },
  profileName: {
    fontSize: 17,
    fontWeight: "700",
  },
  levelBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  levelBadgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  xpCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    gap: 8,
  },
  xpHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  xpTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  xpValue: {
    fontSize: 14,
    fontWeight: "700",
  },
  xpBarBg: {
    height: 8,
    borderRadius: 4,
  },
  xpBarFill: {
    height: 8,
    borderRadius: 4,
    minWidth: 8,
  },
  xpNextLevel: {
    fontSize: 12,
    textAlign: "right",
  },
  quickStats: {
    flexDirection: "row",
    gap: 10,
  },
  quickStatItem: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    alignItems: "center",
    gap: 4,
  },
  quickStatEmoji: {
    fontSize: 22,
  },
  quickStatValue: {
    fontSize: 16,
    fontWeight: "700",
  },
  quickStatLabel: {
    fontSize: 11,
    textAlign: "center",
  },
  settingsSection: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
  },
  settingsSectionTitle: {
    fontSize: 12,
    fontWeight: "600",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    gap: 12,
  },
  settingIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  settingSubtitle: {
    fontSize: 12,
    marginTop: 1,
  },
  aboutCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 20,
    alignItems: "center",
    gap: 8,
  },
  aboutFlag: {
    fontSize: 36,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  aboutDesc: {
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
  },
  aboutMotto: {
    fontSize: 13,
    fontStyle: "italic",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 4,
  },
});
