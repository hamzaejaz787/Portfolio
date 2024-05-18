import Navbar from "./Navbar";
import { NavItemTypes } from "@/lib/types";
import MobileNav from "./MobileNav";

const Header = () => {
  const navItems: NavItemTypes[] = [
    { href: "#skills", title: "Skills" },
    { href: "#projects", title: "Portfolio" },
    { href: "#contact", title: "Get In Touch" },
  ];
  return (
    <header className="flex items-center justify-between p-8 lg:px-20 gap-8 relative after:content-[''] after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-0 after:block after:w-10/12 after:h-[1px] after:bg-slate-800 after:dark:bg-white">
      <a href="/" className="font-logo text-4xl text-slate-800 dark:text-white">
        <span className="text-slate-500">&lt;</span>
        Hamza
        <span className="text-slate-500">/&gt;</span>
      </a>
      <Navbar navItems={navItems} />
      <MobileNav navItems={navItems} />
    </header>
  );
};

export default Header;
