import m from 'mithril';
import { pages } from './pages';

const Layout = {
  view: (vnode: m.Vnode) => {
    return m('.layout',
      m('.heading', 'Goal-setting exercise'),
      vnode.children,
    );
  }
};

m.route(
  document.body,
  '/' + pages[0].id,
  Object.fromEntries(pages.map(p => ['/' + p.id, { render: () => m(Layout, m(p)) }]))
);
