import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data';
import logo from '../logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='coding addict logo' className='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className='links-container'>
            <ul className='links'>
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
