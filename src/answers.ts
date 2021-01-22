
export type Answers = Partial<{
  oneThingBetter: string;
  thingsToLearn: string;
  improveHabits: string;
}>;

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
