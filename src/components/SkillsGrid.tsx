import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNode,
  FaFigma,
  FaSass,
  FaReact,
  FaWordpress,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiTailwindcss,
  SiStrapi,
  SiMongodb,
  SiShadcnui,
  SiPostgresql,
  SiVite,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import { SkillGridItemTypes } from "@/lib/types";

const skillGridItem: SkillGridItemTypes[] = [
  {
    icon: FaHtml5,
    href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  { icon: FaCss3Alt, href: "https://www.w3schools.com/css/css_intro.asp" },
  { icon: IoLogoJavascript, href: "https://www.javascript.com/" },
  { icon: SiTypescript, href: "https://www.typescriptlang.org/" },
  { icon: FaReact, href: "https://react.dev/" },
  { icon: RiNextjsFill, href: "https://nextjs.org/" },
  { icon: FaNode, href: "https://nodejs.org/en" },
  { icon: SiMongodb, href: "https://www.mongodb.com/" },
  { icon: SiPostgresql, href: "https://www.postgresql.org/" },
  { icon: IoLogoFirebase, href: "https://console.firebase.google.com/" },
  { icon: SiStrapi, href: "https://docs.strapi.io/dev-docs/quick-start" },
  { icon: FaWordpress, href: "https://wordpress.com/" },
  { icon: SiTailwindcss, href: "https://tailwindcss.com/docs/installation" },
  { icon: FaSass, href: "https://sass-lang.com/" },
  { icon: FaBootstrap, href: "https://getbootstrap.com/" },
  { icon: SiShadcnui, href: "https://ui.shadcn.com/docs" },
  { icon: FaFigma, href: "https://www.figma.com/" },
  { icon: VscVscode, href: "https://code.visualstudio.com/" },
  { icon: SiVite, href: "https://vitejs.dev/guide/" },
];

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsGrid = () => {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-8"
    >
      {skillGridItem.map((item, index) => (
        <motion.li
          key={index}
          variants={staggerItem}
          className="justify-self-center text-6xl cursor-pointer transition-all duration-300 text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary focus-within:text-primary dark:focus-within:text-primary"
        >
          <a href={item?.href} target="_blank">
            {<item.icon />}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SkillsGrid;
