export default function Menu() {
  //list rendering

  const menuItems = [
    { icon: "🏡", text: "Home" },
    { icon: "🩳", text: "Shorts" },
    { icon: "🔃", text: "Subscriptions" },
  ];

  return (
    <aside className="col-start-1 col-end-2 row-start-2 row-end-3 pl-1">
      {menuItems.map((item) => (
        <div
          key={`menu-item-${item.text}`}
          className="p-4 rounded-[20px] flex flex-row gap-2 items-center hover:bg-gray-800"
        >
          <span>{item.icon}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </aside>
  );
}
