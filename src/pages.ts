import m from 'mithril';
import Page from './Page';
import Question from './Question';

export default [
  {
    id: 'welcome',
    view: () => m(Page,
      { title: 'Welcome' },
      `
        During this exercise, you will be presented with a series of pages that either provide you with information or ask you to describe aspects of your personality and experiences.

        You may proceed through the exercise by clicking the _Next »_ button, and go back to previous pages by clicking _« Previous_. 

        Your data is saved continuously as you type. It is saved locally, to this device: nothing is sent elsewhere.

        You may quit the exercise any time by closing this tab or window. You can come back to the exercise later, and resume your work. All your previous work will be waiting for you, and will be taken to the last point in the exercise you're were working on.
      `,
      // m(Question, { id: 'q2', size: 'medium' }, `What are your favourite dog breeds?`)
    )
  },
  {
    id: 'instr1',
    view: () => m(Page,
      { title: 'General instructions (1)' },
      `
        This exercise involves thinking about your future. There are 2 stages:

        * In Stage 1, you will write generally about your goals.
        * In Stage 2, you will specify and clarify the nature of those goals, and begin to strategize.

        We recommend you consider completing the process over two or more separate days. People who allow themselves some time to sleep when they are making important decisions appear to do a better job and to benefit more. Some students may need 2 hours or more to complete the exercise. This may feel long, but is meant to benefit **you** personally so please take your time.

        You will need to concentrate and process what you are writing, so try to complete the exercise when you are feeling alert and relatively unrushed. Simply follow the on-screen instructions as you go along. If you need to take a short break or two of 5-10 minutes to get up and walk around during the process, please feel free to do so.

        You will be asked to write down your private thoughts and feelings. Please type them directly into the box provided. Write in whatever language you feel most comfortable with. At times, you may be asked to write non-stop, without regard for grammar or spelling. At other times, you may be asked to revise what you have written.

        During some sections, you will be asked to write for specified amounts of time. Please try your best to write for the amount of time specified (so, if it asks you to write for 1-2 minutes, please write continuously for at least 60 seconds).
      `,
      // m(Question, { id: 'q2', size: 'medium' }, `What are your favourite dog breeds?`)
    )
  },
  {
    id: 'instr2',
    view: () => m(Page,
      { title: 'General instructions (2)' },
      `
        This exercise is designed to benefit you. On many pages you will not be able to skip forward without spending a minimum required time writing.

        We do encourage you to write in some detail. Research indicates that better results are obtained as the amount written by participants increases.

        After you have completed the exercise, you will be taken to a summary page, where you can save a copy of your writing.
      `,
      // m(Question, { id: 'q3', size: 'medium' }, `What are your favourite dog breeds?`)
    )
  }
];
