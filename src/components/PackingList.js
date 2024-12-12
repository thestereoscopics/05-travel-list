import { useState } from "react";
import ItemSorter from "./ItemSorter";
import ListItem from "./ListItem";

export default function PackingList({
  items,
  onPackedItem,
  onDeleteItem,
  onDeleteList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const listItems = sortedItems.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      onPackedItem={onPackedItem}
      onDeleteItem={onDeleteItem}
    />
  ));

  return (
    <div className='list'>
      <ul>{listItems}</ul>
      <ItemSorter
        sortBy={sortBy}
        onItemSort={setSortBy}
        onDeleteList={onDeleteList}
      />
    </div>
  );
}
