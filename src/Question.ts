import m from 'mithril';
import Markdown from './Markdown';
import * as state from './state';

interface QuestionAttrs {
  id: keyof state.State;
  size: 'small' | 'medium' | 'large';
  placeholder?: string;
  minChars?: number;
}

export default {
  view: (vnode: m.Vnode<QuestionAttrs>) =>
    m('div.question',
      m('div.questionText', m(Markdown, vnode.children)),
      m('p',
        m('textarea',
          {
            rows: vnode.attrs.size === 'large' ? 24 : vnode.attrs.size === 'medium' ? 8 : 1,
            oninput: (e: Event) => state.setState(vnode.attrs.id, (e.currentTarget as HTMLTextAreaElement).value)
          },
          state.getState(vnode.attrs.id)
        )
      )
    )
} as m.Component<QuestionAttrs>;
