import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <ul className="nav-links">
        <li>
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" className="nav-link">
            Work Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
