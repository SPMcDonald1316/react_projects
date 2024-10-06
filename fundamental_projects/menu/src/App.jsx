import { useState } from 'react';
import data from './data';
import Menu from './Menu';
import Title from './Title';
import Categories from './Categories';

/* Step by step unique categories
const tempCategories = data.map(item => item.category)
const tempSet = new Set(tempCategories)
const tempItems = ['all', ...tempSet]
*/

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === 'all') {
      setMenuItems(data);
      return;
    }
    const filteredMenu = data.filter((item) => item.category === category);
    setMenuItems(filteredMenu);
  };

  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
