import React, { createContext, useContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  xpEarned: number;
  completedAt?: string;
  score?: number;
}

export interface UnitProgress {
  unitId: string;
  lessonsCompleted: number;
  totalLessons: number;
  unlocked: boolean;
}

export interface LearningState {
  totalXP: number;
  streak: number;
  lastStudyDate: string | null;
  hearts: number;
  maxHearts: number;
  lessonProgress: Record<string, LessonProgress>;
  unitProgress: Record<string, UnitProgress>;
  favoriteVocabulary: string[];
}

type LearningAction =
  | { type: "COMPLETE_LESSON"; lessonId: string; unitId: string; xp: number; score: number }
  | { type: "USE_HEART" }
  | { type: "RESTORE_HEART" }
  | { type: "TOGGLE_FAVORITE"; vocabId: string }
  | { type: "UPDATE_STREAK" }
  | { type: "LOAD_STATE"; state: LearningState }
  | { type: "UNLOCK_UNIT"; unitId: string };

const STORAGE_KEY = "@belajar_indonesia_progress";

const initialState: LearningState = {
  totalXP: 0,
  streak: 0,
  lastStudyDate: null,
  hearts: 5,
  maxHearts: 5,
  lessonProgress: {},
  unitProgress: {
    "unit-1": { unitId: "unit-1", lessonsCompleted: 0, totalLessons: 3, unlocked: true },
    "unit-2": { unitId: "unit-2", lessonsCompleted: 0, totalLessons: 3, unlocked: false },
    "unit-3": { unitId: "unit-3", lessonsCompleted: 0, totalLessons: 3, unlocked: false },
    "unit-4": { unitId: "unit-4", lessonsCompleted: 0, totalLessons: 3, unlocked: false },
    "unit-5": { unitId: "unit-5", lessonsCompleted: 0, totalLessons: 2, unlocked: false },
    "unit-6": { unitId: "unit-6", lessonsCompleted: 0, totalLessons: 2, unlocked: false },
    "unit-7": { unitId: "unit-7", lessonsCompleted: 0, totalLessons: 2, unlocked: false },
    "unit-8": { unitId: "unit-8", lessonsCompleted: 0, totalLessons: 2, unlocked: false },
    "unit-9": { unitId: "unit-9", lessonsCompleted: 0, totalLessons: 1, unlocked: false },
    "unit-10": { unitId: "unit-10", lessonsCompleted: 0, totalLessons: 1, unlocked: false },
  },
  favoriteVocabulary: [],
};

// Unit unlock order
const UNIT_UNLOCK_ORDER = [
  "unit-1", "unit-2", "unit-3", "unit-4", "unit-5",
  "unit-6", "unit-7", "unit-8", "unit-9", "unit-10"
];

function learningReducer(state: LearningState, action: LearningAction): LearningState {
  switch (action.type) {
    case "LOAD_STATE":
      return { ...action.state };

    case "COMPLETE_LESSON": {
      const { lessonId, unitId, xp, score } = action;
      const today = new Date().toDateString();

      // Update lesson progress
      const newLessonProgress = {
        ...state.lessonProgress,
        [lessonId]: {
          lessonId,
          completed: true,
          xpEarned: xp,
          completedAt: today,
          score,
        },
      };

      // Count completed lessons in unit
      const unitLessons = Object.values(newLessonProgress).filter(
        lp => lp.completed && lp.lessonId.startsWith(unitId.replace("unit-", "lesson-").split("-")[0])
      );

      // Update unit progress
      const currentUnitProgress = state.unitProgress[unitId] || {
        unitId,
        lessonsCompleted: 0,
        totalLessons: 1,
        unlocked: true,
      };

      // Count lessons for this unit
      const completedInUnit = Object.keys(newLessonProgress).filter(
        id => id.startsWith(`lesson-${unitId.split("-")[1]}-`) && newLessonProgress[id].completed
      ).length;

      const newUnitProgress = {
        ...state.unitProgress,
        [unitId]: {
          ...currentUnitProgress,
          lessonsCompleted: completedInUnit,
        },
      };

      // Check if unit is complete and unlock next unit
      const currentUnitIndex = UNIT_UNLOCK_ORDER.indexOf(unitId);
      if (currentUnitIndex >= 0 && currentUnitIndex < UNIT_UNLOCK_ORDER.length - 1) {
        const nextUnitId = UNIT_UNLOCK_ORDER[currentUnitIndex + 1];
        if (completedInUnit >= currentUnitProgress.totalLessons) {
          newUnitProgress[nextUnitId] = {
            ...newUnitProgress[nextUnitId],
            unlocked: true,
          };
        }
      }

      // Update streak
      let newStreak = state.streak;
      const lastDate = state.lastStudyDate;
      if (lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastDate === yesterday.toDateString()) {
          newStreak = state.streak + 1;
        } else if (lastDate !== today) {
          newStreak = 1;
        }
      }

      return {
        ...state,
        totalXP: state.totalXP + xp,
        streak: newStreak,
        lastStudyDate: today,
        lessonProgress: newLessonProgress,
        unitProgress: newUnitProgress,
      };
    }

    case "USE_HEART":
      return {
        ...state,
        hearts: Math.max(0, state.hearts - 1),
      };

    case "RESTORE_HEART":
      return {
        ...state,
        hearts: Math.min(state.maxHearts, state.hearts + 1),
      };

    case "TOGGLE_FAVORITE": {
      const { vocabId } = action;
      const isFavorite = state.favoriteVocabulary.includes(vocabId);
      return {
        ...state,
        favoriteVocabulary: isFavorite
          ? state.favoriteVocabulary.filter(id => id !== vocabId)
          : [...state.favoriteVocabulary, vocabId],
      };
    }

    case "UNLOCK_UNIT": {
      return {
        ...state,
        unitProgress: {
          ...state.unitProgress,
          [action.unitId]: {
            ...state.unitProgress[action.unitId],
            unlocked: true,
          },
        },
      };
    }

    default:
      return state;
  }
}

interface LearningContextType {
  state: LearningState;
  completeLesson: (lessonId: string, unitId: string, xp: number, score: number) => void;
  useHeart: () => void;
  restoreHeart: () => void;
  toggleFavorite: (vocabId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isUnitUnlocked: (unitId: string) => boolean;
  getLessonProgress: (lessonId: string) => LessonProgress | undefined;
  getUnitCompletionPercent: (unitId: string) => number;
}

const LearningContext = createContext<LearningContextType | null>(null);

export function LearningProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(learningReducer, initialState);

  // Load saved state on mount
  useEffect(() => {
    const loadState = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          dispatch({ type: "LOAD_STATE", state: { ...initialState, ...parsed } });
        }
      } catch (error) {
        console.error("Failed to load learning state:", error);
      }
    };
    loadState();
  }, []);

  // Save state whenever it changes
  useEffect(() => {
    const saveState = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.error("Failed to save learning state:", error);
      }
    };
    saveState();
  }, [state]);

  const completeLesson = (lessonId: string, unitId: string, xp: number, score: number) => {
    dispatch({ type: "COMPLETE_LESSON", lessonId, unitId, xp, score });
  };

  const useHeart = () => dispatch({ type: "USE_HEART" });
  const restoreHeart = () => dispatch({ type: "RESTORE_HEART" });
  const toggleFavorite = (vocabId: string) => dispatch({ type: "TOGGLE_FAVORITE", vocabId });

  const isLessonCompleted = (lessonId: string) => {
    return state.lessonProgress[lessonId]?.completed ?? false;
  };

  const isUnitUnlocked = (unitId: string) => {
    return state.unitProgress[unitId]?.unlocked ?? false;
  };

  const getLessonProgress = (lessonId: string) => {
    return state.lessonProgress[lessonId];
  };

  const getUnitCompletionPercent = (unitId: string) => {
    const progress = state.unitProgress[unitId];
    if (!progress || progress.totalLessons === 0) return 0;
    return Math.round((progress.lessonsCompleted / progress.totalLessons) * 100);
  };

  return (
    <LearningContext.Provider value={{
      state,
      completeLesson,
      useHeart,
      restoreHeart,
      toggleFavorite,
      isLessonCompleted,
      isUnitUnlocked,
      getLessonProgress,
      getUnitCompletionPercent,
    }}>
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error("useLearning must be used within LearningProvider");
  }
  return context;
}
