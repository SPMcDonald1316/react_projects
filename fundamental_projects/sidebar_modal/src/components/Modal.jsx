import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context';

const Modal = () => {
  const { isModalOpen, closeModal } = useAppContext();
  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button type='button' className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
