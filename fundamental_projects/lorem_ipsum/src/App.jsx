import { useState } from 'react';
import { nanoid } from 'nanoid';
import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  {
    /* MY SOLUTION ~ NO CSS
  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let displayText = '';
    for (let i = 0; i < count; i++) {
      displayText += `${data[i]}\n`;
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
  */
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  const id = nanoid();

  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          max='8'
          step='1'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item) => {
          return <p key={id}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
