import { useState } from 'react';
import data from './data';

function App() {
  const [birthdays, setBirthdays] = useState(data);

  const clear = () => {
    setBirthdays([]);
  };

  return (
    <div className='container'>
      <h3>{birthdays.length} birthdays today</h3>
      {birthdays.map((birthday) => {
        return (
          <div key={birthday.id} className='person'>
            <img src={birthday.image}></img>
            <h4>{birthday.name}</h4>
            <p>{birthday.age} years</p>
          </div>
        );
      })}
      <button type='button' className='btn' onClick={clear}>
        clear all
      </button>
    </div>
  );
}

export default App;
