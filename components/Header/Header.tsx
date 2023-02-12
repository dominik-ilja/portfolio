import Image from "next/image";
import { useState } from "react";

import logo from "../../public/logo.svg";
import Button from "../Utilities/Button/Button";
import NavLink from "../Utilities/NavLink/NavLink";
import HeaderToggle from "./HeaderToggle";
import Container from "../Container/Container";
import Modal from "../Modal/Modal";
import useScrollBlock from "../../hooks/useScrollBlock";
import resume from "../../public/resume.jpg";

const Header = () => {
  const [menuIsHidden, setMenuIsHidden] = useState(true);
  const [modalIsHidden, setModalIsHidden] = useState(true);
  const [allowScroll, blockScroll] = useScrollBlock();

  menuIsHidden && modalIsHidden ? allowScroll() : blockScroll();

  const links = [
    { name: "Home", route: "/", exact: true },
    { name: "Projects", route: "/projects", exact: false },
    { name: "About", route: "/#about", exact: true },
    { name: "Contact", route: "/#contact", exact: true },
  ];

  return (
    <>
      <header>
        <Container className="flex items-start justify-between">
          <Image
            src={logo}
            alt="Ghost"
            className="max-w-[120px] md:max-w-[200px] lg:max-w-[250px] relative left-4"
          />
          <nav
            className={`fixed top-0 bottom-0 left-0 right-0 z-30 overflow-y-scroll lg:overflow-hidden duration-700 transition-all bg-base-1 md:bg-[transparent] md:pt-4 md:static md:flex md:translate-x-0 ${
              menuIsHidden ? "translate-x-full" : ""
            }`}
          >
            <menu className="flex flex-col items-center justify-center min-h-screen py-4 gap-y-12 gap-x-5 md:flex-row md:min-h-0">
              {links.map(({ name, route, exact }) => (
                <li key={route + name}>
                  <NavLink
                    className="text-3xl md:text-lg"
                    href={route}
                    exact={exact}
                    onClick={() => setMenuIsHidden(true)}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
              <li>
                <Button
                  className="bg-red"
                  rounded
                  onClick={() => {
                    setMenuIsHidden(true);
                    setModalIsHidden(false);
                  }}
                >
                  Resume
                </Button>
              </li>
            </menu>
          </nav>
          <HeaderToggle
            className="z-50 md:hidden"
            onClick={() => setMenuIsHidden(!menuIsHidden)}
            open={!menuIsHidden}
          />
        </Container>
      </header>
      <Modal
        blockScroll={false}
        className="flex flex-col items-center w-full max-h-screen p-2 mx-0 gap-y-2 lg:w-auto"
        hidden={modalIsHidden}
        onBackgroundClick={() => setModalIsHidden(true)}
      >
        <Image
          src={resume}
          alt="resume"
          className="object-contain w-full h-full aspect-17/22"
        />
        <div className="flex gap-x-4">
          <Button
            rounded
            className="w-32 bg-indigo"
            externalLink="https://docs.google.com/document/d/1AJkrit3Ta0nU1jI7wu-3aShcS-b-qLv_TwCPjLBZs6c/edit?usp=sharing"
            target="_blank"
          >
            Download
          </Button>
          <Button
            onClick={() => setModalIsHidden(true)}
            rounded
            className="w-32 bg-red"
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Header;
