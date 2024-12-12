import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function deleteList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  function handleItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handlePacked(itemID) {
    setItems((items) =>
      items.map((item) =>
        item.id === itemID ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(itemID) {
    setItems((items) => items.filter((item) => item.id !== itemID));
  }

  return (
    <div className='app'>
      <Logo></Logo>
      <Form items={items} onSetItems={handleItems}></Form>
      <PackingList
        items={items}
        onPackedItem={handlePacked}
        onDeleteItem={handleDeleteItem}
        onDeleteList={deleteList}></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}
