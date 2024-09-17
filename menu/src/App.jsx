import { useState } from 'react';
import data from './data';
import Menu from './Menu';

function App() {
  const [menuItems, setMenuItems] = useState(data);

  const filterMenu = (category) => {
    if (category === 'all') {
      setMenuItems(data);
    } else {
      const filteredMenu = data.filter((item) => item.category === category);
      setMenuItems(filteredMenu);
    }
  };

  return (
    <main>
      <Menu menuItems={menuItems} filterMenu={filterMenu} />
    </main>
  );
}

export default App;
