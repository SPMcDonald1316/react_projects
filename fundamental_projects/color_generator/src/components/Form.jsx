import { useState } from 'react';

const Form = ({ changeColorList }) => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    changeColorList(color);
  };

  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#35274e'
        />
        <button type='submit' className='btn' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
