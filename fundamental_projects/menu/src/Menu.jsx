import MenuItem from './MenuItem';

const Menu = ({ menuItems, filterMenu }) => {
  return (
    <div className='section-center'>
      {menuItems.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};

export default Menu;
