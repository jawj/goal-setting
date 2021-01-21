import m from 'mithril';
import pages from './pages';

export const
  pageBefore = Object.fromEntries(pages.map((p, i) => ['/' + p.id, pages[i - 1]?.id])),
  pageAfter = Object.fromEntries(pages.map((p, i) => ['/' + p.id, pages[i + 1]?.id])),
  goto = (pageId: string, target: HTMLElement | null) => {
    m.route.set('/' + pageId);
    window.scrollTo(0, 0);
    target?.blur();
  };

const Layout = {
  view: (vnode: m.Vnode) => {
    const currentPage = m.route.get();
    return m('.layout',
      m('.heading', 'Goal-setting exercise'),
      vnode.children,
      m('.navigation',
        pageBefore[currentPage] && m('button', { onclick: (e: Event) => goto(pageBefore[currentPage], e.target as HTMLElement) }, '« Previous'),
        pageAfter[currentPage] && m('button', { onclick: (e: Event) => goto(pageAfter[currentPage], e.target as HTMLElement) }, 'Next »')
      )
    );
  }
};

m.route(
  document.body,
  '/' + pages[0].id,
  Object.fromEntries(pages.map(p => ['/' + p.id, { render: () => m(Layout, m(p)) }]))
);
