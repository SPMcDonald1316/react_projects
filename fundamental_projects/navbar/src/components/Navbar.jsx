import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data';
import logo from '../logo.svg';

// USING USE REF TO DYNAMICALLY SET CONTAINER SIZE
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

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
        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((icon) => {
            return (
              <li key={icon.id}>
                <a href={icon.url}>{icon.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

/* 
SHOW LINKS DYNAMICALLY BY USING STATE VALUE
TO RENDER CONDITIONALLY

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
*/

/* 
SHOW LINKS USING CSS CLASSES ADDED CONDITIONALLY BASED
ON STATE VALUE

THIS APPROACH USES A FIXED HEIGHT VALUE IN CSS ONLY WORKS
IF HEIGHT OF CONTAINER ISNT GOING TO CHANGE (IE NEW LINKS ADDED WON"T SHOW)

<div className={ showLinks ? 'links-container show-container' : 'links-container' }>
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

*/
