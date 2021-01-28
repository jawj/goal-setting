import m from 'mithril';
import { pageIdAfter, pageIdBefore, goto, progressAtPath } from './pages';
import { isAnswerValid, AnswersValid } from './answers';
import Markdown from './Markdown';
import ProgressBar from './ProgressBar';

interface PageAttrs {
  title: string;
  minSeconds?: number;
}

interface PageState {
  initTime: number;
  minSecondsElapsed: boolean;
  interval: ReturnType<typeof setInterval>;
}

export const
  isComplete = (vnode: m.Vnode<PageAttrs, PageState>) => {
    if (vnode.attrs.minSeconds && !vnode.state.minSecondsElapsed) return false;

    const
      { children } = vnode,
      questionIds: (keyof AnswersValid)[] = !Array.isArray(children) ? [] :
        children.map((c: any) => c.tag?.type === 'question' ? c.attrs?.id : undefined).filter(c => c !== undefined);

    return questionIds.every(id => isAnswerValid(id));
  };

export const Page: m.Component<PageAttrs, PageState> = {
  oninit: (vnode) => {
    vnode.state.initTime = Date.now();
    if (vnode.attrs.minSeconds) {
      vnode.state.minSecondsElapsed = false;
      setTimeout(() => {
        vnode.state.minSecondsElapsed = true;
        m.redraw();
      }, 1000 * vnode.attrs.minSeconds);
    }
    // vnode.state.interval = setInterval(m.redraw, 1000);
  },
  // onremove: (vnode) => clearInterval(vnode.state.interval),
  view: (vnode) => {
    const
      currentPageId = m.route.get(),
      complete = isComplete(vnode),
      prevButton = pageIdBefore[currentPageId] &&
        m('button.prev',
          { onclick: (e: Event) => goto(pageIdBefore[currentPageId], e.target as HTMLElement) },
          '« Previous'),
      nextButton = pageIdAfter[currentPageId] &&
        m(`button.next.${complete ? 'enabled' : 'disabled'}`,
          { onclick: (e: Event) => complete ? goto(pageIdAfter[currentPageId], e.target as HTMLElement) : alert('Please complete all questions to proceed.') },
          'Next »')/*,
      seconds = (Date.now() - vnode.state.initTime) / 1000,
      mins = Math.floor(seconds / 60),
      displayTime = mins < 1 ? `< 1 min` : mins < 2 ? `1 min` : mins < 60 ? `${mins} mins` : '1 hour+'
      */;

    return m('div.page',
      m(ProgressBar, { frac: progressAtPath[currentPageId] }),
      /* m('.timer', m.trust(`${displayTime} so far`)), */
      m('h1', m(Markdown, vnode.attrs.title)),
      m(Markdown, vnode.children),
      m('.navigation', prevButton, nextButton),
    );
  }
};

