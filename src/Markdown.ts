import m from 'mithril';
import MarkdownIt from 'markdown-it';

const
  markdown = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  }),
  render = (s: string) => {
    const
      trimmed = s.replace(/^\s*[\n\r]+/, '').trimRight(),
      leadingWhitespaceRegExp = /^(\s*)(.*)$/mg;

    let
      matchArr,
      minIndent = Infinity;

    while ((matchArr = leadingWhitespaceRegExp.exec(trimmed))) {
      minIndent =
        matchArr[2] ? Math.min(minIndent, matchArr[1].length) :  // if this line has any non-space content, check the indent
          minIndent;
    }

    const
      indentRegExp = new RegExp(`^\\s{${minIndent}}`, 'mg'),
      unindented = trimmed.replace(indentRegExp, ''),
      rendered = markdown.render(unindented);

    return rendered;
  };

export default {
  view: (vnode: m.Vnode) =>
    Array.isArray(vnode.children) ? vnode.children.map(c => typeof c === 'string' ? m.trust(render(c)) : c) :
      typeof vnode.children === 'string' ? m.trust(render(vnode.children)) :
        vnode.children
};
