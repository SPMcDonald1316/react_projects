import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import Items from './components/Items';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
