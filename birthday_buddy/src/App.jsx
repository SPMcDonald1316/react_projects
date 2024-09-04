import { useState } from 'react';
import data from './data';
import List from './components/List';

function App() {
  const [birthdays, setBirthdays] = useState(data);

  const clear = () => {
    setBirthdays([]);
  };

  return (
    <main>
      <section className='container'>
        <h3>{birthdays.length} birthdays today</h3>
        <List birthdays={birthdays} />
        <button type='button' className='btn btn-block' onClick={clear}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
