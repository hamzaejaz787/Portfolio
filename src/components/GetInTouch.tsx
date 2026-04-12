import { FaGithub, FaLinkedin, FaUpwork } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/hamzaejaz787/",
    hoverClass: "hover:text-gray-400",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hamza-ejaz-78b979186/",
    hoverClass: "hover:text-blue-500",
  },
  {
    icon: FaUpwork,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01bbd44cd1e1b14675",
    hoverClass: "hover:text-lime-500",
  },
  {
    icon: MdEmail,
    label: "hejaz389@gmail.com",
    href: "mailto:hejaz389@gmail.com",
    hoverClass: "hover:text-primary",
  },
];

const GetInTouch = () => {
  return (
    <footer
      id="contact"
      className="container px-6 sm:px-16 lg:px-20 py-16 md:py-24 space-y-12"
    >
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="space-y-4 text-center"
      >
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-primary"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Open to new opportunities, freelance projects, or just a good
          conversation. Drop me a message and I'll get back to you.
        </motion.p>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 max-w-2xl mx-auto"
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card text-foreground ${link.hoverClass} hover:border-primary transition-all duration-300`}
          >
            <link.icon className="text-2xl shrink-0" />
            <span className="font-medium">{link.label}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-sm text-muted-foreground pt-8 border-t border-border"
      >
        © {new Date().getFullYear()} Hamza Ejaz. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default GetInTouch;
