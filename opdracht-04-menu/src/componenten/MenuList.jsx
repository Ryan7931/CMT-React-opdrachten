import MenuItem from './MenuItem';

// Component voor de lijst van menu-items
function MenuList({ menu }) {
  return (
    <div className="menu-list">
      {menu.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuList;
