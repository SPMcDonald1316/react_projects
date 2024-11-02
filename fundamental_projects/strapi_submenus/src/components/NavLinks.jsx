import sublinks from '../data';

const NavLinks = () => {
  return (
    <div className='nav-links'>
      {sublinks.map((link) => {
        const { pageId, page } = link;
        return (
          <button key={pageId} className='nav-link'>
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
