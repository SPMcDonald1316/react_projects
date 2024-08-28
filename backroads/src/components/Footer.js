import PageLink from './PageLink';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLink parentClass='footer-links' itemClass='footer-link' />

      <SocialLink parentClass='footer-icons' itemClass='footer-icon' />
      <p className='copyright'>
        copyright &copy; backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
