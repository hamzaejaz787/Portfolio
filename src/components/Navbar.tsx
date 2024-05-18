import { NavItemTypes } from "@/lib/types";
import { ModeToggle } from "./ModeToggle";

const Navbar = ({ navItems }: { navItems: NavItemTypes[] }) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="text-xl cursor-pointer transition-all duration-300 hover:text-primary focus-within:text-primary"
          >
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
        <li className="text-xl cursor-pointer transition-all duration-300 hover:text-secondary">
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
