import ClearList from "./ClearList";

export default function ItemSorter({ sortBy, onItemSort, onDeleteList }) {
  return (
    <div className='actions'>
      <select value={sortBy} onChange={(e) => onItemSort(e.target.value)}>
        <option value='input'>Sort by input order</option>
        <option value='description'>Sort by description</option>
        <option value='packed'>Sort by packed status</option>
      </select>
      <ClearList onDeleteList={onDeleteList} />
    </div>
  );
}
