import illustration from "../../assets/illustration.svg";
import "./intro.css";

const Intro = () => {
  return (
    <>
      <section className="intro">
        <div className="intro__wrapper-text">
          <h1>Hi, I'm Hamza👋</h1>
          <small>Full Stack Developer</small>

          <p>
            A passionate Software Developer having an experience of building Web
            applications with JavaScript / Reactjs / Firebase / Nodejs and some
            other cool libraries and frameworks.
          </p>
        </div>

        <div className="intro__image">
          <img src={illustration} alt="" />
        </div>
      </section>
    </>
  );
};

export default Intro;
