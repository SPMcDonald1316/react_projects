import { useState } from 'react';

const Item = ({ id, name }) => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <article className='single-item'>
      <input
        type='checkbox'
        value={isComplete}
        onChange={() => setIsComplete(!isComplete)}
      />
      <p>{name}</p>
      <button type='button' className='remove-btn' onClick={removeItem(id)}>
        delete
      </button>
    </article>
  );
};
export default Item;
