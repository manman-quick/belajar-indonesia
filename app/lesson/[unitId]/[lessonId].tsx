import { View, Text, Pressable, StyleSheet, ScrollView, Animated } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useRef, useCallback } from "react";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { useLearning } from "@/context/LearningContext";
import { getUnitById, getLessonById, type Vocabulary, type Question } from "@/data/courseData";
import { useSpeech } from "@/hooks/use-speech";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Phase = "vocab" | "quiz" | "result";

// ─── Vocabulary Card ──────────────────────────────────────────────────────────
function VocabCard({ vocab, unitColor }: { vocab: Vocabulary; unitColor: string }) {
  const colors = useColors();
  const [flipped, setFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;
  const { speak, isSpeaking } = useSpeech();

  const handleFlip = () => {
    Animated.timing(flipAnim, {
      toValue: flipped ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setFlipped(!flipped);
  };

  const handleSpeak = (e: any) => {
    e.stopPropagation?.();
    speak(vocab.indonesian);
  };

  const frontRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "180deg"] });
  const backRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ["180deg", "360deg"] });

  return (
    <Pressable onPress={handleFlip} style={styles.vocabCardContainer}>
      {/* Front */}
      <Animated.View style={[
        styles.vocabCard,
        { backgroundColor: unitColor + "15", borderColor: unitColor + "40", transform: [{ rotateY: frontRotate }] }
      ]}>
        <Text style={[styles.vocabIndonesian, { color: unitColor }]}>{vocab.indonesian}</Text>
        <Text style={[styles.vocabPronunciation, { color: colors.muted }]}>/{vocab.pronunciation}/</Text>

        {/* TTS Button */}
        <Pressable
          onPress={handleSpeak}
          style={[styles.speakBtn, { backgroundColor: unitColor + "20", borderColor: unitColor + "50" }]}
        >
          <MaterialIcons
            name={isSpeaking ? "volume-up" : "volume-up"}
            size={18}
            color={isSpeaking ? unitColor : colors.muted}
          />
          <Text style={[styles.speakBtnText, { color: isSpeaking ? unitColor : colors.muted }]}>
            {isSpeaking ? "朗读中..." : "点击朗读"}
          </Text>
        </Pressable>

        <View style={[styles.flipHint, { borderColor: colors.border }]}>
          <MaterialIcons name="touch-app" size={14} color={colors.muted} />
          <Text style={[styles.flipHintText, { color: colors.muted }]}>点击翻转</Text>
        </View>
      </Animated.View>

      {/* Back */}
      <Animated.View style={[
        styles.vocabCard,
        styles.vocabCardBack,
        { backgroundColor: colors.surface, borderColor: colors.border, transform: [{ rotateY: backRotate }] }
      ]}>
        <Text style={[styles.vocabChinese, { color: colors.foreground }]}>{vocab.chinese}</Text>
        {vocab.example && (
          <View style={[styles.exampleBox, { backgroundColor: unitColor + "10", borderColor: unitColor + "30" }]}>
            <Text style={[styles.exampleText, { color: unitColor }]}>{vocab.example}</Text>
            <Text style={[styles.exampleChinese, { color: colors.muted }]}>{vocab.exampleChinese}</Text>
          </View>
        )}
        {/* TTS on back too */}
        <Pressable
          onPress={handleSpeak}
          style={[styles.speakBtnBack, { backgroundColor: unitColor + "15", borderColor: unitColor + "40" }]}
        >
          <MaterialIcons name="volume-up" size={16} color={unitColor} />
          <Text style={[styles.speakBtnBackText, { color: unitColor }]}>朗读印尼语</Text>
        </Pressable>
      </Animated.View>
    </Pressable>
  );
}

// ─── Quiz Question ────────────────────────────────────────────────────────────
function QuizQuestion({
  question,
  unitColor,
  onAnswer,
}: {
  question: Question;
  unitColor: string;
  onAnswer: (correct: boolean) => void;
}) {
  const colors = useColors();
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const { speak } = useSpeech();

  const correctAnswer = Array.isArray(question.correctAnswer)
    ? question.correctAnswer.join(" ")
    : question.correctAnswer;

  const handleSelect = (option: string) => {
    if (confirmed) return;
    setSelected(option);
  };

  const handleConfirm = () => {
    if (!selected) return;
    setConfirmed(true);
    const isCorrect = selected === correctAnswer;
    // Speak the correct answer after confirming
    if (typeof correctAnswer === "string" && /[a-zA-Z]/.test(correctAnswer)) {
      speak(correctAnswer);
    }
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelected(null);
      setConfirmed(false);
    }, 1400);
  };

  const getOptionStyle = (option: string) => {
    if (!confirmed) {
      return selected === option
        ? { backgroundColor: unitColor + "25", borderColor: unitColor }
        : { backgroundColor: colors.surface, borderColor: colors.border };
    }
    if (option === correctAnswer) {
      return { backgroundColor: "#22C55E20", borderColor: "#22C55E" };
    }
    if (option === selected && option !== correctAnswer) {
      return { backgroundColor: "#EF444420", borderColor: "#EF4444" };
    }
    return { backgroundColor: colors.surface, borderColor: colors.border };
  };

  const getOptionTextColor = (option: string) => {
    if (!confirmed) return selected === option ? unitColor : colors.foreground;
    if (option === correctAnswer) return "#22C55E";
    if (option === selected && option !== correctAnswer) return "#EF4444";
    return colors.muted;
  };

  // For arrange_words type
  if (question.type === "arrange_words") {
    const [arranged, setArranged] = useState<string[]>([]);
    const available = (question.options || []).filter(w => !arranged.includes(w));

    const addWord = (word: string) => {
      if (confirmed) return;
      setArranged([...arranged, word]);
      setSelected(arranged.concat(word).join(" "));
    };

    const removeWord = (index: number) => {
      if (confirmed) return;
      const newArr = arranged.filter((_, i) => i !== index);
      setArranged(newArr);
      setSelected(newArr.join(" ") || null);
    };

    const isCorrect = arranged.join(" ") === correctAnswer;

    return (
      <View style={styles.quizContainer}>
        <Text style={[styles.questionText, { color: colors.foreground }]}>{question.question}</Text>

        {/* Answer area */}
        <View style={[styles.arrangeAnswer, {
          backgroundColor: confirmed
            ? (isCorrect ? "#22C55E15" : "#EF444415")
            : colors.surface,
          borderColor: confirmed
            ? (isCorrect ? "#22C55E" : "#EF4444")
            : colors.border
        }]}>
          {arranged.length === 0 ? (
            <Text style={[styles.arrangePlaceholder, { color: colors.muted }]}>点击下方词语排列句子</Text>
          ) : (
            <View style={styles.arrangedWords}>
              {arranged.map((word, i) => (
                <Pressable
                  key={i}
                  onPress={() => removeWord(i)}
                  style={[styles.arrangedWord, { backgroundColor: unitColor + "20", borderColor: unitColor }]}
                >
                  <Text style={[styles.arrangedWordText, { color: unitColor }]}>{word}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>

        {/* Available words */}
        <View style={styles.wordBank}>
          {available.map((word, i) => (
            <Pressable
              key={i}
              onPress={() => addWord(word)}
              style={[styles.wordBankItem, { backgroundColor: colors.surface, borderColor: colors.border }]}
            >
              <Text style={[styles.wordBankText, { color: colors.foreground }]}>{word}</Text>
            </Pressable>
          ))}
        </View>

        {confirmed && question.explanation && (
          <View style={[styles.explanation, { backgroundColor: isCorrect ? "#22C55E15" : "#EF444415", borderColor: isCorrect ? "#22C55E40" : "#EF444440" }]}>
            <Text style={[styles.explanationText, { color: colors.foreground }]}>{question.explanation}</Text>
          </View>
        )}

        <Pressable
          onPress={handleConfirm}
          style={({ pressed }) => [
            styles.confirmBtn,
            {
              backgroundColor: arranged.length > 0 ? unitColor : colors.border,
              opacity: pressed ? 0.85 : 1,
            }
          ]}
          disabled={arranged.length === 0}
        >
          <Text style={[styles.confirmBtnText, { color: arranged.length > 0 ? "white" : colors.muted }]}>
            {confirmed ? (isCorrect ? "✓ 正确！" : "✗ 错误") : "确认"}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.quizContainer}>
      <Text style={[styles.questionText, { color: colors.foreground }]}>{question.question}</Text>

      <View style={styles.optionsList}>
        {(question.options || []).map((option, i) => (
          <Pressable
            key={i}
            onPress={() => handleSelect(option)}
            style={[styles.optionItem, getOptionStyle(option)]}
          >
            <View style={[styles.optionLetter, {
              backgroundColor: selected === option && !confirmed ? unitColor : colors.border + "60"
            }]}>
              <Text style={[styles.optionLetterText, {
                color: selected === option && !confirmed ? "white" : colors.muted
              }]}>
                {String.fromCharCode(65 + i)}
              </Text>
            </View>
            <Text style={[styles.optionText, { color: getOptionTextColor(option) }]}>{option}</Text>
            {confirmed && option === correctAnswer && (
              <MaterialIcons name="check-circle" size={20} color="#22C55E" />
            )}
            {confirmed && option === selected && option !== correctAnswer && (
              <MaterialIcons name="cancel" size={20} color="#EF4444" />
            )}
          </Pressable>
        ))}
      </View>

      {confirmed && question.explanation && (
        <View style={[styles.explanation, {
          backgroundColor: selected === correctAnswer ? "#22C55E15" : "#EF444415",
          borderColor: selected === correctAnswer ? "#22C55E40" : "#EF444440"
        }]}>
          <Text style={[styles.explanationText, { color: colors.foreground }]}>{question.explanation}</Text>
        </View>
      )}

      <Pressable
        onPress={handleConfirm}
        style={({ pressed }) => [
          styles.confirmBtn,
          {
            backgroundColor: selected ? unitColor : colors.border,
            opacity: pressed ? 0.85 : 1,
          }
        ]}
        disabled={!selected || confirmed}
      >
        <Text style={[styles.confirmBtnText, { color: selected ? "white" : colors.muted }]}>
          {confirmed
            ? (selected === correctAnswer ? "✓ 正确！" : "✗ 错误")
            : "确认答案"}
        </Text>
      </Pressable>
    </View>
  );
}

// ─── Main Lesson Screen ───────────────────────────────────────────────────────
export default function LessonScreen() {
  const { unitId, lessonId } = useLocalSearchParams<{ unitId: string; lessonId: string }>();
  const colors = useColors();
  const router = useRouter();
  const { completeLesson, useHeart } = useLearning();

  const unit = getUnitById(unitId);
  const lesson = getLessonById(unitId, lessonId);

  const [phase, setPhase] = useState<Phase>("vocab");
  const [vocabIndex, setVocabIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  if (!unit || !lesson) {
    return (
      <ScreenContainer className="items-center justify-center">
        <Text style={{ color: colors.muted }}>课程不存在</Text>
      </ScreenContainer>
    );
  }

  const unitColor = unit.color;
  const totalVocab = lesson.vocabulary.length;
  const totalQuestions = lesson.questions.length;

  const handleVocabNext = () => {
    if (vocabIndex < totalVocab - 1) {
      setVocabIndex(vocabIndex + 1);
    } else {
      setPhase("quiz");
    }
  };

  const handleVocabPrev = () => {
    if (vocabIndex > 0) setVocabIndex(vocabIndex - 1);
  };

  const handleAnswer = (correct: boolean) => {
    const newTotal = totalAnswered + 1;
    const newCorrect = correct ? correctCount + 1 : correctCount;
    setTotalAnswered(newTotal);
    setCorrectCount(newCorrect);

    if (!correct) useHeart();

    if (quizIndex < totalQuestions - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      // Complete lesson
      const score = Math.round((newCorrect / totalQuestions) * 100);
      completeLesson(lessonId, unitId, lesson.xpReward, score);
      setPhase("result");
    }
  };

  const progressPercent = phase === "vocab"
    ? ((vocabIndex + 1) / (totalVocab + totalQuestions)) * 100
    : ((totalVocab + quizIndex + 1) / (totalVocab + totalQuestions)) * 100;

  return (
    <ScreenContainer containerClassName="bg-background">
      {/* Top bar */}
      <View style={[styles.topBar, { borderBottomColor: colors.border }]}>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1, padding: 4 })}
        >
          <MaterialIcons name="close" size={24} color={colors.muted} />
        </Pressable>

        {/* Progress bar */}
        <View style={[styles.progressBarBg, { backgroundColor: colors.border }]}>
          <View style={[
            styles.progressBarFill,
            { width: `${phase === "result" ? 100 : progressPercent}%` as any, backgroundColor: unitColor }
          ]} />
        </View>

        <View style={[styles.xpBadge, { backgroundColor: unitColor + "20" }]}>
          <Text style={[styles.xpText, { color: unitColor }]}>+{lesson.xpReward}</Text>
        </View>
      </View>

      {/* Phase: Vocabulary */}
      {phase === "vocab" && (
        <View style={styles.phaseContainer}>
          <View style={styles.phaseHeader}>
            <Text style={[styles.phaseTitle, { color: colors.foreground }]}>词汇学习</Text>
            <Text style={[styles.phaseCount, { color: colors.muted }]}>
              {vocabIndex + 1} / {totalVocab}
            </Text>
          </View>

          <ScrollView contentContainerStyle={styles.vocabScroll} showsVerticalScrollIndicator={false}>
            <VocabCard vocab={lesson.vocabulary[vocabIndex]} unitColor={unitColor} />
          </ScrollView>

          <View style={styles.navButtons}>
            <Pressable
              onPress={handleVocabPrev}
              disabled={vocabIndex === 0}
              style={({ pressed }) => [
                styles.navBtn,
                { backgroundColor: colors.surface, borderColor: colors.border, opacity: vocabIndex === 0 ? 0.3 : pressed ? 0.7 : 1 }
              ]}
            >
              <MaterialIcons name="arrow-back" size={20} color={colors.foreground} />
              <Text style={[styles.navBtnText, { color: colors.foreground }]}>上一个</Text>
            </Pressable>

            <Pressable
              onPress={handleVocabNext}
              style={({ pressed }) => [
                styles.navBtnPrimary,
                { backgroundColor: unitColor, opacity: pressed ? 0.85 : 1 }
              ]}
            >
              <Text style={styles.navBtnPrimaryText}>
                {vocabIndex === totalVocab - 1 ? "开始练习 →" : "下一个 →"}
              </Text>
            </Pressable>
          </View>
        </View>
      )}

      {/* Phase: Quiz */}
      {phase === "quiz" && (
        <View style={styles.phaseContainer}>
          <View style={styles.phaseHeader}>
            <Text style={[styles.phaseTitle, { color: colors.foreground }]}>练习题目</Text>
            <Text style={[styles.phaseCount, { color: colors.muted }]}>
              {quizIndex + 1} / {totalQuestions}
            </Text>
          </View>

          <ScrollView contentContainerStyle={styles.quizScroll} showsVerticalScrollIndicator={false}>
            <QuizQuestion
              key={quizIndex}
              question={lesson.questions[quizIndex]}
              unitColor={unitColor}
              onAnswer={handleAnswer}
            />
          </ScrollView>
        </View>
      )}

      {/* Phase: Result */}
      {phase === "result" && (
        <ScrollView contentContainerStyle={styles.resultContainer}>
          <Text style={styles.resultEmoji}>
            {correctCount === totalQuestions ? "🎉" : correctCount >= totalQuestions * 0.7 ? "😊" : "💪"}
          </Text>
          <Text style={[styles.resultTitle, { color: colors.foreground }]}>
            {correctCount === totalQuestions ? "完美！" : correctCount >= totalQuestions * 0.7 ? "做得好！" : "继续加油！"}
          </Text>
          <Text style={[styles.resultSubtitle, { color: colors.muted }]}>
            {lesson.titleChinese} 已完成
          </Text>

          {/* Score card */}
          <View style={[styles.scoreCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={styles.scoreRow}>
              <View style={styles.scoreItem}>
                <Text style={[styles.scoreValue, { color: unitColor }]}>
                  {correctCount}/{totalQuestions}
                </Text>
                <Text style={[styles.scoreLabel, { color: colors.muted }]}>正确题数</Text>
              </View>
              <View style={[styles.scoreDivider, { backgroundColor: colors.border }]} />
              <View style={styles.scoreItem}>
                <Text style={[styles.scoreValue, { color: "#22C55E" }]}>+{lesson.xpReward}</Text>
                <Text style={[styles.scoreLabel, { color: colors.muted }]}>获得 XP</Text>
              </View>
              <View style={[styles.scoreDivider, { backgroundColor: colors.border }]} />
              <View style={styles.scoreItem}>
                <Text style={[styles.scoreValue, { color: "#F59E0B" }]}>
                  {Math.round((correctCount / totalQuestions) * 100)}%
                </Text>
                <Text style={[styles.scoreLabel, { color: colors.muted }]}>正确率</Text>
              </View>
            </View>
          </View>

          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [
              styles.continueBtn,
              { backgroundColor: unitColor, opacity: pressed ? 0.85 : 1 }
            ]}
          >
            <Text style={styles.continueBtnText}>继续学习</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setPhase("vocab");
              setVocabIndex(0);
              setQuizIndex(0);
              setCorrectCount(0);
              setTotalAnswered(0);
            }}
            style={({ pressed }) => [
              styles.retryBtn,
              { borderColor: colors.border, opacity: pressed ? 0.7 : 1 }
            ]}
          >
            <Text style={[styles.retryBtnText, { color: colors.muted }]}>重新学习</Text>
          </Pressable>
        </ScrollView>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    gap: 12,
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    borderRadius: 4,
  },
  progressBarFill: {
    height: 8,
    borderRadius: 4,
    minWidth: 8,
  },
  xpBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  xpText: {
    fontSize: 13,
    fontWeight: "700",
  },
  phaseContainer: {
    flex: 1,
  },
  phaseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  phaseTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  phaseCount: {
    fontSize: 14,
  },
  vocabScroll: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexGrow: 1,
    justifyContent: "center",
  },
  vocabCardContainer: {
    height: 320,
    position: "relative",
  },
  vocabCard: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backfaceVisibility: "hidden",
  },
  vocabCardBack: {
    backfaceVisibility: "hidden",
  },
  vocabIndonesian: {
    fontSize: 36,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 8,
  },
  vocabPronunciation: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 12,
    fontStyle: "italic",
  },
  speakBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 12,
  },
  speakBtnText: {
    fontSize: 13,
    fontWeight: "600",
  },
  speakBtnBack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 12,
  },
  speakBtnBackText: {
    fontSize: 13,
    fontWeight: "600",
  },
  flipHint: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  flipHintText: {
    fontSize: 12,
  },
  vocabChinese: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
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
  navButtons: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 12,
  },
  navBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1.5,
    gap: 6,
  },
  navBtnText: {
    fontSize: 15,
    fontWeight: "600",
  },
  navBtnPrimary: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 14,
  },
  navBtnPrimaryText: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
  quizScroll: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexGrow: 1,
  },
  quizContainer: {
    paddingTop: 8,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 26,
    marginBottom: 20,
  },
  optionsList: {
    gap: 10,
    marginBottom: 16,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    gap: 12,
  },
  optionLetter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  optionLetterText: {
    fontSize: 13,
    fontWeight: "700",
  },
  optionText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  explanation: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
  },
  explanationText: {
    fontSize: 13,
    lineHeight: 20,
  },
  confirmBtn: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 4,
  },
  confirmBtnText: {
    fontSize: 16,
    fontWeight: "700",
  },
  arrangeAnswer: {
    minHeight: 60,
    borderRadius: 12,
    borderWidth: 1.5,
    padding: 12,
    marginBottom: 16,
    justifyContent: "center",
  },
  arrangePlaceholder: {
    textAlign: "center",
    fontSize: 14,
  },
  arrangedWords: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  arrangedWord: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1.5,
  },
  arrangedWordText: {
    fontSize: 15,
    fontWeight: "600",
  },
  wordBank: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  wordBankItem: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1.5,
  },
  wordBankText: {
    fontSize: 15,
    fontWeight: "600",
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
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 6,
  },
  resultSubtitle: {
    fontSize: 15,
    marginBottom: 32,
  },
  scoreCard: {
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    marginBottom: 32,
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreItem: {
    flex: 1,
    alignItems: "center",
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 4,
  },
  scoreLabel: {
    fontSize: 12,
  },
  scoreDivider: {
    width: 1,
    height: 40,
  },
  continueBtn: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  continueBtnText: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },
  retryBtn: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1.5,
  },
  retryBtnText: {
    fontSize: 15,
    fontWeight: "600",
  },
});
