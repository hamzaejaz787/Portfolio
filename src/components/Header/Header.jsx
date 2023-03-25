import { useState } from "react";
import Headroom from "react-headroom";
import Navbar from "../Navbar/Navbar";

import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} alt="" />
        </a>

        <div className="nav-menu">
          <Navbar />
        </div>

        <div className="nav-menu-mobile">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={30}
              cursor="pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              cursor="pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && <Navbar />}
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
