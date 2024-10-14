import { useState } from 'react';

const Navbar = ({ links }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section>
      {showLinks &&
        links.map((link) => {
          return (
            <div key={link.id}>
              <a href={link.url}>{link.text}</a>
            </div>
          );
        })}
      <button type='button' onClick={() => setShowLinks(!showLinks)}>
        show links
      </button>
    </section>
  );
};
export default Navbar;
