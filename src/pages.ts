import m from 'mithril';
import Page from './Page';
import Question from './Question';

export default [
  {
    id: 'intro',
    view: () => m(Page,
      { title: 'First question' }, `
          The exercise you have been tasked with involves thinking about your future. There are 2 stages:
          
          * In Stage 1, you will write generally about your goals.
          * In Stage 2, you will specify and clarify the nature of those goals, and begin to strategize.
          
          We recommend you consider completing the process over two or more separate days. People who allow themselves some time to sleep when they are making important decisions appear to do a better job and to benefit more. Some students may need 2 hours or more to complete the exercise. This may feel long, but it is meant to benefit you personally, so please take your time.
          
          You will need to concentrate and process what you are writing, so try to complete this exercise when you are feeling alert and relatively unrushed. Simply follow the on-screen instructions as you go along. Press the "Next" button to move onto the next screen. If you need to take a short break or two of 5-10 minutes to get up and walk around during the process, please feel free to do so.
          
          You will be asked to write down your private thoughts and feelings. Please type them directly into the box provided. Write in whatever language you feel most comfortable with. At times, you may be asked to write non-stop, without regard for grammar or spelling. At other times, you may be asked to revise what you have written.
          
          Everything you write will remain accessible only to you. The report you produce will summarize your personal goals and strategies. You will be emailed a copy of this report to your account address shortly after you complete the exercise, and then your report will be deleted.
          
          During some sections, you will be asked to write for specified amounts of time. Please try your best to write for the amount of time specified (so, if it asks you to write for 1-2 minutes, please write continuously for at least 60 seconds).
        `,
      m(Question, { id: 'q1', size: 'small' }, `What _is_ your name?`)
    )
  },
  {
    id: 'second',
    view: () => m(Page,
      { title: 'Second question' }, `
          The exercise you have been tasked with involves thinking about your future. There are 2 stages:
          
          * In Stage 1, you will write generally about your goals.
          * In Stage 2, you will specify and clarify the nature of those goals, and begin to strategize.
        `,
      m(Question, { id: 'q2', size: 'medium' }, `What are your favourite dog breeds?`)
    )
  },
  {
    id: 'third',
    view: () => m(Page,
      { title: 'Third question' }, `
          The exercise you have been tasked with involves thinking about your future. There are 2 stages:
          
          * In Stage 1, you will write generally about your goals.
          * In Stage 2, you will specify and clarify the nature of those goals, and begin to strategize.
        `,
      m(Question, { id: 'q3', size: 'medium' }, `What are your favourite dog breeds?`)
    )
  }
];
