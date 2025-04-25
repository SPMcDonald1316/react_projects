import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { logoutUser } from '../features/user/userSlice';
import { useQueryClient } from '@tanstack/react-query';

const Header = () => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
    navigate('/');
  };
  return (
    <header className='bg-neutral py-2 text-neutral-content'>
      <div className='align-element flex justify-center sm:justify-end'>
        {user ? (
          <div className='flex gap-x-6 justify-center items-center'>
            <Link
              to='/'
              className='link link-hover text-xs sm:text-sm'
              onClick={handleLogout}
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center'>
            <Link to='/login' className='link link-hover text-xs sm:text-sm'>
              Sign in / Guest
            </Link>
            <Link to='/register' className='link link-hover text-xs sm:text-sm'>
              Create Account
            </Link>
          </div>
        )}
        {/* USER */}
      </div>
    </header>
  );
};
export default Header;
