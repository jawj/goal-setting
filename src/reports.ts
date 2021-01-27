
import MarkdownIt from 'markdown-it';
import { Answers, getAnswer } from "./answers";

const
  markdown = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  }),
  stage1Items: { answer: keyof Answers; header: string }[] = [
    { answer: 'oneThingBetter', header: 'One thing to do better' },
    { answer: 'thingsToLearn', header: 'Things to learn about' },
    { answer: 'improveHabits', header: 'Habits to improve' },
    { answer: 'idealSocialLife', header: 'Ideal social life' },
    { answer: 'leisureFuture', header: 'Productive, enjoyable leisure' },
    { answer: 'familyFuture', header: 'Ideal family life' },
    { answer: 'careerFuture', header: 'Future career' },
    { answer: 'qualitiesAdmire', header: 'Qualities I admire' },
    { answer: 'idealFutureSummary', header: 'The ideal future: complete summary' },
    { answer: 'futureAvoidSummary', header: 'A future to avoid: complete summary' },
  ],
  stage2Items: { answerStem: string; header: string }[] = [
    { answerStem: 'goalDescription', header: 'Description' },
    { answerStem: 'evaluateMotives', header: 'Motivation' },
    { answerStem: 'broadImpacts', header: 'Personal and social impact' },
    { answerStem: 'detailedStrategies', header: 'Implementation strategies' },
    { answerStem: 'obstaclesSolutions', header: 'Obstacles and solutions' },
    { answerStem: 'monitorProgress', header: 'Progress monitoring' },
  ],
  styles = `
    html {
      margin: 1em 20% 5em;
      font: 16px/1.5 'Source Serif Pro', serif;
      color: #444;
    }

    h1, h2, h3, h4, h5 {
      color: #269;
      line-height: 1.05;
      margin-top: 2em;
    }
  `,
  htmlWrap = (s: string) => `<html><head><title>Goal-setting report</title><style>${styles}</style></head><body>${s}</body></html>`,

  stage1Markdown = () => `
# _Setting goals_

# Stage 1 summary
` +
    stage1Items.map(item => `
### ${item.header}

${getAnswer(item.answer)}
`).join(''),

  stage2Markdown = () => stage1Markdown() + `
# Stage 2 summary

### Ideal future: title

${getAnswer('idealFutureTitle')}

### Ideal future: description

${getAnswer('idealFutureDescription')}

<br />

_Your goals are listed highest-priority first._

${JSON.parse(getAnswer('goalPriorities') ?? '[]').map((index: number, i: number) => `
## Goal ${i + 1}: <i>${getAnswer('goalTitle' + index as any)}</i>

${stage2Items.map(item => `
### ${item.header}

${getAnswer(item.answerStem + index as any)}
`).join('')}

`).join('')}
`;

export const
  stage1Report = () => htmlWrap(markdown.render(stage1Markdown())),
  stage2Report = () => htmlWrap(markdown.render(stage2Markdown()));
