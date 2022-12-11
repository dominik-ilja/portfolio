import time_tracker from "../public/time_tracker.png";
import poke_finder from "../public/poke_finder.png";
import battleship from "../public/battleship.png";
import color_cards from "../public/color_cards.png";
import ICONS from "../components/Utilities/Icons";

export const links = {
  home: "#home",
  projects: "#projects",
  about: "#about",
  contact: "#contact",
  linkedin: "https://www.linkedin.com/in/dominik-kulak/",
  github: "https://github.com/Dominik-Ilja",
  email: "mailto:dominik.ilja.developer@gmail.com",
};

export const PROJECTS: Project[] = [
  {
    image: time_tracker,
    alt: "Time Tracker",
    title: "Time Tracker",
    description:
      "Time Tracker is an application that allows you to track and visualize how much time you've spent. You create categories and then select a category to put time into. You run the timer and hit complete when you don't want to track time anymore. Your time is then updated with the appropriate category. Your total time for each category is then displayed on the homepage.",
    stack: ["MySQL", "Express", "React", "TypeScript"],
    tag: "new",
    id: "time_tracker",
  },
  {
    image: poke_finder,
    alt: "Poke Finder",
    title: "Poke Finder",
    description:
      "Poke Finder allows you to search for any of the 905 available Pokemon! This is done by accessing Pokemon information available through the free to use Poke API! You'll be able to see any of your favorite Pokemon in our beautiful light or dark modes.",
    stack: ["React", "React Router", "Tailwindcss"],
    tag: "web",
    id: "poke_finder",
  },
  {
    image: battleship,
    alt: "Battleship",
    title: "Battleship",
    description:
      "User plays against an Ai in this interactable web app. Users can drag and drop their game pieces into the grid. The app detects if the user input is valid, when to begin the game, when a user has made a move, and when someone has won the game.",
    stack: ["HTML", "Sass", "JavaScript"],
    tag: "game",
    id: "battleship",
  },
  {
    image: color_cards,
    alt: "Color Cards",
    title: "Color Cards",
    description:
      "Plugin used with the Figma design software. Required to be built with TypeScript and Figma's API. To be accepted I had to create artwork, icons, documentation, and general project details to be submitted along with the plugin. It was accepted within the first couple days and generated about 2,000 uses in the first week.",
    stack: ["TypeScript", "Axios", "Figma API"],
    tag: "plugin",
    id: "color_cards",
  },
];

export const githubStats = [
  { stat: "Total Stars Earned:", value: 11 },
  { stat: "Total Commits (2022):", value: 639 },
  { stat: "Total PRs:", value: 45 },
  { stat: "Total Issues:", value: 27 },
  { stat: "Contributed To:", value: 9 },
];

export const technologies = [
  {
    icon: ICONS.React,
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Sass",
      "Tailwind",
      "TypeScript",
      "React",
    ],
    title: "Front End",
  },
  {
    icon: ICONS.Database,
    stack: ["Nodejs", "Express", "MongoDB", "MySQL"],
    title: "Back End",
  },
  {
    icon: ICONS.Palette,
    stack: [
      "Figma",
      "Git",
      "GitHub",
      "Netlify",
      "Heroku",
      "Illustrator",
      "Mocha",
      "Chai",
    ],
    title: "Workflow",
  },
];

export const PROJECT_TAGS: TagOptions[] = [
  "design",
  "game",
  "plugin",
  "new",
  "web",
];
