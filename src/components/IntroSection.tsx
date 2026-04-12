import { Button } from "@/components/ui/button";
import { splitStringToRegex } from "@/utils/SplitStringToRegex";
import { motion } from "framer-motion";

const heading = "Hi, I'm Hamza.";
const description =
  "Full-Stack Developer building fast, scalable web apps with Next.js, React, and modern tooling.";

const highlightedWords = ["Next.js,", "React,", "modern", "tooling."];

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  reveal: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 16 },
  reveal: { opacity: 1, y: 0 },
};

const IntroSection = () => {
  const headingCharacters = splitStringToRegex(heading);
  const words = description.split(" ");

  return (
    <section className="container px-6 sm:px-16 lg:px-20 py-10 md:pt-20 md:pb-8 space-y-4">
      <motion.h1
        initial="hidden"
        viewport={{ once: true }}
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary text-center md:text-left"
      >
        {headingCharacters.map((char) => (
          <motion.span
            key={char}
            transition={{ duration: 0.5 }}
            variants={charVariants}
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
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={
              highlightedWords.includes(word) ? "text-primary font-medium" : ""
            }
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.p>

      <motion.div
        initial="hidden"
        viewport={{ once: true }}
        whileInView="reveal"
        transition={{ staggerChildren: 0.12, delayChildren: 0.8 }}
        className="flex items-center flex-wrap gap-4 w-full max-w-sm md:max-w-fit pt-4 mx-auto md:mx-0"
      >
        <motion.div variants={buttonVariants} transition={{ duration: 0.4 }}>
          <Button
            asChild
            className="text-lg px-8 py-6 border border-primary dark:border-white bg-primary dark:bg-white text-primary-foreground hover:bg-transparent hover:dark:bg-transparent hover:text-primary rounded-full transition-all duration-300"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        <motion.div variants={buttonVariants} transition={{ duration: 0.4 }}>
          <Button
            asChild
            className="text-lg px-8 py-6 rounded-full"
            variant="link"
          >
            <a
              href="https://drive.google.com/file/d/1DdLa_vygmeFq66J7teuL4YH3I-wyVMhr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
