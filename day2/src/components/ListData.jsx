function ListMenu({ list = [] }) {
  return (
    <div className="max-w-sm mx-auto">
      <ul className="list-disc pl-5 space-y-1">
        {list.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListMenu;
