import m from 'mithril';
import { Page } from './Page';
import { Question } from './Question';

export const pages = <const>[
  {
    id: 'welcome',
    view: () => m(Page,
      { title: 'Welcome' },
      `
        During this exercise, you will be presented with a series of pages that either provide you with information or ask you to describe aspects of your personality and experiences.

        You may proceed through the exercise by clicking the _Next »_ button, and go back to previous pages by clicking _« Previous_. 

        Your data is saved continuously as you type. It is saved locally, to this device: nothing is sent elsewhere.

        You may quit the exercise any time by closing this tab or window. You can come back to the exercise later, and resume your work. All your previous work will be waiting for you, and will be taken to the last point in the exercise you're were working on.
      `
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
      `
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
      `
    )
  },
  {
    id: 'stage1',
    view: () => m(Page,
      { title: '_Stage 1_\n\nThe ideal future: preliminary notes and thoughts' },
      `
        In Stage 1 of this exercise, you will begin to create a version, in writing, of your ideal future. William James, the great American psychologist, once remarked that he did not know what he thought until he had written his thoughts down. When he didn't know what to write, he wrote about anything that came to mind. Eventually, his ideas became focused and clarified.

        Brainstorm. Write whatever comes to mind. Don't worry too much about sentence construction, spelling, or grammar. There will be plenty of time to write polished sentences later. Avoid criticizing what you write. Premature criticism interferes with the creative process.

        In Stage 2, you will specify and clarify your goals, and begin to strategize
      `
    )
  },
  {
    id: 'ideal-future',
    view: () => m(Page,
      { title: 'Imagining your ideal future' },
      `
        You will start with some exercises of imagination that will help you warm up to the task of defining your future.

        These will include 8 questions such as "what could you do better?", "what would you like to learn about?", "what habits would you like to improve?". After briefly answering these 8 questions, you will be asked to write for 15 minutes about your ideal future, without editing or criticism.

        Let yourself daydream or fantasize. You are trying to put yourself into a state of reverie, which is a form of dream-like thinking that relies heavily on internal imagery. This kind of thinking allows all your different internal states of motivation and emotion to find their voice.

        It might be best to concentrate on your future three to five years down the road, although you may have reasons to concentrate on a shorter or longer timespan (eighteen months to ten years). 
      `
    )
  },
  {
    id: 'one-thing-better',
    view: () => m(Page,
      { title: 'One thing you could do better' },
      `
        If you could choose only one thing that you could do better, what would it be?

        Think and write for at least two minutes, then move on.

        <p class="calm">Don't rush — this exercise is for your benefit.</p>
      `,
      m(Question, { id: 'oneThingBetter', size: 'medium', minWords: 10 }, `If you could choose only one thing that you could do better, what would it be?`)
    )
  },
  {
    id: 'things-to-learn',
    view: () => m(Page,
      { title: 'Things to learn about' },
      `
        What would you like to learn more about, in the next six months? Two years? Five years?

        Think and write for at least two minutes, then move on. 
      `,
      m(Question, { id: 'thingsToLearn', size: 'medium', minWords: 10 }, `What would you like to learn more about, in the next six months? Two years? Five years?`)
    )
  },
  {
    id: 'improve-habits',
    view: () => m(Page,
      { title: 'Improve your habits' },
      `
        What habits would you like to improve:

        * At school?
        * At work?
        * With friends and family?
        * For your health?
        * With regards to other habits?

        Think and write for at least two minutes, then move on.  
      `,
      m(Question, { id: 'improveHabits', size: 'medium', minWords: 10 }, `What habits would you like to improve ... At school? At work? With friends and family? For your health? With regards to other habits?`)
    )
  }
];

export const
  pageWithId = Object.fromEntries(pages.map(p => ['/' + p.id, p])),
  pageIdBefore = Object.fromEntries(pages.map((p, i) => ['/' + p.id, pages[i - 1]?.id])),
  pageIdAfter = Object.fromEntries(pages.map((p, i) => ['/' + p.id, pages[i + 1]?.id])),
  goto = (pageId: string, target: HTMLElement | null) => {
    m.route.set('/' + pageId);
    window.scrollTo(0, 0);
    target?.blur();
  };
