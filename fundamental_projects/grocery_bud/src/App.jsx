import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import Items from './components/Items';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const getLocalStorage = JSON.parse(localStorage.getItem('list') || []);

function App() {
  const [items, setItems] = useState(getLocalStorage);

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    setItems([...items, newItem]);
    setLocalStorage([...items, newItem]);
  };

  const removeItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
    setLocalStorage(filteredItems);
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

export default App;
