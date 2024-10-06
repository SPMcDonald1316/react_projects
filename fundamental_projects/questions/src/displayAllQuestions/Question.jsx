import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const display = () => setShowInfo(!showInfo);

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button type='button' className='question-btn' onClick={display}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
