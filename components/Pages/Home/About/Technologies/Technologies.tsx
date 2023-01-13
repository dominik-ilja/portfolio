import { technologies } from "../../../../../constants/projectData";
import Tag from "../../../../Utilities/Tag/Tag";
import Underline from "../../../../Utilities/Underline/Underline";

const TECH_CLASSES = [
  {
    textClasses: "transition-colors text-cyan-faded hover:text-cyan",
    bgClasses: "transition-colors bg-cyan-faded hover:bg-cyan",
  },
  {
    textClasses: "transition-colors text-purple-faded hover:text-purple",
    bgClasses: "transition-colors bg-purple-faded hover:text-purple",
  },
  {
    textClasses: "transition-colors text-pink-faded hover:text-pink",
    bgClasses: "transition-colors bg-pink-faded hover:bg-pink",
  },
];

const Technologies = () => {
  return (
    <div>
      <h2 className="mb-6 text-xl text-center text-base-40">Technologies</h2>
      <div className="grid grid-cols-resp-fit gap-y-8">
        {technologies.map((tech, i) => (
          <div key={tech.title} className="flex flex-col items-center gap-y-6">
            <div
              className={`${TECH_CLASSES[i].textClasses} text-xl flex items-center gap-x-3`}
            >
              <h3 className="whitespace-nowrap sm:text-2xl md:text-3xl">
                {tech.title}
              </h3>
              <tech.icon className="h-6" />
            </div>
            <Underline className={TECH_CLASSES[i].bgClasses} />
            <div className="grid grid-cols-3 gap-3">
              {tech.stack.map((item) => (
                <Tag
                  key={item}
                  text={item}
                  className={TECH_CLASSES[i].textClasses}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
