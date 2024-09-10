import { useState } from 'react';
import people from './data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const next = () => {
    index === people.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const prev = () => {
    index === 0 ? setIndex(people.length - 1) : setIndex(index - 1);
  };

  const random = () => {
    const randIndex = Math.floor(Math.random() * people.length);
    setIndex(randIndex);
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} className='person-img' alt={name} />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button type='button' className='btn prev-btn' onClick={prev}>
            <FaChevronLeft />
          </button>
          <button type='button' className='btn next-btn' onClick={next}>
            <FaChevronRight />
          </button>
          <button type='button' className='btn-hipster' onClick={random}>
            surprise me
          </button>
        </div>
      </article>
    </main>
  );
};

export default App;
