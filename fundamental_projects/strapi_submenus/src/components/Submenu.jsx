import { useAppContext } from '../context';
import sublinks from '../data';
import { useRef } from 'react';

const Submenu = () => {
  const { pageId, setPageId } = useAppContext();
  const currentPage = sublinks.find((page) => page.pageId === pageId);
  const submenuContainer = useRef(null);

  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current;
    const result = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;

    if (
      clientX < result.left ||
      clientX > result.right ||
      clientY > result.bottom
    ) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
