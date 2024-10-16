import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaCode, FaRegEye } from "react-icons/fa6";
import { Button } from "./ui/button";
import { CardTypes } from "@/lib/types";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, x: 20 },
  reveal: { opacity: 1, x: 0 },
};

const PortfolioCard = ({ cardsData }: { cardsData: CardTypes[] }) => {
  const MotionCard = motion(Card);

  return (
    <>
      {cardsData.map((card, index) => (
        <MotionCard
          initial="hidden"
          whileInView="reveal"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 50, delay: index * 0.1 }}
          variants={animationVariants}
          key={index}
          className="group overflow-hidden rounded-md shadow-lg dark:bg-secondary flex flex-col justify-start"
        >
          <CardHeader className="p-0 overflow-hidden min-h-[250px]">
            {" "}
            <a href={card.previewUrl}>
              <img
                loading="lazy"
                src={card.imageUrl}
                alt={card.title}
                className="group-hover:scale-110 lg:group-hover:rotate-2 transition-transform duration-300 h-full ease-out w-full"
              />
            </a>
          </CardHeader>

          <CardContent className="p-4 text-left gap-4 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <h3 className="text-2xl">{card.title}</h3>

              <ul className="flex items-center flex-wrap gap-x-4 gap-y-2">
                {card.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="p-2 text-sm border-primary border-[1px] rounded-md text-primary dark:text-white cursor-pointer"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center flex-wrap gap-4">
              <Button
                asChild
                className="flex-1 min-w-min flex items-center gap-2 text-lg"
              >
                <a href={card.previewUrl}>
                  Live <FaRegEye />
                </a>
              </Button>
              <Button
                asChild
                className="flex-1 min-w-min flex items-center gap-2 text-lg"
              >
                <a href={card.codeUrl}>
                  Code
                  <FaCode />
                </a>
              </Button>
            </div>
          </CardContent>
        </MotionCard>
      ))}
    </>
  );
};

export default PortfolioCard;
