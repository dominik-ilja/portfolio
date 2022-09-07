import timeTracker from '../assets/time-tracker.png';
import pokeFinder from '../assets/poke-finder.png';
import battleship from '../assets/battleship.png';
import colorCards from '../assets/color-cards.png';
import Palette from '../components/Icons/Palette/Palette';
import Database from '../components/Icons/Database/Database';
import React from '../components/Icons/React/React';
console.log(Palette);


export const links = {
  home: '#home',
  projects: '#projects',
  about: '#about',
  contact: '#contact',
  linkedin: 'https://www.linkedin.com/in/dominik-kulak/',
  github: 'https://github.com/Dominik-Ilja',
  email: 'mailto:dominik.ilja.developer@gmail.com'
};
export type Project = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  stack: [] | String[];
  codeURL: string;
  sourceURL: string;
};
export const projects: Project[] = [
  {
    image: timeTracker,
    imageAlt: 'Time Tracker',
    title: 'Time Tracker',
    description: `Time Tracker is an application that allows you to track and visualize how much time you've spent. You create categories and then select a category to put time into. You run the timer and hit complete when you don't want to track time anymore. Your time is then updated with the appropriate category. Your total time for each category is then displayed on the homepage.`,
    stack: ['MySQL', 'Express', 'React', 'TypeScript'],
    codeURL: 'https://github.com/Dominik-Ilja/time-tracker',
    sourceURL: 'https://timer-tracker-ilja.netlify.app/',
  },
  {
    image: pokeFinder,
    imageAlt: 'Poke Finder',
    title: 'Poke Finder',
    description: `Poke Finder allows you to search for any of the 905 available Pokemon! This is done by accessing Pokemon information available through the free to use Poke API! You'll be able to see any of your favorite Pokemon in our beautiful light or dark modes.`,
    stack: ['React', 'React Router', 'Tailwindcss'],
    codeURL: 'https://github.com/Dominik-Ilja/poke-finder',
    sourceURL: 'https://poke-finder-ilja.netlify.app/',
  },
  {
    image: battleship,
    imageAlt: 'Battleship',
    title: 'Battleship',
    description: `User plays against an Ai in this interactable web app. Users can drag and drop their game pieces into the grid. The app detects if the user input is valid, when to begin the game, when a user has made a move, and when someone has won the game.`,
    stack: ['HTML', 'Sass', 'JavaScript'],
    codeURL: 'https://github.com/Dominik-Ilja/battleship',
    sourceURL: 'https://battleship-ilja.netlify.app/',
  },
  {
    image: colorCards,
    imageAlt: 'Color Cards',
    title: 'Color Cards',
    description: `Plugin used with the Figma design software. Required to be built with TypeScript and Figma's API. To be accepted I had to create artwork, icons, documentation, and general project details to be submitted along with the plugin. It was accepted within the first couple days and generated about 2,000 uses in the first week.`,
    stack: ['TypeScript', 'Axios', 'Figma API'],
    codeURL: 'https://github.com/Dominik-Ilja/Color-Cards',
    sourceURL: 'https://www.figma.com/community/plugin/1127675179361433108/Color-Cards',
  },
];

export const githubStats = {
  stars: 9,
  commits: 260,
  prs: 39,
  issues: 28,
  contributed: 2
};

export const technologies = [
  { title: 'Front End', icon: <React />, stack: ['HTML', 'CSS', 'JavaScript', 'Sass', 'Tailwind', 'TypeScript', 'React'] },
  { title: 'Back End', icon: <Database />, stack: ['Nodejs', 'Express', 'MongoDB', 'MySQL'] },
  { title: 'Workflow', icon: <Palette />, stack: ['Figma', 'Git', 'GitHub', 'Netlify', 'Heroku', 'Illustrator', 'Mocha', 'Chai'] }
  // { title: 'Workflow', icon: <Palette />, stack: ['Figma', 'Git', 'GitHub', 'Netlify', 'Heroku', 'Illustrator', 'Mocha', 'Chai'] }
];
// export const technologies = {
//   frontend: ['HTML', 'CSS', 'JavaScript', 'Sass', 'Tailwind', 'TypeScript', 'React'],
//   backend: ['Nodejs', 'Express', 'MongoDB', 'MySQL'],
//   workflow: ['Figma', 'Git', 'GitHub', 'Netlify', 'Heroku', 'Illustrator', 'Mocha', 'Chai'],
// };
