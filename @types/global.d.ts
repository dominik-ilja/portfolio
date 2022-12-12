import { StaticImageData } from "next/image";

export {};

declare global {
  type Project = {
    alt: string;
    description: string;
    id: string;
    image: StaticImageDataData;
    stack: string[];
    tag: string;
    title: string;
  };

  type TagOptions = "design" | "game" | "plugin" | "new" | "web";

  type StatObject = {
    stat: string;
    value: number;
  };
}
