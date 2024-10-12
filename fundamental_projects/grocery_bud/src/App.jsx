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

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} />
    </section>
  );
}

export default App;
