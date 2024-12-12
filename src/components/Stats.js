export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className='stats'>
        <em>Start adding some items to your packign list 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = (numPacked / numItems).toFixed(2) * 100;

  return (
    <footer className='stats'>
      <em>
        {packedPercentage !== 100
          ? `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${packedPercentage}%)`
          : "You got everything! Ready to go ✈️"}
      </em>
    </footer>
  );
}
