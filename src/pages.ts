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
      { title: '_Stage 1_ &nbsp; The ideal future: preliminary notes and thoughts' },
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
      { title: 'One thing you could do better (1/8)' },
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
      { title: 'Things to learn about (2/8)' },
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
      { title: 'Improve your habits (3/8)' },
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
  },
  {
    id: 'ideal-social-life',
    view: () => m(Page,
      { title: 'Your social life in the future (4/8)' },
      `
        Friends and associates are an important part of a meaningful, productive life. Take a moment to consider your social network. Think about the friends you might want to have, and the connections you might want to make. It is perfectly reasonable to choose friends and associates who are good for you. Describe your ideal social life.

        Think and write for at least two minutes, then move on.   
      `,
      m(Question, { id: 'idealSocialLife', size: 'medium', minWords: 10 }, `Describe your ideal social life.`)
    )
  },
  {
    id: 'leisure-future',
    view: () => m(Page,
      { title: 'Your leisure activity in the future (5/8)' },
      `
        Take a moment to consider the activities you would like to pursue outside of obligations such as work, family and school. The activities you choose should be worthwhile and personally meaningful.

        Without a plan, people often default to whatever is easiest, such as television watching, and waste their private time. If you waste 4 hours a day, which is not uncommon, then you are wasting 1,400 hours a year. That is equivalent to 35 40-hour work weeks, which is almost as much as the typical individual spends at his or her job every year. If your time is worth £25 per hour, then you are wasting time worth £35,000 per year. Over a 50-year period, that is £1.8 million, not counting interest or any increase in the value of your time as you develop.

        Describe what your leisure life would be like, if it was set up to be genuinely productive and enjoyable.

        Think and write for at least two minutes, then move on.   
      `,
      m(Question, { id: 'leisureFuture', size: 'medium', minWords: 10 }, `Describe what your leisure life would be like, if it was set up to be genuinely productive and enjoyable.`)
    )
  },
  {
    id: 'family-future',
    view: () => m(Page,
      { title: 'Your family life in the future (6/8)' },
      `
        Take a moment to consider your home and family life. Peaceful, harmonious family life provides people with a sense of belonging, support for their ambitions, and reciprocal purpose. Describe what your ideal family would be like. You can write about your parents and siblings, or about your plans for your own partner, or about your children, if any — or about all of these. What kind of partner would be good for you? How could you improve your relationship with your parents or siblings?

        Think and write for at least two minutes, then move on.   
      `,
      m(Question, { id: 'familyFuture', size: 'medium', minWords: 10 }, `Describe what your ideal family would be like.`)
    )
  },
  {
    id: 'career-future',
    view: () => m(Page,
      { title: 'Your career in the future (7/8)' },
      `
        Much of what people find engaging in life is related to their careers. A good career provides security, status, interest, and the possibility of contributing to the community. Take a moment to consider your school or work careers, or both. Where do you want to be in six months? Two years? Five years? Why? What are you trying to accomplish?

        Think and write for at least two minutes, then move on.    
      `,
      m(Question, { id: 'careerFuture', size: 'medium', minWords: 10 }, `Where do you want to be in six months? Two years? Five years? Why? What are you trying to accomplish?`)
    )
  },
  {
    id: 'qualities-admire',
    view: () => m(Page,
      { title: 'Qualities you admire (8/8)' },
      `
        People you automatically admire have qualities that you would like to possess or imitate. Identifying those qualities can help you determine who it is that you want to be. Take a moment to think about the two or three people you most admire. Who are they? Which qualities do they possess that you wish you had?

        Think and write for at least two minutes, then move on.    
      `,
      m(Question, { id: 'qualitiesAdmire', size: 'medium', minWords: 10 }, `Who are the people you admire the most? Which qualities do they possess that you wish you had?`)
    )
  },
  {
    id: 'ideal-future-summary',
    view: () => m(Page,
      { title: 'The ideal future: complete summary' },
      `
        Now you have written briefly about your future, and have had some time to consider more specific issues. This step gives you the chance to integrate all the things that you have just thought and wrote about.

        Close your eyes. Daydream, if you can, and imagine your ideal future:

        * Who do you want to be?
        * What do you want to do?
        * Where do you want to end up?
        * Why do you want these things?
        * How do you plan to achieve your goals?
        * When will you put your plans into action?

        Write about the ideal future that you have just imagined for 15 minutes. Write continuously and try not to stop while you are writing. Don't worry about spelling or grammar. You will have an opportunity to fix your mistakes later.

        Dream while you write, and don't stop. Write at least until the 15 minutes have passed. Be ambitious. Imagine a life that you would regard as honourable, exciting, productive, creative and decent.

        Remember, you are writing only for yourself. Choose goals that you want to pursue for your own private reasons, not because someone else thinks that those goals are important. You don't want to live someone else's life. Include your deepest thoughts and feelings about all your personal goals.

        <p class="calm">Don't rush — this exercise is for your benefit.</p>   
      `,
      m(Question, { id: 'idealFutureSummary', size: 'large', minWords: 10 }, `Who do you want to be? What do you want to do? Where do you want to end up? Why do you want these things? How do you plan to achieve your goals? When will you put your plans into action?`)
    )
  },
  {
    id: 'future-avoid-summary',
    view: () => m(Page,
      { title: 'A future to avoid: complete summary' },
      `
        You have now written about the future you would like to have. Clearly defining your future can help reduce the uncertainty in your life, and reduce the amount of negative emotion that you chronically experience, in consequence. This is good for your confidence and for your health. Having well-defined goals also increases your chances of experiencing positive emotion, as people experience most of their hope and joy and curiosity and engagement as a consequence of pursuing valued goals (and not, as people generally think, by attaining them).

        It can also be very useful to deeply imagine the future you would like to avoid. You probably know people who have made very bad decisions, and who end up with a life that nobody would want. You also likely have weaknesses yourself. If you let those get out of control, then you might also end up with a miserable, painful life. Most people know how their life could go downhill if they let it.

        Spend some time, now, thinking about what your life would be like if you failed to define or pursue your goals, if you let your bad habits get out of control, and if you ended up miserable, resentful and bitter. Imagine your life three to five years down the road, if you failed to stay on the path you know you should be on. Use your imagination. Draw on your knowledge of the anxiety and pain you have experienced in the path, when you have betrayed yourself.

        Think about the people you know who have made bad decisions or remained indecisive, or who chronically deceive themselves or other people, or who let cynicism and anger dominate their lives. Where do you not want to be?

        Dream while you write, and don't stop. Write at least until the 15 minutes have passed. Let yourself form a very clear picture of the undesirable future. 

        <p class="calm">Don't rush — this exercise is for your benefit.</p>   
      `,
      m(Question, { id: 'futureAvoidSummary', size: 'large', minWords: 10 }, `Where do you not want to be?`)
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
