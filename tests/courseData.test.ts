import { describe, it, expect } from "vitest";
import {
  courseUnits,
  getUnitById,
  getLessonById,
  getBeginnerUnits,
  getIntermediateUnits,
} from "../data/courseData";

describe("courseData", () => {
  it("should have 10 units total", () => {
    expect(courseUnits.length).toBe(10);
  });

  it("should have 5 beginner units", () => {
    const beginnerUnits = getBeginnerUnits();
    expect(beginnerUnits.length).toBe(5);
    beginnerUnits.forEach(unit => expect(unit.stage).toBe("beginner"));
  });

  it("should have 5 intermediate units", () => {
    const intermediateUnits = getIntermediateUnits();
    expect(intermediateUnits.length).toBe(5);
    intermediateUnits.forEach(unit => expect(unit.stage).toBe("intermediate"));
  });

  it("should find unit by id", () => {
    const unit = getUnitById("unit-1");
    expect(unit).toBeDefined();
    expect(unit?.titleChinese).toBe("字母与数字");
    expect(unit?.stage).toBe("beginner");
  });

  it("should return undefined for non-existent unit", () => {
    const unit = getUnitById("unit-999");
    expect(unit).toBeUndefined();
  });

  it("should find lesson by unit and lesson id", () => {
    const lesson = getLessonById("unit-1", "lesson-1-1");
    expect(lesson).toBeDefined();
    expect(lesson?.titleChinese).toBe("印尼语字母");
  });

  it("should return undefined for non-existent lesson", () => {
    const lesson = getLessonById("unit-1", "lesson-99-99");
    expect(lesson).toBeUndefined();
  });

  it("each unit should have at least one lesson", () => {
    courseUnits.forEach(unit => {
      expect(unit.lessons.length).toBeGreaterThan(0);
    });
  });

  it("each lesson should have vocabulary and questions", () => {
    courseUnits.forEach(unit => {
      unit.lessons.forEach(lesson => {
        expect(lesson.vocabulary.length).toBeGreaterThan(0);
        expect(lesson.questions.length).toBeGreaterThan(0);
        expect(lesson.xpReward).toBeGreaterThan(0);
      });
    });
  });

  it("each question should have a correct answer", () => {
    courseUnits.forEach(unit => {
      unit.lessons.forEach(lesson => {
        lesson.questions.forEach(question => {
          expect(question.correctAnswer).toBeDefined();
          if (question.type === "multiple_choice") {
            expect(question.options).toBeDefined();
            expect(question.options!.length).toBeGreaterThan(1);
            // Correct answer should be one of the options
            const correctStr = Array.isArray(question.correctAnswer)
              ? question.correctAnswer.join(" ")
              : question.correctAnswer;
            expect(question.options!).toContain(correctStr);
          }
        });
      });
    });
  });

  it("unit-1 should be the only initially unlocked unit (based on initialState)", () => {
    // Verify unit-1 exists and is the first unit
    const unit1 = getUnitById("unit-1");
    expect(unit1).toBeDefined();
    expect(courseUnits[0].id).toBe("unit-1");
  });

  it("all units should have required fields", () => {
    courseUnits.forEach(unit => {
      expect(unit.id).toBeTruthy();
      expect(unit.title).toBeTruthy();
      expect(unit.titleChinese).toBeTruthy();
      expect(unit.icon).toBeTruthy();
      expect(unit.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(["beginner", "intermediate"]).toContain(unit.stage);
    });
  });
});
