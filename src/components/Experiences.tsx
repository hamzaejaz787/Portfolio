import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    company: "One World Rental",
    role: "Full Stack Developer",
    location: "Islamabad",
    period: "Aug 2024 – Present",
    points: [
      "Developed a full B2C e-commerce platform with Next.js, handling both frontend and backend development and integrating IntelliEvent for event management capabilities.",
      "Built interactive analytics dashboards with real-time data tracking, automating reporting workflows and reducing manual reporting time for stakeholders.",
      "Architected and shipped scalable web applications using Next.js, Strapi CMS, and TailwindCSS, owning the full lifecycle from design to production deployment on Microsoft Azure.",
    ],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    location: "Remote",
    period: "Aug 2020 – Present",
    points: [
      "Designed and developed 10+ SaaS platforms for startups using both MERN and Next.js stacks, contributing directly to client revenue growth.",
      "Built responsive, high-performance websites for businesses serving 500+ customers, maintaining quick load times and consistent cross-device UX.",
      "Managed the full project lifecycle independently — from requirements and architecture to deployment on AWS (EC2, S3, Lightsail).",
    ],
  },
  {
    company: "CyberxStudio",
    role: "Frontend Developer",
    location: "Islamabad",
    period: "Nov 2023 – Aug 2024",
    points: [
      "Developed and maintained a secure, high-performance website for Ferrotechnics, collaborating directly with the client to deliver bespoke solutions on schedule.",
      "Built scalable web applications using Next.js, Strapi, and TailwindCSS, overseeing full-cycle development and seamless CMS integration.",
      "Converted Figma designs into pixel-perfect responsive websites, boosting user engagement through close collaboration with the SEO team.",
    ],
  },
  {
    company: "Rezolvat",
    role: "Frontend Developer Intern",
    location: "Rawalpindi",
    period: "Oct 2022 – Jan 2023",
    points: [
      "Contributed to full-stack development of RezoQuick, a task marketplace platform — built the ReactJS frontend and assisted with MongoDB, Node.js, and Express backend.",
      "Helped establish a dynamic marketplace enabling individuals and businesses to delegate tasks, supporting a community of skilled freelancers.",
    ],
  },
  {
    company: "Interns Pakistan",
    role: "Frontend Developer Intern",
    location: "Remote",
    period: "Feb 2022 – Mar 2022",
    points: [
      "Developed a WordPress website using HTML, CSS, PHP, jQuery, and JavaScript during a one-month intensive internship.",
    ],
  },
  {
    company: "UB Enterprises",
    role: "Web Developer",
    location: "Rawalpindi",
    period: "Apr 2021 – Jun 2021",
    points: [
      "Led end-to-end design and development of the company website, delivering a polished product that matched stakeholder expectations.",
      "Created detailed Figma mockups prior to development, enabling informed design decisions and reducing revision cycles.",
    ],
  },
];

const cardVariants = {
  hidden: (isLeft: boolean) => ({
    opacity: 0,
    x: isLeft ? -40 : 40,
  }),
  show: {
    opacity: 1,
    x: 0,
  },
};

const MotionCard = motion(Card);

const Experiences = () => {
  return (
    <section
      id="experience"
      className="container px-6 sm:px-16 lg:px-20 py-16 md:py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-primary text-center md:text-left mb-16"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Center line — desktop only */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative md:grid md:grid-cols-2 md:gap-8"
              >
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />

                {/* Spacer for right-aligned cards */}
                {!isLeft && <div className="hidden md:block" />}

                <div className={isLeft ? "md:pr-12" : "md:pl-12"}>
                  <MotionCard
                    custom={isLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="dark:bg-secondary"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold text-foreground leading-tight">
                            {exp.company}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {exp.role} · {exp.location}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-primary border-primary text-xs whitespace-nowrap"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>

                    <Separator className="mx-6 w-auto" />

                    <CardContent className="pt-4 space-y-4">
                      <ul className="space-y-2">
                        {exp.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="text-primary mt-1.5 shrink-0">
                              ▹
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </MotionCard>
                </div>

                {/* Spacer for left-aligned cards */}
                {isLeft && <div className="hidden md:block" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
