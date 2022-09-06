import GitHub from "../Icons/GitHub/GitHub";
import LinkedIn from "../Icons/LinkedIn/LinkedIn";
import { links } from "../../constants";

const SHARED_CLASSES = 'transition-colors hover:text-primary-light focus:text-primary-light';
const MAIN_LINKS = [
  { href: links.projects, content: 'Projects' },
  { href: links.about, content: 'About' },
  { href: links.contact, content: 'Contact' }
].map(link => (
  <a
    className={`text-lg text-text ${SHARED_CLASSES}`}
    href={link.href}>
    {link.content}
  </a>
));

const SOCIAL_LINKS = [
  { href: links.github, content: <GitHub /> },
  { href: links.linkedin, content: <LinkedIn /> }
].map(link => (
  <a
    className={`w-6 h-6 text-primary ${SHARED_CLASSES}`}
    href={link.href}>
    {link.content}
  </a>
));

const Nav = () => {
  return (
    <nav className="flex flex-col items-center gap-y-2 md:flex-row gap-x-6">
      <div className="flex gap-x-4">
        {MAIN_LINKS}
      </div>
      <div className="flex gap-x-4">
        {SOCIAL_LINKS}
      </div>
    </nav>
  );
};

export { links };
export default Nav;

