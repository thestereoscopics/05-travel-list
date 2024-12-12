export default function ListItem({ item, onPackedItem, onDeleteItem }) {
  return (
    <li className='item'>
      <label htmlFor={item.id}>
        <input
          onChange={() => onPackedItem(item.id)}
          type='checkbox'
          name={item.description}
          id={item.id}
          checked={item.packed}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
