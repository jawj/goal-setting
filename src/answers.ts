
export const
  numGoals = 6,
  goalIndices: number[] = [];

for (let i = 1; i <= numGoals; i++) goalIndices.push(i);

export type GoalIndex = 1 | 2 | 3 | 4 | 5 | 6;
type GoalTitle = `goalTitle${GoalIndex}`;

export type Answers = Partial<
  {
    oneThingBetter: string;
    thingsToLearn: string;
    improveHabits: string;
    idealSocialLife: string;
    leisureFuture: string;
    familyFuture: string;
    careerFuture: string;
    qualitiesAdmire: string;
    idealFutureSummary: string;
    futureAvoidSummary: string;
    idealFutureTitle: string;
    idealFutureDescription: string;
  } & {
    [K in GoalTitle]: string;
  } & {
    goalPriorities: GoalIndex[];
  }
>;

export type AnswersValid = { [K in keyof Answers]?: boolean };

export const
  setAnswer = (k: keyof Answers, value: string) => {
    localStorage.setItem(k, value);
  },
  getAnswer = (k: keyof Answers) => localStorage.getItem(k),
  markAnswerValid = (k: keyof AnswersValid, valid: boolean) => {
    answersValid[k] = valid;
  },
  isAnswerValid = (k: keyof Answers) => answersValid[k],
  answersValid: AnswersValid = {};
