import { Button } from "@/components/ui/button";

const IntroSection = () => {
  return (
    <section className="container px-6 sm:px-16 lg:px-20 py-10 md:pt-20 md:pb-8 space-y-4">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl font-medium uppercase text-primary text-center md:text-left">
        Full Stack Developer
      </h1>

      <p className="text-lg max-w-4xl text-center md:text-left">
        Hi, I'm Hamza, a passionate Software Developer specializing in crafting
        captivating web applications. With expertise in React, Next.js,
        TailwindCSS, Strapi, Firebase, Node.js, and cutting-edge libraries, I
        bring your digital visions to life with innovation and finesse.
      </p>
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
