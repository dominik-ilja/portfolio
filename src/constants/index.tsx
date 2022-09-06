import memories from '../assets/memories.png';
import messenger from '../assets/messenger.jpg';
import videoChat from '../assets/video-chat.jpg';
import webShop from '../assets/web-shop.png';
import Palette from '../components/Icons/Palette/Palette';
import Database from '../components/Icons/Database/Database';
import React from '../components/Icons/React/React';
// import { Palette } from '../components';
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
    image: memories,
    imageAlt: 'Memories App',
    title: 'MERN Memories',
    description: ` Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.`,
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    codeURL: '#',
    sourceURL: '#',
  },
  {
    image: messenger,
    imageAlt: 'Unichat App',
    title: 'Unichat',
    description: `This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application.`,
    stack: ['React', 'ChatEngine', 'Firebase'],
    codeURL: '#',
    sourceURL: '#',
  },
  {
    image: webShop,
    imageAlt: 'Web Shop App',
    title: 'E-Commerce',
    description: ` Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.`,
    stack: ['React', 'JavaScript'],
    codeURL: '#',
    sourceURL: '#',
  },
  {
    image: videoChat,
    imageAlt: 'Video Chat App',
    title: 'WebRTC App',
    description: `This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.`,
    stack: ['React', 'WebRTC'],
    codeURL: '#',
    sourceURL: '#',
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
