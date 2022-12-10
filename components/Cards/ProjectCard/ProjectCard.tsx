import Image from "next/image";
import Underline from "../../Utilities/Underline/Underline";
import time_tracker from "../../../public/time_tracker.png";
import Tag from "../../Utilities/Tag/Tag";
import Button from "../../Utilities/Button/Button";

const Overlay = () => {
  return <div className="absolute w-full h-full bg-base-40 opacity-40" />;
};
const CardTag = () => {
  return (
    <div className="absolute z-20 text-white bg-yellow min-w-[100px] p-2 font-bold text-center">
      New
    </div>
  );
};

const ProjectCard = () => {
  return (
    <article className="border border-base-40">
      {/* card top */}
      <div className="flex flex-col items-center pb-4 gap-y-4">
        <div className="relative">
          <CardTag />
          <Overlay />
          <Image src={time_tracker} alt="time tracker app" />
        </div>
        <div className="flex flex-col items-center px-2 gap-y-4">
          {/* title */}
          <div className="text-2xl text-center text-white">MERN Memories</div>
          {/* underline*/}
          <Underline className="bg-yellow" />
          {/* text */}
          <p className="text-center text-base-50">
            Using React, Node.js, Express & MongoDB you&apos;ll learn how to
            build a Full Stack MERN Application - from start to finish. The App
            is called Memories and it is a simple social media app that allows
            users to post interesting events that happened in their lives.
          </p>
        </div>
      </div>
      {/* card bottom */}
      <div className="flex flex-col gap-y-4">
        <div className="text-xl text-center text-white">Stack</div>
        <div className="flex justify-evenly">
          <Tag text="Mongo" />
          <Tag text="Express" />
          <Tag text="React" />
          <Tag text="Node" />
        </div>
        <Button className="rounded-none bg-yellow">See More</Button>
      </div>
    </article>
  );
};

export default ProjectCard;
