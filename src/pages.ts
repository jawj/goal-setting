import m from 'mithril';
import { Page } from './Page';
import { Question } from './Question';
import { SortableList } from './SortableList';
import { Answers, getAnswer, GoalIndex, goalIndices, setAnswer } from './answers';
import { stage1Report, stage2Report } from './reports';

const goalHeading = (index: number) => `### Goal ${index}: ${getAnswer(`goalTitle${index}` as any)}`;

let
  stage1ReportUrl: string,
  stage2ReportUrl: string;

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
        Take a moment to consider your home and family life. Peaceful, harmonious family life provides people with a sense of belonging, support for their ambitions, and reciprocal purpose. Describe what your ideal family life would be like. You can write about your parents and siblings, or about your plans for your own partner, or about your children, if any — or about all of these. What kind of partner would be good for you? How could you improve your relationship with your parents or siblings?

        Think and write for at least two minutes, then move on.   
      `,
      m(Question, { id: 'familyFuture', size: 'medium', minWords: 10 }, `Describe what your ideal family life would be like.`)
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

        Think about the people you know who have made bad decisions or remained indecisive, or who chronically deceive themselves or other people, or who let cynicism and anger dominate their lives. Where do you _not_ want to be?

        Dream while you write, and don't stop. Write at least until the 15 minutes have passed. Let yourself form a very clear picture of the undesirable future. 

        <p class="calm">Don't rush — this exercise is for your benefit.</p>   
      `,
      m(Question, { id: 'futureAvoidSummary', size: 'large', minWords: 10 }, `Where do you _not_ want to be?`)
    )
  },
  {
    id: 'stage1-complete',
    oninit: () => {
      stage1ReportUrl = URL.createObjectURL(new Blob([stage1Report()], { type: 'text/html' }));
    },
    onremove: () => {
      URL.revokeObjectURL(stage1ReportUrl);
    },
    view: () => m(Page,
      { title: 'Stage 1 completed' },
      `
        Congratulations! You have now realized a vision of your ideal future, and outlined a future that is best avoided. You can use the summary of this vision to help you complete Stage 2 of the Ideal Future planning process.

        <p style="margin: 2em 0;"><a href="${stage1ReportUrl}" download="goals_stage_1_summary.html" class="button">
          Download stage 1 summary
        </a></p>
      `
    )
  },
  {
    id: 'stage2',
    view: () => m(Page,
      { title: '_Stage 2_ &nbsp; Specific goal identification: Introduction' },
      `
        In this stage, you will first be asked to define and personally title your overall future plan. Then, you will be asked to take your general plans for the ideal future and break them up into more specific goals. Each of these separate goals will also be given its own title. This step will help you clarify your goals.
      `
    )
  },
  {
    id: 'ideal-future-title',
    view: () => m(Page,
      { title: 'Title and briefly describe your ideal future' },
      `
        Please specify a title and brief description for your ideal future as a whole. This can be as simple as "My Ideal Future" in both fields or, if you have something more personal in mind, you can specify that. Imagine that you are both specifying and summarizing your ambitions with this title. This will help you remember what you are aiming for.

        In later screens you can define, prioritize, and analyze specific goals. 
      `,
      m(Question, { id: 'idealFutureTitle', size: 'small', minWords: 1 }, `Main goal title`),
      m(Question, { id: 'idealFutureDescription', size: 'medium', minWords: 1 }, `Main goal description`),
    )
  },
  {
    id: 'specify-clarify-goals',
    view: () => m(Page,
      { title: 'Specifying and clarifying your goals' },
      `
        Please break down your ideal future into 6 goals. You can re-word, re-write and organize the relevant material from Stage 1 for your goal summaries, if you wish, or you can rely on your memory.

        These specific goals can be from a number of different domains.

        * A personal goal might be "I would like to be healthier".
        * A career goal might be "I would like to be more interested in my job".
        * A social goal might be "I would like to meet more people".

        The summaries you write about each goal should be reasonably brief and memorable. Make sure that each goal summary includes nothing but the most important information. Take 10-15 minutes for this part of the exercise. Feel free to revise and edit.
      `,
      ...(goalIndices.reduce<any[]>((memo, index) => memo.concat([
        `### Goal ${index}`,
        m(Question, { id: `goalTitle${index}` as any, size: 'small', minWords: 1 }, `Goal title`),
        m(Question, { id: `goalDescription${index}` as any, size: 'medium', minWords: 1 }, `Goal description`),
      ]), []))
    )
  },
  {
    id: 'prioritise-goals',
    view: () => {
      if (!getAnswer('goalPriorities')) setAnswer('goalPriorities', JSON.stringify(goalIndices));

      const
        priorities: GoalIndex[] = JSON.parse(getAnswer('goalPriorities')!),
        items = priorities.map(i => getAnswer(`goalTitle${i}` as keyof Answers) ?? '');

      return m(Page,
        { title: 'Prioritising your goals' },
        `
        Please organize your goals by dragging and dropping them. Give your most important goal a rank of 1 (first place), your next most important goal a rank of 2 (second place), and so on. 
      `,
        m(SortableList, {
          items,
          onUpdate: ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
            const priorities = JSON.parse(getAnswer('goalPriorities')!);
            priorities.splice(newIndex, 0, priorities.splice(oldIndex, 1)[0]);
            setAnswer('goalPriorities', JSON.stringify(priorities));
            console.log(priorities);
          },
        })
      );
    }
  },
  {
    id: 'strategize-goals',
    view: () => m(Page,
      { title: 'Strategizing about your goals' },
      `
        Now you will be asked about the following elements or feature for each of the specific goals you have identified:

        * Evaluating your motives
        * Considering the broad personal and social impact of goals
        * Considering the detailed strategies for goal attainment
        * Identifying potential obstacles and their solutions
        * Monitoring progress towards desired goals

        Thus, the five pages that contain these elements or features will repeat until all your goals have been assessed. 
      `,
    )
  },
  ...(goalIndices.reduce<any[]>((memo, index) => memo.concat([
    {
      id: `strategize-goal-${index}`,
      view: () => m(Page,
        { title: `Strategizing about goal ${index}: ${getAnswer(`goalTitle${index}` as any)}` },
        `
          In the ${index === 0 ? `first` : index === goalIndices.length - 1 ? `last` : `next`} 
          set of five pages, you'll be asked about goal ${index}.
        `,
      )
    },
    {
      id: `evaluate-motives-${index}`,
      view: () => m(Page,
        { title: `Evaluating your motives` },
        `
          For this goal, you might want to consider issues such as the following:

          * Do you truly believe that pursuing this goal is important?
          * Would you feel ashamed, guilty or anxious if you didn't?
          * Do you want to achieve this goal personally, or are you doing it to please someone else? (It is often a good thing to do something for someone else, but you should know when you are doing that).
          * Are you pursuing this goal because the situation that you find yourself in in seems to demand it?
          * Is the pursuit of this goal enjoyable, stimulating or satisfying?
          * Is this goal part of a deeply felt personal dream?

          Please spend a minute or two writing down your reasons for pursuing this goal.

          ${goalHeading(index)}
        `,
        m(Question, { id: `evaluateMotives${index}` as any, size: 'medium', minWords: 10 }, `Reasons for pursuing this goal`),
      )
    },
    {
      id: `broad-impacts-${index}`,
      view: () => m(Page,
        { title: `Considering the broad personal and social impact of goals` },
        `
          Goals can have an impact beyond the obvious. Our specific personal goals are connected to larger, more important life goals. These higher-order goals reflect our most important ideals. The specific goal of spending more time studying or reading, for example, is a specific element of the more important goal of being a well-educated person. Achieving other specific goals, such as becoming more assertive, help us to move closer to our ideal self.

          You will now be asked to write about what more globally important things might be affected by your attainment the goal listed below:

          * How would disciplined success change the way that you see yourself?
          * How would other parts of your personal life change, in consequence?
          * How would this affect the way that others perceive you? (You might also consider fears of being successful. Sometimes people are afraid to succeed because of the responsibility this would entail. Sometimes they are afraid of even becoming conscious of their true goals, because then they would be aware when they fail. These are not good strategies.)
          * How would attaining this goal affect the lives of the people around you?
          * What broader beneficial social impact might your success have?

          Please write a short description of how attaining this goal would change additional important aspects of your life, and the lives of others.

          ${goalHeading(index)}
        `,
        m(Question, { id: `broadImpacts${index}` as any, size: 'medium', minWords: 10 }, `How would attaining this goal change additional important aspects of your life, and the lives of others?`),
      )
    },
    {
      id: `detailed-strategies-${index}`,
      view: () => m(Page,
        { title: `Considering detailed strategies for goal attainment` },
        `
          Goals are related to lesser, smaller sub-goals and behaviors, as well as connected to higher-order, more important abstract goals. Sub-goals are easier to achieve, but are still fundamental to reaching our greater aspirations. Sub-goals can thus be thought of as strategies for greater goal achievement. Thinking about what specific things need to be done in order to achieve your goals allows you to create practical strategies for realizing your dreams. Please take some time to write about the concrete daily or weekly things you might do to further your goal. Deeply consider what particular behaviors this goal is built upon.

          * Should you spend more time planning at school or at work?
          * Do you need to spend more time with your friends, or your children?
          * Do you need to discuss household chores with your roommates, partner or spouse?

          Specify when you are going to work on your goal. Specify how often. Specify where. Think hard about how you are going to implement your plans. Make your plans concrete.

          Write down those concrete weekly or daily things you might do to further this goal. 

          ${goalHeading(index)}
        `,
        m(Question, { id: `detailedStrategies${index}` as any, size: 'medium', minWords: 10 }, `Specify when you are going to work on your goal. Specify how often. Specify where. Think hard about how you are going to implement your plans. Make your plans concrete.`),
      )
    },
    {
      id: `obstacles-solutions-${index}`,
      view: () => m(Page,
        { title: `Identifying potential obstacles and their solutions` },
        `
          Thinking about achieving a goal is obviously easier than going out and getting it done. Many things related to the natural environment, the social group and the self can stand in your way. It is useful to anticipate these difficulties, so that you can plan to overcome them.

          Consider your goal, once again. Write down all the potential obstacles you can think up. Write down ways to overcome these obstacles.

          How might you interfere with your own plans? How can you ensure this won't happen? Sometimes change is threatening to people we know and love. Will the people you know help you, or interfere? How can you communicate with them, so that they will support you? Think of realistic and worst-case scenarios. What are your options? What are your alternative plans?

          Write down potential obstacles to this goal, and specify the ways you might overcome them. 

          ${goalHeading(index)}
        `,
        m(Question, { id: `obstaclesSolutions${index}` as any, size: 'medium', minWords: 10 }, `Write down potential obstacles to this goal, and specify the ways you might overcome them.`),
      )
    },
    {
      id: `monitor-progress-${index}`,
      view: () => m(Page,
        { title: `Monitoring progress towards desired goals` },
        `
          We need to know, concretely, whether or not we are progressing towards the attainment of valued goals. Of course, this is not an easy task. When we want to complete very specific tasks, feedback on our performance is relatively easy to monitor. However, if our goals are less short-term, this becomes a little more difficult.

          You are now being asked to identify personal benchmarks that will allow you to evaluate your own performance.

          * When would you like to achieve this goal? Be specific. Even if you have to revise a deadline later, it is still better to set one.
          * What sorts of things will you accept as evidence that you are progressing towards your stated goal?
          * How often are you going to monitor your own behavior?
          * How will things in your life have to change, measurably, for you to feel satisfied in your progress?
          * How can you ensure that you are neither pushing yourself too hard, and ensuring failure, or being too easy on yourself, and risking boredom and cynicism?

          Your benchmarks should be personal indicators of success. It doesn't matter what others may think defines progress towards your goal. Write down those accomplishments would truly indicate positive movement on your part. Feel free to write as much as you feel is necessary.

          Write down how you might monitor your progress with regards to this goal.  

          ${goalHeading(index)}
        `,
        m(Question, { id: `monitorProgress${index}` as any, size: 'medium', minWords: 10 }, `Write down how you might monitor your progress with regards to this goal.`),
      )
    }
  ]), [])),
  {
    id: `future-steps`,
    view: () => m(Page,
      { title: `Future steps` },
      `
        People often worry themselves unproductively by constantly revisiting their goals, instead of concentrating on their attainment. It is easy to undermine yourself, by always questioning your aims and intentions. Am I doing the right thing? Have I chosen the correct goals? This leads to chronic worry, unproductive behavior, and lack of opportunity to learn.

        * Now that you have set goals, it is best to concentrate on a daily or weekly basis on implementing the strategies you have devised for their attainment, instead of worrying about the goals themselves. It is just as important to stick to a plan, as it is to make a plan.
        * If you implement your goals, even if they are not perfect, you will learn enough during the implementation phase to make better goals next time. As you continue to repeat the process, you will get wiser and wiser.
        * Set aside some time every week or two — no more than ten or twenty minutes — to mentally review your performance. You will gather all sorts of useful information that you can use to reconsider your plans, down the road.

        Researchers have found that if someone performs goal-setting tasks multiple times over a long period, there is a greater chance of health and productivity improvements.

        As a result, you might wish to engage in this sort of exercise on a regular basis, every four, six, or twelve months, as your situation changes. 
      `,
    )
  },
  {
    id: `congrats`,
    oninit: () => {
      stage2ReportUrl = URL.createObjectURL(new Blob([stage2Report()], { type: 'text/html' }));
    },
    onremove: () => {
      URL.revokeObjectURL(stage2ReportUrl);
    },
    view: () => m(Page,
      { title: `Congratulations — you've finished` },
      `
        Thank you for taking the time to complete this exercise. You can download a summary of your answers below.

        <p style="margin: 2em 0;"><a href="${stage2ReportUrl}" download="goals_complete_summary.html" class="button">
          Download complete summary
        </a></p>

        Your answers will be stored in your web browser indefinitely, which may be useful if you come to review this exercise in future. However, you can also erase your answers if you prefer.
      `,
      m('p', { style: 'margin: 2em 0;' },
        m('a.button', {
          style: 'background: #f00;',
          onclick: () => {
            if (confirm("Erase all your answers? This action cannot be undone.")) {
              localStorage.clear();
              m.route.set('');
            }
          }
        }, 'Erase my answers'),
        m('a.button', {
          onclick: () => m.route.set('')
        }, 'Return to start')
      ),
    )
  },

];

export const
  pageWithPath = Object.fromEntries(pages.map(p => ['/' + p.id, p])),
  pageIdBefore = Object.fromEntries(pages.map((p, i) => ['/' + p.id, pages[i - 1]?.id])),
  pageIdAfter = Object.fromEntries(pages.map((p, i) => ['/' + p.id, pages[i + 1]?.id])),
  progressAtPath = Object.fromEntries(pages.map((p, i, arr) => ['/' + p.id, i / (arr.length - 1)])),

  goto = (pageId: string, target: HTMLElement | null) => {
    m.route.set('/' + pageId);
    window.scrollTo(0, 0);
    target?.blur();
  };

