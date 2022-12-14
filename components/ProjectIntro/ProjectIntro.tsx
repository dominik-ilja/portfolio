import Image, { StaticImageData } from "next/image";
import Button from "../Utilities/Button/Button";
import GitHub from "../Utilities/Icons/GitHub/GitHub";
import MainTitle from "../Utilities/Titles/MainTitle/MainTitle";
import Section from "../Utilities/Section/Section";
import CodeIcon from "../Utilities/Icons/Code/Code";

type Props = {
  children: React.ReactNode;
  thumbnail: string | StaticImageData;
  codeLink: string;
  viewLink: string;
  title: string;
};

const ProjectIntro = (props: Props) => {
  return (
    <Section className="grid pt-0 lg:grid-cols-2 gap-y-9 md:w-full md:max-w-2xl lg:max-w-none md:mx-auto md:flex-row md:justify-between md:gap-x-10 lg:gap-x-20">
      <div className="flex flex-col flex-shrink gap-y-7">
        <MainTitle className="whitespace-nowrap" underline={true}>
          {props.title}
        </MainTitle>
        {props.children}
      </div>
      <div className="flex flex-col flex-shrink-0 gap-y-3 gap-x-10 md:flex-row lg:flex-col">
        <Image
          src={props.thumbnail}
          alt="Project display"
          className="w-full mx-auto mb-5"
        />
        <div className="flex justify-center gap-5 md:flex-col min-w-[120px] lg:flex-row">
          <Button
            rounded={true}
            className="font-semibold w-full max-w-[120px] bg-indigo  flex items-center justify-between"
            externalLink={props.codeLink}
          >
            Code
            <GitHub />
          </Button>
          <Button
            rounded={true}
            className="font-semibold w-full max-w-[120px] bg-red flex items-center justify-between"
            externalLink={props.viewLink}
          >
            View
            <CodeIcon />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ProjectIntro;
