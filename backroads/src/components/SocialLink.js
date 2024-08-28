import { socialLinks } from '../data';

const SocialLink = (parentClass, itemClass) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target='_blank'
            className={itemClass}
            rel='noreferrer'
          >
            <i className={link.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};
export default SocialLink;
