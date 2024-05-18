import { IconType } from "react-icons";

export interface SkillGridItemTypes {
  title?: string;
  href?: string;
  icon: IconType;
}

export interface NavItemTypes {
  href: string;
  title: string;
}

export interface CardTypes {
  title: string;
  imageUrl: string;
  tags: string[];
  previewUrl: string;
  codeUrl: string;
}
