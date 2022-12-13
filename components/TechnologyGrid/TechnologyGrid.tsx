import Tag from "../Utilities/Tag/Tag";

type Props = {
  technologies: { name: string; type: string }[];
};

const TechnologyGrid = (props: Props) => {
  const SHARED = "transition-colors md:text-lg ";
  const FRONTEND_CLASSES = SHARED + "text-cyan-faded hover:text-cyan";
  const BACKEND_CLASSES = SHARED + "text-purple-faded hover:text-purple";
  const WORKFLOW_CLASSES = SHARED + "text-pink-faded hover:text-pink";

  return (
    <div className="grid grid-cols-3 gap-3 ">
      {props.technologies.map((tech) => {
        let className = "";

        if (tech.type === "backend") className = BACKEND_CLASSES;
        if (tech.type === "frontend") className = FRONTEND_CLASSES;
        if (tech.type === "workflow") className = WORKFLOW_CLASSES;

        return <Tag key={tech.name} text={tech.name} className={className} />;
      })}
    </div>
  );
};

export default TechnologyGrid;
