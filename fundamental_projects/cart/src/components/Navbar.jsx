import { FaCartPlus } from 'react-icons/fa';
import { useAppContext } from '../utilities/context';

const Navbar = () => {
  const { totalAmount } = useAppContext();
  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
