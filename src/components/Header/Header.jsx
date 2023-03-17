import Headroom from "react-headroom";
import logo from "../../assets/logo.svg";
import Navbar from "../Navbar/Navbar";
import "./header.css";

const Header = () => {
  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} alt="" />
        </a>

        <Navbar />
      </header>
    </Headroom>
  );
};

export default Header;
