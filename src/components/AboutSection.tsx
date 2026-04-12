import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="container px-6 sm:px-16 lg:px-20 py-16 md:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
        className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16"
      >
        {/* Photo */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="shrink-0"
        >
          <img
            src={profileImg}
            alt="Hamza Ejaz"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-primary"
          >
            About Me
          </motion.h2>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-8"
          >
            {[
              { value: "4+", label: "Years Experience" },
              { value: "20+", label: "Projects Delivered" },
              { value: "2020", label: "Freelancing Since" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            I'm a self-taught Full-Stack Developer based in Islamabad, Pakistan,
            with over 4 years of experience building web applications for
            clients across the globe. I've been freelancing since 2020, working
            with clients ranging from small businesses to international
            companies — turning ideas into fast, production-ready products.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            I work across the full stack — from building clean, responsive UIs
            to designing the backend logic and infrastructure behind them. My
            current focus is on{" "}
            <span className="text-foreground font-medium">Next.js</span>,{" "}
            <span className="text-foreground font-medium">Supabase</span>, and{" "}
            <span className="text-foreground font-medium">TypeScript</span>, and
            I care a lot about writing code that's maintainable, not just code
            that works.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            Outside of work, I'm into anime, cars, pc building and I take my gym
            sessions as seriously as my side projects.
          </motion.p>

          {/* Badges */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 pt-2"
          >
            <span className="px-4 py-1.5 rounded-full border border-primary text-primary text-sm">
              📍 Islamabad, Pakistan
            </span>
            <span className="px-4 py-1.5 rounded-full border border-primary text-primary text-sm">
              ✅ Open to Remote / Relocation
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
