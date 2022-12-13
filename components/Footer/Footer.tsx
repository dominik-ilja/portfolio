import Image from "next/image";
import icon_github from "../../public/icons/icon_github.svg";
import icon_codepen from "../../public/icons/icon_codepen.svg";
import icon_linkedin from "../../public/icons/icon_linkedin.svg";
import icon_youtube from "../../public/icons/icon_youtube.svg";
import icon_twitter from "../../public/icons/icon_twitter.svg";
import logo_footer from "../../public/icons/logo_footer.svg";

const socials = [
  { src: icon_github, alt: "GitHub", href: "#" },
  { src: icon_codepen, alt: "Codepen", href: "#" },
  { src: icon_linkedin, alt: "LinkedIn", href: "#" },
  { src: icon_youtube, alt: "YouTube", href: "#" },
  { src: icon_twitter, alt: "Twitter", href: "#" },
];

const Footer = () => {
  return (
    <footer className="py-4 mt-auto">
      <div className="container flex flex-col items-center justify-center mx-auto gap-y-3">
        <menu className="flex gap-x-5">
          {socials.map((social) => (
            <li key={social.alt}>
              <a
                href={social.href}
                className="transition-opacity hover:opacity-50"
              >
                <Image src={social.src} alt={social.alt} className="w-6" />
              </a>
            </li>
          ))}
        </menu>
        <div className="flex items-end gap-x-2">
          <small className="text-base-30">Developed by Dominik Ilja</small>
          <Image src={logo_footer} alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
