import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useState, useRef } from "react";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { useLearning } from "@/context/LearningContext";
import { courseUnits, type Vocabulary } from "@/data/courseData";
import { useSpeech } from "@/hooks/use-speech";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from "react-native-reanimated";

// Collect all vocabulary from completed lessons
function useReviewVocabulary() {
  const { isLessonCompleted } = useLearning();
  const allVocab: (Vocabulary & { unitColor: string; unitTitle: string })[] = [];

  courseUnits.forEach(unit => {
    unit.lessons.forEach(lesson => {
      if (isLessonCompleted(lesson.id)) {
        lesson.vocabulary.forEach(vocab => {
          allVocab.push({ ...vocab, unitColor: unit.color, unitTitle: unit.titleChinese });
        });
      }
    });
  });

  return allVocab;
}

function FlashCard({
  vocab,
  onKnow,
  onDontKnow,
}: {
  vocab: Vocabulary & { unitColor: string; unitTitle: string };
  onKnow: () => void;
  onDontKnow: () => void;
}) {
  const colors = useColors();
  const [flipped, setFlipped] = useState(false);
  const rotation = useSharedValue(0);
  const { speak, isSpeaking } = useSpeech();

  const frontStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${interpolate(rotation.value, [0, 1], [0, 180])}deg` }],
    backfaceVisibility: "hidden" as const,
  }));

  const backStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${interpolate(rotation.value, [0, 1], [180, 360])}deg` }],
    backfaceVisibility: "hidden" as const,
    position: "absolute" as const,
    top: 0, left: 0, right: 0, bottom: 0,
  }));

  const handleFlip = () => {
    rotation.value = withTiming(flipped ? 0 : 1, { duration: 350 });
    setFlipped(!flipped);
  };

  return (
    <View style={styles.flashCardWrapper}>
      <Pressable onPress={handleFlip} style={styles.flashCardPressable}>
        {/* Front */}
        <Animated.View style={[styles.flashCard, { backgroundColor: vocab.unitColor + "15", borderColor: vocab.unitColor + "50" }, frontStyle]}>
          <View style={[styles.unitTag, { backgroundColor: vocab.unitColor + "25" }]}>
            <Text style={[styles.unitTagText, { color: vocab.unitColor }]}>{vocab.unitTitle}</Text>
          </View>
          <Text style={[styles.flashIndonesian, { color: vocab.unitColor }]}>{vocab.indonesian}</Text>
          <Text style={[styles.flashPronunciation, { color: colors.muted }]}>🔊 {vocab.pronunciation}</Text>

          {/* TTS Button */}
          <Pressable
            onPress={(e) => { e.stopPropagation?.(); speak(vocab.indonesian); }}
            style={[styles.reviewSpeakBtn, { backgroundColor: vocab.unitColor + "20", borderColor: vocab.unitColor + "50" }]}
          >
            <MaterialIcons name="volume-up" size={16} color={isSpeaking ? vocab.unitColor : colors.muted} />
            <Text style={[styles.reviewSpeakText, { color: isSpeaking ? vocab.unitColor : colors.muted }]}>
              {isSpeaking ? "朗读中..." : "朗读"}
            </Text>
          </Pressable>

          <View style={[styles.tapHint, { borderColor: colors.border }]}>
            <MaterialIcons name="touch-app" size={14} color={colors.muted} />
            <Text style={[styles.tapHintText, { color: colors.muted }]}>点击查看翻译</Text>
          </View>
        </Animated.View>

        {/* Back */}
        <Animated.View style={[styles.flashCard, { backgroundColor: colors.surface, borderColor: colors.border }, backStyle]}>
          <Text style={[styles.flashChinese, { color: colors.foreground }]}>{vocab.chinese}</Text>
          {vocab.example && (
            <View style={[styles.exampleBox, { backgroundColor: vocab.unitColor + "10", borderColor: vocab.unitColor + "30" }]}>
              <Text style={[styles.exampleText, { color: vocab.unitColor }]}>{vocab.example}</Text>
              <Text style={[styles.exampleChinese, { color: colors.muted }]}>{vocab.exampleChinese}</Text>
            </View>
          )}
          {flipped && (
            <View style={styles.actionButtons}>
              <Pressable
                onPress={onDontKnow}
                style={({ pressed }) => [styles.dontKnowBtn, { backgroundColor: "#EF444415", borderColor: "#EF4444", opacity: pressed ? 0.7 : 1 }]}
              >
                <MaterialIcons name="close" size={20} color="#EF4444" />
                <Text style={[styles.actionBtnText, { color: "#EF4444" }]}>还不会</Text>
              </Pressable>
              <Pressable
                onPress={onKnow}
                style={({ pressed }) => [styles.knowBtn, { backgroundColor: "#22C55E15", borderColor: "#22C55E", opacity: pressed ? 0.7 : 1 }]}
              >
                <MaterialIcons name="check" size={20} color="#22C55E" />
                <Text style={[styles.actionBtnText, { color: "#22C55E" }]}>已掌握</Text>
              </Pressable>
            </View>
          )}
        </Animated.View>
      </Pressable>
    </View>
  );
}

export default function ReviewScreen() {
  const colors = useColors();
  const { toggleFavorite, state } = useLearning();
  const allVocab = useReviewVocabulary();

  const [cardIndex, setCardIndex] = useState(0);
  const [knownCount, setKnownCount] = useState(0);
  const [dontKnowCount, setDontKnowCount] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);

  const handleKnow = () => {
    setKnownCount(k => k + 1);
    advance();
  };

  const handleDontKnow = () => {
    setDontKnowCount(d => d + 1);
    advance();
  };

  const advance = () => {
    if (cardIndex < allVocab.length - 1) {
      setCardIndex(i => i + 1);
    } else {
      setSessionDone(true);
    }
  };

  const restart = () => {
    setCardIndex(0);
    setKnownCount(0);
    setDontKnowCount(0);
    setSessionDone(false);
  };

  if (allVocab.length === 0) {
    return (
      <ScreenContainer containerClassName="bg-background">
        <View style={[styles.header, { borderBottomColor: colors.border }]}>
          <Text style={[styles.headerTitle, { color: colors.foreground }]}>词汇复习</Text>
        </View>
        <View style={styles.emptyState}>
          <Text style={styles.emptyEmoji}>📚</Text>
          <Text style={[styles.emptyTitle, { color: colors.foreground }]}>还没有可复习的词汇</Text>
          <Text style={[styles.emptyDesc, { color: colors.muted }]}>
            完成至少一节课程后，词汇将出现在这里供您复习
          </Text>
        </View>
      </ScreenContainer>
    );
  }

  if (sessionDone) {
    const total = allVocab.length;
    const accuracy = Math.round((knownCount / total) * 100);
    return (
      <ScreenContainer containerClassName="bg-background">
        <View style={[styles.header, { borderBottomColor: colors.border }]}>
          <Text style={[styles.headerTitle, { color: colors.foreground }]}>复习完成</Text>
        </View>
        <ScrollView contentContainerStyle={styles.resultContainer}>
          <Text style={styles.resultEmoji}>{accuracy >= 80 ? "🎉" : accuracy >= 50 ? "😊" : "💪"}</Text>
          <Text style={[styles.resultTitle, { color: colors.foreground }]}>
            {accuracy >= 80 ? "掌握得很好！" : accuracy >= 50 ? "继续练习！" : "多多复习！"}
          </Text>

          <View style={[styles.statsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={styles.statRow}>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: "#22C55E" }]}>{knownCount}</Text>
                <Text style={[styles.statLabel, { color: colors.muted }]}>已掌握</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: "#EF4444" }]}>{dontKnowCount}</Text>
                <Text style={[styles.statLabel, { color: colors.muted }]}>待复习</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: colors.primary }]}>{accuracy}%</Text>
                <Text style={[styles.statLabel, { color: colors.muted }]}>掌握率</Text>
              </View>
            </View>
          </View>

          <Pressable
            onPress={restart}
            style={({ pressed }) => [styles.restartBtn, { backgroundColor: colors.primary, opacity: pressed ? 0.85 : 1 }]}
          >
            <Text style={styles.restartBtnText}>再复习一遍</Text>
          </Pressable>
        </ScrollView>
      </ScreenContainer>
    );
  }

  const currentVocab = allVocab[cardIndex];

  return (
    <ScreenContainer containerClassName="bg-background">
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Text style={[styles.headerTitle, { color: colors.foreground }]}>词汇复习</Text>
        <Text style={[styles.headerCount, { color: colors.muted }]}>
          {cardIndex + 1} / {allVocab.length}
        </Text>
      </View>

      {/* Progress bar */}
      <View style={[styles.progressBg, { backgroundColor: colors.border }]}>
        <View style={[
          styles.progressFill,
          { width: `${((cardIndex) / allVocab.length) * 100}%` as any, backgroundColor: colors.primary }
        ]} />
      </View>

      <View style={styles.flashContainer}>
        <FlashCard
          key={cardIndex}
          vocab={currentVocab}
          onKnow={handleKnow}
          onDontKnow={handleDontKnow}
        />
      </View>

      {/* Bottom stats */}
      <View style={[styles.bottomStats, { borderTopColor: colors.border }]}>
        <View style={styles.statChip}>
          <MaterialIcons name="check" size={16} color="#22C55E" />
          <Text style={[styles.statChipText, { color: "#22C55E" }]}>{knownCount}</Text>
        </View>
        <Text style={[styles.bottomHint, { color: colors.muted }]}>翻转卡片后选择掌握程度</Text>
        <View style={styles.statChip}>
          <MaterialIcons name="close" size={16} color="#EF4444" />
          <Text style={[styles.statChipText, { color: "#EF4444" }]}>{dontKnowCount}</Text>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  headerCount: {
    fontSize: 14,
  },
  progressBg: {
    height: 4,
  },
  progressFill: {
    height: 4,
    minWidth: 4,
  },
  flashContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "center",
  },
  flashCardWrapper: {
    height: 340,
  },
  flashCardPressable: {
    flex: 1,
    position: "relative",
  },
  flashCard: {
    flex: 1,
    borderRadius: 24,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 28,
    gap: 12,
  },
  unitTag: {
    position: "absolute",
    top: 16,
    left: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  unitTagText: {
    fontSize: 11,
    fontWeight: "700",
  },
  flashIndonesian: {
    fontSize: 40,
    fontWeight: "800",
    textAlign: "center",
  },
  flashPronunciation: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
  },
  reviewSpeakBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 10,
  },
  reviewSpeakText: {
    fontSize: 12,
    fontWeight: "600",
  },
  tapHint: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 8,
  },
  tapHintText: {
    fontSize: 12,
  },
  flashChinese: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },
  exampleBox: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    width: "100%",
  },
  exampleText: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
  },
  exampleChinese: {
    fontSize: 13,
    textAlign: "center",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
    width: "100%",
  },
  dontKnowBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    gap: 6,
  },
  knowBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    gap: 6,
  },
  actionBtnText: {
    fontSize: 14,
    fontWeight: "700",
  },
  bottomStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 0.5,
  },
  statChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statChipText: {
    fontSize: 16,
    fontWeight: "700",
  },
  bottomHint: {
    fontSize: 12,
    textAlign: "center",
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  emptyDesc: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 22,
  },
  resultContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },
  resultEmoji: {
    fontSize: 72,
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 32,
  },
  statsCard: {
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    marginBottom: 32,
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    height: 40,
  },
  restartBtn: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  restartBtnText: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },
});
