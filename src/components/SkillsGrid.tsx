import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNode,
  FaReact,
  FaWordpress,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiTailwindcss,
  SiStrapi,
  SiShadcnui,
  SiPostgresql,
  SiMicrosoftazure,
  SiSupabase,
  SiPrisma,
  SiFirebase,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { ElementType } from "react";

type Skill = { icon: ElementType; label: string };
type SkillGroup = { category: string; skills: Skill[] };

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { icon: FaHtml5, label: "HTML5" },
      { icon: FaCss3Alt, label: "CSS3" },
      { icon: IoLogoJavascript, label: "JavaScript" },
      { icon: SiTypescript, label: "TypeScript" },
      { icon: FaReact, label: "React" },
      { icon: RiNextjsFill, label: "Next.js" },
      { icon: SiTailwindcss, label: "Tailwind" },
      { icon: SiShadcnui, label: "Shadcn/ui" },
      { icon: FaBootstrap, label: "Bootstrap" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { icon: FaNode, label: "Node.js" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: SiSupabase, label: "Supabase" },
      { icon: SiPrisma, label: "Prisma" },
      { icon: SiStrapi, label: "Strapi" },
      { icon: SiFirebase, label: "firebase" },
    ],
  },
  {
    category: "Platforms & Tools",
    skills: [
      { icon: SiMicrosoftazure, label: "Azure" },
      { icon: FaWordpress, label: "WordPress" },
    ],
  },
];

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsGrid = () => {
  return (
    <div className="space-y-10">
      {skillGroups.map((group) => (
        <div key={group.category} className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {group.category}
          </h3>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.07 }}
            className="flex flex-wrap gap-4"
          >
            {group.skills.map((skill) => (
              <motion.li
                key={skill.label}
                variants={staggerItem}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
              >
                <skill.icon className="text-xl" />
                <span className="text-sm font-medium">{skill.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
