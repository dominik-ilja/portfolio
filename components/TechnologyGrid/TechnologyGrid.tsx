import Tag from "../Utilities/Tag/Tag";

type Props = {
  technologies: { name: string; type: string }[];
};

const TechnologyGrid = (props: Props) => {
  const SHARED = "transition-colors ";
  const FRONTEND_CLASSES = SHARED + "text-cyan-faded hover:text-cyan";
  const BACKEND_CLASSES = SHARED + "text-purple-faded hover:text-purple";
  const WORKFLOW_CLASSES = SHARED + "text-pink-faded hover:text-pink";

  return (
    <div className="grid grid-cols-3 gap-3 ">
      {props.technologies.map((tech) => {
        let classes = "";

        if (tech.type === "backend") classes = BACKEND_CLASSES;
        if (tech.type === "frontend") classes = FRONTEND_CLASSES;
        if (tech.type === "workflow") classes = WORKFLOW_CLASSES;

        return <Tag key={tech.name} text={tech.name} className={classes} />;
      })}
    </div>
  );
};

export default TechnologyGrid;
