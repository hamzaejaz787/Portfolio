import SkillsGrid from "./SkillsGrid";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <section
      className="container px-6 sm:px-16 lg:px-20 py-16 md:py-24 space-y-8"
      id="skills"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-primary text-center md:text-left"
      >
        Skills & Tools
      </motion.h2>
      <SkillsGrid />
    </section>
  );
};

export default SkillsSection;
