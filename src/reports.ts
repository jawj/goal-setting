
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
  styles = `
    html {
      margin: 1em 20%;
      font: 16px/1.5 'Source Serif Pro', serif;
      color: #444;
    }

    h1, h2, h3, h4, h5 {
      color: #269;
      line-height: 1.05;
      margin-top: 2em;
    }
  `,
  htmlWrap = (s: string) => `<html><head><title>Goal-setting report</title><style>${styles}</style></head><body>${s}</body></html>`;

export const stage1Report = () => htmlWrap(markdown.render(`
# Setting goals

## Stage 1 summary
` +
  stage1Items.map(item => `
### ${item.header}

${getAnswer(item.answer)}
`).join('')));
