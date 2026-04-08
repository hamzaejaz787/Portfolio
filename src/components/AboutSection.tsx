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

          {/* Stats row */}
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
            clients across the globe. I've been freelancing since 2020 and
            currently work as a Full-Stack Developer at{" "}
            <span className="text-foreground font-medium">
              One World Rental
            </span>
            .
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            At One World Rental, I built{" "}
            <a
              href="https://instahire.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              instahire.co.uk
            </a>{" "}
            — a B2C e-commerce platform — from the ground up using Next.js,
            Supabase, and Azure. I enjoy working across the full stack, from
            designing clean UIs to architecting the backend logic that powers
            them.
          </motion.p>

          {/* <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            I'm currently open to international remote opportunities and
            relocation — particularly in Europe and Southeast Asia. If you're
            looking for a developer who ships, feel free to reach out.
          </motion.p> */}

          {/* Location + availability badge */}
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
