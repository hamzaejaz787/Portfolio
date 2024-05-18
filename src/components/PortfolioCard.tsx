import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaCode, FaRegEye } from "react-icons/fa6";
import { Button } from "./ui/button";
import { CardTypes } from "@/lib/types";

const PortfolioCard = ({ cardsData }: { cardsData: CardTypes[] }) => {
  return (
    <>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          className="group overflow-hidden rounded-md shadow-lg dark:bg-secondary flex flex-col justify-between"
        >
          <CardHeader className="p-0 overflow-hidden">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="group-hover:scale-110 transition-transform duration-300 ease-out w-full"
            />
          </CardHeader>

          <CardContent className="p-4 text-left space-y-4">
            <h3 className="text-2xl">{card.title}</h3>

            <ul className="flex items-center flex-wrap gap-4">
              {card.tags.map((tag, index) => (
                <li
                  key={index}
                  className="p-2 text-sm border-primary border-[1px] rounded-md text-primary dark:text-white cursor-pointer"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center flex-wrap gap-4">
              <Button
                asChild
                className="flex-1 min-w-min flex items-center gap-2 text-lg"
              >
                <a href={card.previewUrl} target="_blank">
                  View <FaRegEye />
                </a>
              </Button>
              <Button
                asChild
                className="flex-1 min-w-min flex items-center gap-2 text-lg"
              >
                <a href={card.codeUrl} target="_blank">
                  Code
                  <FaCode />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default PortfolioCard;
