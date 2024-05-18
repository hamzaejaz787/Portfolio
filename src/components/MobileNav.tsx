import { NavItemTypes } from "@/lib/types";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import { ModeToggle } from "./ModeToggle";

const MobileNav = ({ navItems }: { navItems: NavItemTypes[] }) => {
  return (
    <nav className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <MdMenu className="text-primary cursor-pointer" size={30} />
        </SheetTrigger>
        <SheetContent className="flex items-start gap-8 flex-col justify-center">
          <ul className="space-y-8 w-full">
            <li className="text-xl cursor-pointer transition-all duration-300 hover:text-secondary">
              <ModeToggle />
            </li>
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-xl cursor-pointer transition-all duration-300 hover:text-primary focus-within:text-primary"
              >
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
