import { FaGithub, FaLinkedin, FaUpwork } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { splitStringToRegex } from "@/utils/SplitStringToRegex";
import { motion } from "framer-motion";

const heading = "Let's Connect!";
const description =
  "Whether you want to discuss a project or just say hello, I’m always open to new opportunities and conversations. Feel free to drop me a message anytime!";

const animationVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const GetInTouch = () => {
  const headingCharacters = splitStringToRegex(heading);
  const descriptionCharacters = splitStringToRegex(description);
  return (
    <footer
      id="contact"
      className="h-screen container px-8 md:px-0 space-y-4 content-center"
    >
      <motion.h2
        initial="hidden"
        viewport={{ once: true }}
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}
        className="text-5xl sm:text-6xl font-medium capitalize text-primary text-center"
      >
        {headingCharacters.map((char) => (
          <motion.span
            key={char}
            transition={{ duration: 0.5 }}
            variants={animationVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.p
        initial="hidden"
        viewport={{ once: true }}
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}
        className="text-lg max-w-4xl mx-auto text-center"
      >
        {" "}
        {descriptionCharacters.map((char) => (
          <motion.span
            key={char}
            transition={{ duration: 0.5 }}
            variants={animationVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
        className="flex items-center justify-center gap-8 pt-6"
      >
        <motion.a
          variants={staggerItem}
          href="https://github.com/hamzaejaz787/"
          className="text-4xl hover:text-gray-600 transition-all duration-300"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          variants={staggerItem}
          href="https://www.linkedin.com/in/hamza-ejaz-78b979186/"
          className="text-4xl hover:text-blue-600 transition-all duration-300"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          variants={staggerItem}
          href="https://www.upwork.com/freelancers/~01bbd44cd1e1b14675"
          className="text-4xl hover:text-lime-600 transition-all duration-300"
        >
          <FaUpwork />
        </motion.a>
        <motion.a
          variants={staggerItem}
          href="mailto:hejaz389@gmail.com"
          className="text-4xl hover:text-slate-600 transition-all duration-300"
        >
          <MdEmail />
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default GetInTouch;
