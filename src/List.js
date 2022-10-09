export default function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={ item }>{item}</li>
      ))}
    </ul>
  )
}
