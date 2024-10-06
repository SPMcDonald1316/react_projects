import { useState } from 'react';
import text from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [paragraphs, setParagraphs] = useState(text[0]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let displayText = '';
    for (let i = 0; i < count; i++) {
      displayText += `${text[i]}\n`;
    }
    setParagraphs(displayText);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='count'>number of paragraphs</label>
        <span> </span>
        <input
          type='number'
          min={1}
          max={8}
          step={1}
          value={count}
          onChange={handleChange}
          name='count'
          id='count'
        />
        <button type='submit'>submit</button>
      </form>
      <div>{paragraphs}</div>
    </div>
  );
};
export default App;
