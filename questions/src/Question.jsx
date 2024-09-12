import { useState } from 'react';

const Question = ({ title, info }) => {
  const [isActive, setIsActive] = useState(false);

  const display = () => setIsActive(!isActive);

  return (
    <div className='question'>
      <header>
        <h5>{title}</h5>
        <button type='button' className='question-btn' onClick={display}>
          +
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </div>
  );
};

export default Question;
