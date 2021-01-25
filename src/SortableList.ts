
import m from 'mithril';
import Sortable from 'sortablejs';

interface SortableListAttrs {
  items: string[];
  onUpdate: (e: any) => void;
}

export const SortableList: () => m.Component<SortableListAttrs> = () => {
  let sortable: Sortable;

  return {
    oncreate(vnode) {
      const listNode = document.createElement('ol');
      for (const item of vnode.attrs.items) {
        const
          itemText = document.createTextNode(item),
          itemNode = document.createElement('li');

        itemNode.appendChild(itemText);
        listNode.appendChild(itemNode);
      }
      vnode.dom.appendChild(listNode);
      sortable = Sortable.create(listNode, {
        onUpdate: vnode.attrs.onUpdate,
        animation: 150,
      });
    },
    onremove() {
      sortable.destroy();
    },
    view() {
      return m('div.sortable');
    }
  };
};