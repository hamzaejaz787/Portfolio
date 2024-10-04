import SkillsGrid from "./SkillsGrid";

const SkillsSection = () => {
  return (
    <section
      className="container px-6 sm:px-16 lg:px-20 py-10 md:py-10 md:pb-20 space-y-4"
      id="skills"
    >
      <h2 className="md:inline-block text-6xl text-primary text-center md:text-left relative after:content-[''] after:absolute md:after:block after:hidden after:left-0 after:mx-auto after:bottom-0 after:w-full after:h-1 after:bg-primary after:animate-line-width">
        Skills & Tools
      </h2>

      <p className="text-lg max-w-4xl text-center md:text-left">
        Skilled in modern frontend technologies such as HTML5, CSS3, and
        JavaScript, along with frameworks like TailwindCSS, Bootstrap, and
        Next.js. Experienced in backend technologies, including Node.js,
        Firebase, MongoDB, and SQL.
      </p>

      <SkillsGrid />
    </section>
  );
};

export default SkillsSection;
