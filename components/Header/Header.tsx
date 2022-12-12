import Image from "next/image";
import { useState } from "react";

import logo from "../../public/logo.svg";
import HeaderToggle from "./HeaderToggle";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header>
      <div className="container flex items-start justify-between px-3 mx-auto">
        <Image
          src={logo}
          alt="Ghost"
          className="max-w-[120px] md:max-w-[200px] lg:max-w-[250px] relative left-4"
        />
        <HeaderToggle
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          open={menuIsOpen}
        />
      </div>
    </header>
  );
};

export default Header;
