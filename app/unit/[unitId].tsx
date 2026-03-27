import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { useLearning } from "@/context/LearningContext";
import { getUnitById } from "@/data/courseData";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function UnitScreen() {
  const { unitId } = useLocalSearchParams<{ unitId: string }>();
  const colors = useColors();
  const router = useRouter();
  const { isLessonCompleted, getLessonProgress } = useLearning();

  const unit = getUnitById(unitId);

  if (!unit) {
    return (
      <ScreenContainer className="items-center justify-center">
        <Text style={{ color: colors.muted }}>单元不存在</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer containerClassName="bg-background">
      {/* Header */}
      <View style={[styles.header, { backgroundColor: unit.color + "15", borderBottomColor: unit.color + "30" }]}>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [styles.backBtn, { opacity: pressed ? 0.6 : 1 }]}
        >
          <MaterialIcons name="arrow-back" size={24} color={colors.foreground} />
        </Pressable>
        <View style={styles.headerCenter}>
          <Text style={styles.unitIcon}>{unit.icon}</Text>
          <View>
            <Text style={[styles.unitTitle, { color: colors.foreground }]}>{unit.titleChinese}</Text>
            <Text style={[styles.unitSubtitle, { color: colors.muted }]}>{unit.title}</Text>
          </View>
        </View>
        <View style={[styles.stageBadge, { backgroundColor: unit.color }]}>
          <Text style={styles.stageBadgeText}>{unit.stage === "beginner" ? "入门" : "进阶"}</Text>
        </View>
      </View>

      {/* Description */}
      <View style={[styles.descBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.descText, { color: colors.muted }]}>{unit.description}</Text>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>课程列表</Text>

        {unit.lessons.map((lesson, index) => {
          const completed = isLessonCompleted(lesson.id);
          const progress = getLessonProgress(lesson.id);

          return (
            <Pressable
              key={lesson.id}
              onPress={() => router.push(`/lesson/${unitId}/${lesson.id}` as any)}
              style={({ pressed }) => [
                styles.lessonCard,
                {
                  backgroundColor: colors.surface,
                  borderColor: completed ? unit.color + "60" : colors.border,
                  opacity: pressed ? 0.85 : 1,
                }
              ]}
            >
              {/* Number circle */}
              <View style={[
                styles.lessonNumber,
                { backgroundColor: completed ? unit.color : colors.border + "80" }
              ]}>
                {completed ? (
                  <MaterialIcons name="check" size={16} color="white" />
                ) : (
                  <Text style={[styles.lessonNumberText, { color: completed ? "white" : colors.muted }]}>
                    {index + 1}
                  </Text>
                )}
              </View>

              {/* Lesson info */}
              <View style={styles.lessonInfo}>
                <Text style={[styles.lessonTitle, { color: colors.foreground }]}>
                  {lesson.titleChinese}
                </Text>
                <Text style={[styles.lessonSubtitle, { color: colors.muted }]} numberOfLines={1}>
                  {lesson.title}
                </Text>
                <View style={styles.lessonMeta}>
                  <View style={styles.metaItem}>
                    <MaterialIcons name="menu-book" size={12} color={colors.muted} />
                    <Text style={[styles.metaText, { color: colors.muted }]}>
                      {lesson.vocabulary.length} 词汇
                    </Text>
                  </View>
                  <View style={styles.metaItem}>
                    <MaterialIcons name="quiz" size={12} color={colors.muted} />
                    <Text style={[styles.metaText, { color: colors.muted }]}>
                      {lesson.questions.length} 题目
                    </Text>
                  </View>
                  <View style={[styles.xpBadge, { backgroundColor: unit.color + "20" }]}>
                    <Text style={[styles.xpText, { color: unit.color }]}>+{lesson.xpReward} XP</Text>
                  </View>
                </View>
              </View>

              {/* Arrow */}
              <MaterialIcons
                name={completed ? "replay" : "play-circle-filled"}
                size={28}
                color={completed ? colors.muted : unit.color}
              />
            </Pressable>
          );
        })}

        <View style={{ height: 32 }} />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    gap: 12,
  },
  backBtn: {
    padding: 4,
  },
  headerCenter: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  unitIcon: {
    fontSize: 28,
  },
  unitTitle: {
    fontSize: 17,
    fontWeight: "700",
  },
  unitSubtitle: {
    fontSize: 13,
    marginTop: 1,
  },
  stageBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  stageBadgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  descBox: {
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 4,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  descText: {
    fontSize: 13,
    lineHeight: 20,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },
  lessonCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 14,
    borderWidth: 1.5,
    marginBottom: 10,
    gap: 12,
  },
  lessonNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  lessonNumberText: {
    fontSize: 15,
    fontWeight: "700",
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 2,
  },
  lessonSubtitle: {
    fontSize: 12,
    marginBottom: 6,
  },
  lessonMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  metaText: {
    fontSize: 11,
  },
  xpBadge: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 8,
  },
  xpText: {
    fontSize: 11,
    fontWeight: "700",
  },
});
