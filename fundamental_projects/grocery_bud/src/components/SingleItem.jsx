import { useState } from 'react';

const SingleItem = ({ id, name, completed }) => {
  const [isChecked, setIsChecked] = useState(completed);

  return (
    <article className='single-item'>
      <input type='checkbox' onClick={() => setIsChecked(!isChecked)} />
      <p style={{ textDecoration: isChecked ? 'line-through' : '' }}>{name}</p>
      <button type='button' onClick={''} className='btn remove-btn'>
        delete
      </button>
    </article>
  );
};
export default SingleItem;
