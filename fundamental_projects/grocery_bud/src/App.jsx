import { useState } from 'react';
import Form from './components/Form';
import { nanoid } from 'nanoid';

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
    </section>
  );
}

export default App;
