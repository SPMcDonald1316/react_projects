import logo from '../images/logo.svg';
import PageLink from './PageLink';
import SocialLink from './SocialLink';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <PageLink parentClass='nav-links' itemClass='nav-link' />

        <SocialLink parentClass='nav-icons' itemClass='nav-icon' />
      </div>
    </nav>
  );
};
export default NavBar;
