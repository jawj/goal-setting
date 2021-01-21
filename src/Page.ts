import m from 'mithril';
import Markdown from './Markdown';

interface PageAttrs {
  title: string;
  minSeconds?: number;
}

interface PageState {
  initTime: number;
}

export default {
  oninit: (vnode: m.Vnode<PageAttrs, PageState>) => {
    vnode.state.initTime = Date.now();
  },
  view: (vnode: m.Vnode<PageAttrs>) =>
    m('div.page',
      m('h1', m(Markdown, vnode.attrs.title)),
      m(Markdown, vnode.children),
    )
} as m.Component<PageAttrs>;
