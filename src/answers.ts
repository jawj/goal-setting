
export const
  numGoals = 6,
  goalIndices: number[] = [];

for (let i = 1; i <= numGoals; i++) goalIndices.push(i);

export type GoalIndex = 1 | 2 | 3 | 4 | 5 | 6;
type GoalTitle = `goalTitle${GoalIndex}`;
type GoalDescription = `goalDescription${GoalIndex}`;
type EvaluateMotives = `evaluateMotives${GoalIndex}`;
type BroadImpacts = `broadImpacts${GoalIndex}`;
type DetailedStrategies = `detailedStrategies${GoalIndex}`;
type ObstaclesSolutions = `obstaclesSolutions${GoalIndex}`;
type MonitorProgress = `monitorProgress${GoalIndex}`;

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
    [K in GoalDescription]: string;
  } & {
    goalPriorities: GoalIndex[];
  } & {
    [K in EvaluateMotives]: string;
  } & {
    [K in BroadImpacts]: string;
  } & {
    [K in BroadImpacts]: string;
  } & {
    [K in DetailedStrategies]: string;
  } & {
    [K in ObstaclesSolutions]: string;
  } & {
    [K in MonitorProgress]: string;
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
