import MenuItem from './MenuItem';

const Menu = ({ menuItems, filterMenu }) => {
  return (
    <>
      <section className='section-center'>
        <h1 className='title title-underline'>Our Menu</h1>
      </section>
      <section className='button-container'>
        <button className='btn' onClick={() => filterMenu('all')}>
          all
        </button>
        <button className='btn' onClick={() => filterMenu('breakfast')}>
          breakfast
        </button>
        <button className='btn' onClick={() => filterMenu('lunch')}>
          lunch
        </button>
        <button className='btn' onClick={() => filterMenu('shakes')}>
          shakes
        </button>
      </section>
      <section className='section-center'>
        {menuItems.map((menuItem) => {
          return <MenuItem key={menuItem.id} {...menuItem} />;
        })}
      </section>
    </>
  );
};

export default Menu;
