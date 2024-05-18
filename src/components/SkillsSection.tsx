import SkillsGrid from "./SkillsGrid";

const SkillsSection = () => {
  return (
    <section
      className="container px-6 sm:px-16 lg:px-20 py-10 md:py-10 md:pb-20 space-y-4"
      id="skills"
    >
      <h2 className="md:inline-block text-6xl text-primary text-center md:text-left relative after:content-[''] after:absolute md:after:block after:hidden after:left-0 after:mx-auto after:bottom-0 after:w-full after:h-1 after:bg-primary after:animate-line-width">
        My Skills & Tools
      </h2>

      <p className="text-lg max-w-4xl text-center md:text-left">
        I'm proficient in modern frontend tech like HTML5, CSS3 & JavaScript,
        and frameworks like TailwindCSS, Bootstrap & Next.js. I also handle
        backend tech like Node.js, Firebase, MongoDB & SQL.
      </p>

      <SkillsGrid />
    </section>
  );
};

export default SkillsSection;
