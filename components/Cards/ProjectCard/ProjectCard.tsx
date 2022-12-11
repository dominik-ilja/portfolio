import Image from "next/image";
import Underline from "../../Utilities/Underline/Underline";
import Tag from "../../Utilities/Tag/Tag";
import Button from "../../Utilities/Button/Button";

type Props = {
  project: Project;
};
const TAG_CLASSES = {
  design: {
    themeTextClass: "text-blue",
    themeBGClass: "bg-blue",
  },
  game: {
    themeTextClass: "text-blue",
    themeBGClass: "bg-blue",
  },
  new: {
    themeTextClass: "text-red",
    themeBGClass: "bg-red",
  },
  plugin: {
    themeTextClass: "text-green",
    themeBGClass: "bg-green",
  },
  web: {
    themeTextClass: "text-blue",
    themeBGClass: "bg-blue",
  },
};
const Overlay = (props: { themeBG?: string }) => {
  return (
    <div
      className={`absolute w-full h-full opacity-25 blur-3xl ${
        props.themeBG || "bg-white"
      }`}
    />
  );
};
const CardTag = (props: { tag: string; themeBG?: string }) => {
  let tag = "";

  if (props.tag !== "") {
    tag = props.tag[0].toUpperCase() + props.tag.slice(1).toLowerCase();
  }

  return (
    <div
      className={`absolute z-20 text-white min-w-[100px] p-2 font-bold text-center ${
        props.themeBG || "bg-base-30"
      }`}
    >
      {tag}
    </div>
  );
};

const ProjectCard = (props: Props) => {
  let themeBGClass = "";
  let themeTextClass = "";
  let key = props?.project?.tag as keyof typeof TAG_CLASSES;

  if (TAG_CLASSES[key] !== undefined) {
    themeBGClass = TAG_CLASSES[key].themeBGClass;
    themeTextClass = TAG_CLASSES[key].themeTextClass;
  }

  return (
    <article className="flex flex-col border border-base-40">
      {/* Card Top */}
      <div className="flex flex-col items-center pb-4 gap-y-4">
        {/* Card Image */}
        <div className="relative overflow-hidden">
          <CardTag tag={props.project.tag} themeBG={themeBGClass} />
          <Overlay themeBG={themeBGClass} />
          <Image src={props.project.image} alt={props.project.alt} />
        </div>
        {/* Card Content */}
        <div className="flex flex-col items-center px-2 gap-y-4">
          <div className="text-2xl text-center text-white">
            {props.project.title}
          </div>
          <Underline className={themeBGClass || "bg-base-30"} />
          <p className="text-center text-base-50">
            {props.project.description}
          </p>
        </div>
      </div>
      {/* Card Bottom */}
      <div className="flex flex-col mt-auto gap-y-4">
        <div className="text-xl text-center text-white">Stack</div>
        {/* Card Stack */}
        <div className="flex pb-4 justify-evenly">
          {props.project.stack.map((name) => (
            <Tag
              key={`${props.project.id} ${name}`}
              className={`${themeTextClass}`}
              text={name}
            />
          ))}
        </div>
        <Button
          internalLink={`/projects/${props.project.id}`}
          className={`${themeBGClass || "bg-base-30"} text-center`}
        >
          See More
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;
