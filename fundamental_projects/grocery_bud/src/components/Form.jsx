import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return toast.error('please provide a value');

    addItem(newItem);
    toast.success('Item added to list');
    setNewItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='submit' className='btn'>
          submit
        </button>
      </div>
    </form>
  );
};
export default Form;
