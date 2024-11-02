import { useAppContext } from '../context';
import sublinks from '../data';

const Submenu = () => {
  const { pageId } = useAppContext();
  const currentPage = sublinks.find((page) => page.pageId === pageId);

  return (
    <div className='submenu'>
      <h5>{currentPage?.page}</h5>
      <div className='submenu-links'>
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
