import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { FINAL_PASS, TOPICS } from "./data/course";
import type { Progress } from "./lib/storage";
import { emptyProgress, loadProgress, saveProgress } from "./lib/storage";

export type TopicResult = {
  correct: number;
  total: number;
  passed: boolean;
  missedIds: string[];
  full: boolean;
};

type ProgressApi = {
  progress: Progress;
  passedCount: number;
  isTopicOpen: (index: number) => boolean;
  isFinalOpen: boolean;
  markLesson: (topicId: string, stepKey: string) => void;
  recordTopic: (id: string, result: TopicResult) => void;
  recordFinal: (points: number, max: number) => void;
  reset: () => void;
};

const ProgressContext = createContext<ProgressApi | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>(() => loadProgress());

  function commit(next: Progress) {
    saveProgress(next);
    setProgress(next);
  }

  const passedCount = TOPICS.filter((topic) => progress.topics[topic.id]?.passed).length;
  const isFinalOpen = passedCount === TOPICS.length;

  function isTopicOpen(index: number) {
    return TOPICS.slice(0, index).every((topic) => progress.topics[topic.id]?.passed);
  }

  function markLesson(topicId: string, stepKey: string) {
    const done = progress.lessons[topicId] ?? [];
    if (done.includes(stepKey)) return;
    commit({
      ...progress,
      lessons: { ...progress.lessons, [topicId]: [...done, stepKey] },
    });
  }

  function recordTopic(id: string, result: TopicResult) {
    const previous = progress.topics[id];
    commit({
      ...progress,
      topics: {
        ...progress.topics,
        [id]: {
          best: result.full ? Math.max(previous?.best ?? 0, result.correct) : (previous?.best ?? result.correct),
          total: result.full ? result.total : (previous?.total ?? result.total),
          passed: result.passed || Boolean(previous?.passed),
          at: Date.now(),
        },
      },
      missed: {
        ...progress.missed,
        [id]: result.passed ? [] : result.missedIds,
      },
    });
  }

  function recordFinal(points: number, max: number) {
    const previous = progress.final;
    commit({
      ...progress,
      final: {
        best: Math.max(previous?.best ?? 0, points),
        max,
        passed: points >= FINAL_PASS || Boolean(previous?.passed),
        at: Date.now(),
      },
    });
  }

  function reset() {
    commit(emptyProgress);
  }

  return (
    <ProgressContext.Provider
      value={{ progress, passedCount, isTopicOpen, isFinalOpen, markLesson, recordTopic, recordFinal, reset }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const value = useContext(ProgressContext);
  if (!value) throw new Error("useProgress debe usarse dentro de ProgressProvider");
  return value;
}
