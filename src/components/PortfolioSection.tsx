import { CardTypes } from "@/lib/types";
import PortfolioCard from "./PortfolioCard";

import big0Thumb from "@/assets/big0.png";
import ferroThumb from "@/assets/ferro.png";
import perryAirThumb from "@/assets/perry-aircon.png";
import fibermaxThumb from "@/assets/fibermax-thumbnail.png";
import laptopRentalThumb from "@/assets/laptop-rental.png";
import { Button } from "./ui/button";

const PortfolioSection = () => {
  const cardsData: CardTypes[] = [
    {
      title: "Laptop Rental Australia",
      imageUrl: laptopRentalThumb,
      codeUrl: "https://github.com/hamzaejaz787/laptop-rental",
      previewUrl: "https://laptop-rental.com.au",
      tags: ["NextJs", "TailwindCSS", "Shadcn/ui", "Framer Motion", "Strapi"],
    },
    {
      title: "Big0",
      imageUrl: big0Thumb,
      codeUrl: "https://github.com/hamzaejaz787/big-o",
      previewUrl: "https://big0.dev/",
      tags: ["NextJs", "TailwindCSS", "Shadcn/ui", "Strapi", "Supabase"],
    },
    {
      title: "Ferrotechincs",
      imageUrl: ferroThumb,
      codeUrl: "https://github.com/hamzaejaz787/",
      previewUrl: "https://www.ferrotechnics.com/",
      tags: ["HTML5", "CSS3", "Javascript"],
    },
    {
      title: "Perry Air Conditioning",
      imageUrl: perryAirThumb,
      codeUrl: "https://github.com/hamzaejaz787/",
      previewUrl: "https://perryair.com.au/",
      tags: ["ReactJS", "HeadlessUI"],
    },
    {
      title: "Fibermax",
      imageUrl: fibermaxThumb,
      codeUrl: "https://github.com/hamzaejaz787/",
      previewUrl: "https://fibermax.com.pk/",
      tags: ["HTML5", "CSS3", "Javascript"],
    },
  ];
  return (
    <section
      className="container px-6 sm:px-16 lg:px-20 py-10 md:py-10 md:pb-20 text-center content-center space-y-6"
      id="projects"
    >
      <h2 className="md:inline-block text-6xl text-primary text-center mx-auto relative after:content-[''] after:absolute md:after:block after:hidden after:left-0 after:mx-auto after:bottom-0 after:w-full after:h-1 after:bg-primary after:animate-line-width">
        My Portfolio
      </h2>{" "}
      <p className="text-lg">
        Take a look at some of the recent projects I've been working on!{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-6">
        <PortfolioCard cardsData={cardsData} />
      </div>
      <Button asChild className="text-lg px-10 py-6">
        <a href="https://github.com/hamzaejaz787/" target="_blank">
          View More
        </a>
      </Button>
    </section>
  );
};

export default PortfolioSection;
