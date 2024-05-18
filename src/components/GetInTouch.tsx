import { FaGithub, FaLinkedin, FaUpwork } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const GetInTouch = () => {
  return (
    <footer
      id="contact"
      className="h-screen container px-6 sm:px-16 lg:px-20 py-10 md:pt-20 md:pb-8 space-y-4 content-center"
    >
      <h2 className="text-5xl sm:text-6xl font-medium capitalize text-primary text-center">
        Reach out to me!
      </h2>

      <p className="text-lg max-w-4xl mx-auto text-center">
        Discuss A Project Or Just Want To Say Hi? My Inbox Is Open For All.
      </p>

      <div className="flex items-center justify-center gap-8 pt-6">
        <a
          href="https://github.com/hamzaejaz787/"
          className="text-4xl hover:text-gray-600 transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hamza-ejaz-78b979186/"
          className="text-4xl hover:text-blue-600 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01bbd44cd1e1b14675"
          className="text-4xl hover:text-lime-600 transition-all duration-300"
        >
          <FaUpwork />
        </a>
        <a
          href="mailto:hejaz389@gmail.com"
          className="text-4xl hover:text-slate-600 transition-all duration-300"
        >
          <MdEmail />
        </a>
      </div>
    </footer>
  );
};

export default GetInTouch;
