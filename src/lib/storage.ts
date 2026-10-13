export type TopicRecord = {
  best: number;
  total: number;
  passed: boolean;
  at: number;
};

export type FinalRecord = {
  best: number;
  max: number;
  passed: boolean;
  at: number;
};

export type Progress = {
  topics: Record<string, TopicRecord>;
  final: FinalRecord | null;
  lessons: Record<string, string[]>;
  missed: Record<string, string[]>;
};

export const emptyProgress: Progress = {
  topics: {},
  final: null,
  lessons: {},
  missed: {},
};

const KEY = "clase-b-progreso-v1";

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyProgress;
    const parsed = JSON.parse(raw) as Partial<Progress>;
    if (!parsed || typeof parsed !== "object" || !parsed.topics) {
      return emptyProgress;
    }
    return {
      topics: parsed.topics,
      final: parsed.final ?? null,
      lessons: parsed.lessons ?? {},
      missed: parsed.missed ?? {},
    };
  } catch {
    return emptyProgress;
  }
}

export function saveProgress(progress: Progress) {
  localStorage.setItem(KEY, JSON.stringify(progress));
}
