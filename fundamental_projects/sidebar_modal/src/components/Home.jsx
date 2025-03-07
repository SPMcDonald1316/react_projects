import { useAppContext } from '../context';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const { openSidebar, openModal } = useAppContext();
  return (
    <main>
      <button type='button' className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button type='button' className='btn' onClick={openModal}>
        show modal
      </button>
    </main>
  );
};
export default Home;
