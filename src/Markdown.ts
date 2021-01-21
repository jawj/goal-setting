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
      onlyWhitespaceRegExp = /^\s*$/,
      leadingWhitespaceRegExp = /^[\t ]*/,
      minIndent = s.split(/[\n\r]+/)
        .filter(l => !l.match(onlyWhitespaceRegExp))
        .reduce((leadingWhitespace, l) =>
          Math.min(leadingWhitespace, l.match(leadingWhitespaceRegExp)![0].length),
          Infinity),
      indentRegExp = new RegExp(`^[\\t ]{${minIndent}}`, 'mg'),
      unindented = s.replace(indentRegExp, ''),
      rendered = markdown.render(unindented);

    console.log(minIndent, unindented);
    return rendered;
  };

export default {
  view: (vnode: m.Vnode) =>
    Array.isArray(vnode.children) ? vnode.children.map(c => typeof c === 'string' ? m.trust(render(c)) : c) :
      typeof vnode.children === 'string' ? m.trust(render(vnode.children)) :
        vnode.children
};
