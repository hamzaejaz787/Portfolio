import { Button } from "@/components/ui/button";
import {
  isWithinWordRange,
  splitStringToRegex,
} from "@/utils/SplitStringToRegex";
import { motion } from "framer-motion";

const heading = "Hi, I'm Hamza.";
const description =
  "A passionate Software Developer specializing in crafting captivating web applications. With expertise in React, Next.js, TailwindCSS, Strapi, Firebase, Node.js, and cutting-edge libraries, I bring your digital visions to life with innovation and finesse.";

const animationVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const IntroSection = () => {
  const headingCharacters = splitStringToRegex(heading);
  const descriptionCharacters = splitStringToRegex(description);

  const softwareStart = description.indexOf("Software");
  const developerStart = description.indexOf("Developer");
  const softwareLength = "Software".length;
  const developerLength = "Developer".length;

  return (
    <section className="container px-6 sm:px-16 lg:px-20 py-10 md:pt-20 md:pb-8 space-y-4">
      <motion.h1
        initial="hidden"
        viewport={{ once: true }}
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}
        className="text-5xl sm:text-6xl lg:text-8xl font-bold text-primary text-center md:text-left"
      >
        {headingCharacters.map((char) => (
          <motion.span
            key={char}
            transition={{ duration: 0.5 }}
            variants={animationVariants}
            className={char === "." ? "text-white" : ""}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial="hidden"
        viewport={{ once: true }}
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}
        className="text-lg max-w-4xl text-center md:text-left"
      >
        {descriptionCharacters.map((char, index) => {
          const isSoftwareChar = isWithinWordRange(
            index,
            softwareStart,
            softwareLength
          );
          const isDeveloperChar = isWithinWordRange(
            index,
            developerStart,
            developerLength
          );
          return (
            <motion.span
              key={index}
              transition={{ duration: 0.01 }}
              variants={animationVariants}
              className={
                isSoftwareChar || isDeveloperChar ? "text-primary" : ""
              }
            >
              {char}
            </motion.span>
          );
        })}
      </motion.p>
      <div className="flex items-center flex-wrap gap-4 w-full max-w-sm md:max-w-fit pt-4 mx-auto md:mx-0">
        <Button
          asChild
          className="flex-1 min-w-min text-lg px-8 py-6 border border-primary dark:border-white bg-primary dark:bg-white text-primary-foreground hover:bg-transparent hover:dark:bg-transparent hover:text-primary rounded-full transition-all duration-300"
        >
          <a href="#contact">Get In Touch</a>
        </Button>
        <Button
          asChild
          className="flex-1 min-w-min text-lg px-8 py-6"
          variant="link"
        >
          <a
            href="https://drive.google.com/file/d/1bEf7RXttL9iIvfs_GPUX7Mz72X8yZtLw/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
};

export default IntroSection;
