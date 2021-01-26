import m from 'mithril';

export default {
  view: (vnode: m.Vnode<{ frac: number }>) =>
    m('div.progress-container',
      m(`div.progress-bar`, { style: `width: ${(vnode.attrs.frac * 100).toFixed(2)}%;` })
    )
};
