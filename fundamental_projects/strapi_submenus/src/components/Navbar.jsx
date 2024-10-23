import { FaBars } from 'react-icons/fa';
import { useAppContext } from '../context';

const Navbar = () => {
  const { openSidebar } = useAppContext();
  return (
    <nav>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        {/* nav links */}
      </div>
    </nav>
  );
};
export default Navbar;
