import { FINAL_SIZE, QUIZ_SIZE, TOPICS } from "../data/course";
import type { Question, Stake, Topic } from "../data/course";
import { QUESTION_LESSON } from "../data/lessons";

export type AttemptQuestion = {
  id: string;
  prompt: string;
  choices: string[];
  answer: string;
  explain: string;
  weight: number;
  topicId: string;
  topicTitle: string;
  lessonKey: string;
  stake?: Stake;
};

const STAKES: Stake[] = ["alcohol", "velocidad", "sri"];

function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    const current = copy[index];
    copy[index] = copy[swap] as T;
    copy[swap] = current as T;
  }
  return copy;
}

function present(question: Question, topic: Topic, weight = 1): AttemptQuestion {
  return {
    id: question.id,
    prompt: question.prompt,
    choices: shuffle(question.choices),
    answer: question.answer,
    explain: question.explain,
    weight,
    topicId: topic.id,
    topicTitle: topic.title,
    lessonKey: QUESTION_LESSON[question.id] ?? "",
    stake: question.stake,
  };
}

export function buildTopicQuiz(topic: Topic): AttemptQuestion[] {
  return shuffle(topic.questions)
    .slice(0, QUIZ_SIZE)
    .map((question) => present(question, topic));
}

export function buildFocusedQuiz(
  topic: Topic,
  missedIds: readonly string[],
  earlier: readonly Topic[],
): AttemptQuestion[] {
  const missed = topic.questions.filter((question) => missedIds.includes(question.id));
  const reviewPool = earlier.flatMap((item) => item.questions.map((question) => ({ question, topic: item })));
  const review = shuffle(reviewPool).slice(0, 2);
  return shuffle([
    ...missed.map((question) => present(question, topic)),
    ...review.map((item) => present(item.question, item.topic)),
  ]);
}

export function buildFinalExam(): AttemptQuestion[] {
  const pools = TOPICS.map((topic) => ({
    topic,
    questions: shuffle(topic.questions),
  }));
  const selected: { question: Question; topic: Topic }[] = [];
  let round = 0;

  while (selected.length < FINAL_SIZE) {
    let added = false;
    for (const pool of pools) {
      if (selected.length >= FINAL_SIZE) break;
      const question = pool.questions[round];
      if (!question) continue;
      selected.push({ question, topic: pool.topic });
      added = true;
    }
    if (!added) break;
    round += 1;
  }

  const catalog = TOPICS.flatMap((topic) =>
    topic.questions.map((question) => ({ question, topic })),
  );

  for (const stake of STAKES) {
    if (selected.some((item) => item.question.stake === stake)) continue;
    const donor = catalog.find(
      (item) =>
        item.question.stake === stake &&
        !selected.some((current) => current.question.id === item.question.id),
    );
    const replaceAt = selected.findIndex((item) => !item.question.stake);
    if (donor && replaceAt >= 0) selected[replaceAt] = donor;
  }

  const doubled = new Set<string>();
  for (const stake of STAKES) {
    const match = selected.find((item) => item.question.stake === stake);
    if (match) doubled.add(match.question.id);
  }

  return shuffle(selected).map(({ question, topic }) =>
    present(question, topic, doubled.has(question.id) ? 2 : 1),
  );
}

export function scoreAttempt(
  questions: readonly AttemptQuestion[],
  answers: Readonly<Record<string, string>>,
) {
  let points = 0;
  let max = 0;
  let correct = 0;
  for (const question of questions) {
    max += question.weight;
    if (answers[question.id] === question.answer) {
      points += question.weight;
      correct += 1;
    }
  }
  return { points, max, correct, total: questions.length };
}
