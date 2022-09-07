import { Text } from '../';
import { Project } from '../../constants';

type Props = {
  project: Project;
};

const ProjectCard = ({ project, ...props }: Props) => {
  const stack = project.stack.map(item => (
    <li className="text-primary-light-200">{item}</li>
  ));
  const buttons = [
    { content: 'Code', href: project.codeURL },
    { content: 'Source', href: project.sourceURL }
  ].map(btn => (
    <a className="w-[100px] text-black font-semibold rounded-lg text-center bg-primary-light-100 hover:bg-primary-light focus:bg-primary-light py-2 px-3.5"
      href={btn.href}>
      {btn.content}
    </a>
  ));


  return (
    <article className="flex flex-col items-center pb-8 border gap-y-4 border-bg-light-200">
      <img src={project.image} alt={project.imageAlt} />
      <div className="flex flex-col items-center h-full px-4 gap-y-4">
        <h3 className="text-xl">{project.title}</h3>
        <div className="w-[100px] h-[2px] bg-primary" />
        <Text className="text-center md:text-left">{project.description}</Text>
        <div className="flex flex-col items-center mt-auto gap-y-4">
          <h4 className="text-lg">Stack</h4>
          <ul className="flex justify-center gap-x-4">{stack}</ul>
          <div className="flex gap-x-8">{buttons}</div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
