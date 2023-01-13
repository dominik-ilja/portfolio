import Image from "next/image";
import icon_github from "../../public/icons/icon_github.svg";
import icon_codepen from "../../public/icons/icon_codepen.svg";
import icon_linkedin from "../../public/icons/icon_linkedin.svg";
import icon_youtube from "../../public/icons/icon_youtube.svg";
import icon_twitter from "../../public/icons/icon_twitter.svg";
import logo_footer from "../../public/icons/logo_footer.svg";

const socials = [
  { src: icon_github, alt: "GitHub", href: "https://github.com/Dominik-Ilja" },
  { src: icon_codepen, alt: "Codepen", href: "https://codepen.io/your-work/" },
  {
    src: icon_linkedin,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/dominik-kulak/",
  },
  {
    src: icon_youtube,
    alt: "YouTube",
    href: "https://www.youtube.com/channel/UCDXWSQNccULt7U4kzsRWVLw",
  },
  {
    src: icon_twitter,
    alt: "Twitter",
    href: "https://twitter.com/dominik_ilja",
  },
];

const Footer = () => {
  return (
    <footer className="py-4 mt-auto">
      <div className="container flex flex-col items-center justify-center mx-auto gap-y-3">
        <menu className="flex gap-5 lg:bottom-0 lg:flex-col lg:fixed lg:left-6 lg:after:w-[1px] lg:after:h-12 lg:after:bg-base-30 lg:items-center">
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
        <div className="lg:flex lg:flex-col lg:bottom-0 lg:fixed lg:right-6 lg:after:w-[1px] lg:after:h-12 lg:after:bg-base-30 lg:items-center">
          <a
            className="hidden lg:block mb-5 transition-opacity hover:opacity-50 [writing-mode:vertical-rl]"
            href="mailto:dominik.ilja.work@gmail.com"
          >
            dominik.ilja.developer@gmail.com
          </a>
        </div>
        <div className="flex items-end gap-x-2">
          <small className="text-base-30">Developed by Dominik Ilja</small>
          <Image src={logo_footer} alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
