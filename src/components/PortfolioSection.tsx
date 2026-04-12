import { CardTypes } from "@/lib/types";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";

import big0Thumb from "@/assets/big0.png";
import ferroThumb from "@/assets/ferro.png";
import fibermaxThumb from "@/assets/fibermax-thumbnail.png";
import laptopRentalThumb from "@/assets/laptop-rental.png";
import turningPagesThumb from "@/assets/turningpages.png";
import instahireThumb from "@/assets/instahire.png";
import perryAirconThumb from "@/assets/perry-aircon.png";
import awtThuumb from "@/assets/awt.png";

const PortfolioSection = () => {
  const cardsData: CardTypes[] = [
    {
      title: "Instahire",
      imageUrl: instahireThumb,
      previewUrl: "https://instahire.co.uk",
      tags: [
        "NextJs",
        "TailwindCSS",
        "Shadcn/ui",
        "Supabase",
        "Azure",
        "Stripe",
      ],
    },
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
      title: "Turning Pages Foundation",
      imageUrl: turningPagesThumb,
      previewUrl: "https://turningpagesfoundation.org/",
      tags: ["Wordpress", "Elementor", "Stripe"],
    },
    {
      title: "Army Welfare Trust (AWT)",
      imageUrl: awtThuumb,
      previewUrl: "https://awt.com.pk/",
      tags: ["Reactjs", "Bootstrap", "Strapi", "jQuery", "Framer Motion"],
    },
    {
      title: "Ferrotechnics",
      imageUrl: ferroThumb,
      previewUrl: "https://www.ferrotechnics.com/",
      tags: ["HTML5", "CSS3", "Javascript"],
    },
    {
      title: "Perry Aircon",
      imageUrl: perryAirconThumb,
      previewUrl: "https://perryair.com.au/",
      tags: ["React.JS", "HeadlessUI", "CSS3"],
    },
    {
      title: "Fibermax",
      imageUrl: fibermaxThumb,
      previewUrl: "https://fibermax.com.pk/",
      tags: ["HTML5", "CSS3", "Javascript"],
    },
  ];
  return (
    <section
      className="container px-6 sm:px-16 lg:px-20 py-10 md:py-10 md:pb-20 text-center content-center space-y-6"
      id="projects"
    >
      <motion.h2
        initial="hidden"
        viewport={{ once: true }}
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}
        className="text-4xl sm:text-5xl font-bold text-primary text-center"
      >
        My Portfolio
      </motion.h2>{" "}
      <p className="text-lg text-muted-foreground">
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
