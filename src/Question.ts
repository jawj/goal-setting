
import m from 'mithril';
import Markdown from './Markdown';
import { getAnswer, setAnswer, isAnswerValid, markAnswerValid, Answers } from './answers';
import * as utils from './utils';

interface QuestionAttrs {
  id: keyof Answers;
  size: 'small' | 'medium' | 'large';
  placeholder?: string;
  minChars?: number;
  minWords?: number;
}

const updateValid = (vnode: m.Vnode<QuestionAttrs>) => {
  const
    { id, minChars, minWords } = vnode.attrs,
    value = getAnswer(id),
    valid =
      !!(!minChars || (value && value.length >= minChars)) &&
      !!(!minWords || (value && utils.wordCount(value) >= minWords));

  markAnswerValid(id, valid);
  m.redraw();
};

export const Question: m.Component<QuestionAttrs> & { type: string } = {
  type: 'question',
  oninit: updateValid,
  view: (vnode) => {
    const
      { id } = vnode.attrs,
      valid = isAnswerValid(id);

    return m('div.question',
      m('div.questionText', m(Markdown, vnode.children)),
      m(`p.response.${valid ? 'complete' : 'incomplete'}`,
        m('textarea',
          {
            rows: vnode.attrs.size === 'large' ? 10 : vnode.attrs.size === 'medium' ? 5 : 1,
            oninput: (e: Event) => {
              const { value } = e.currentTarget as HTMLTextAreaElement;
              setAnswer(id, value);
              updateValid(vnode);
            }
          },
          getAnswer(id),
        )
      )
    );
  }
};
