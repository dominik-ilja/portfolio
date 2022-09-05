import { Text } from '../';
import { Project } from '../../constants';

type Props = {
  project: Project;
};

const ProjectCard = ({ project, ...props }: Props) => {
  const stack = project.stack.map(item => (
    <li className="text-primary">{item}</li>
  ));
  const buttons = [
    { content: 'Code', href: project.codeURL },
    { content: 'Source', href: project.sourceURL }
  ].map(btn => (
    <a className="w-[100px] text-black font-semibold rounded-lg text-center bg-primary-light py-2 px-3.5"
      href={btn.href}>
      {btn.content}
    </a>
  ));


  return (
    <article className="flex flex-col gap-y-4 items-center pb-8 border border-[#343434]">
      <img src={project.image} alt={project.imageAlt} />
      <div className="flex flex-col items-center gap-y-4">
        <h3 className="text-xl">{project.title}</h3>
        <div className="w-[100px] h-[2px] bg-primary" />
        <Text className="text-center">{project.description}</Text>
        <h4 className="text-lg">Stack</h4>
        <ul className="flex justify-center gap-x-4">{stack}</ul>
        <div className="flex gap-x-8">{buttons}</div>
      </div>
    </article>
  );
};

export default ProjectCard;
