import Image from "next/image";
import Button from "../../../Utilities/Button/Button";
import moon from "../../../../public/moon.svg";
import { PROJECTS } from "../../../../constants/projectData";
import MainTitle from "../../../Utilities/MainTitle/MainTitle";

const Showcase = () => {
  return (
    <section className="pb-16 -mt-16 md:-mt-28 lg:mt-0">
      <div className="container flex flex-col px-3 mx-auto lg:flex-row-reverse lg:justify-between gap-y-9 sm:gap-y-4 md:gap-0">
        <div className="text-right max-w-[225px] sm:max-w-[300px] md:max-w-[350px] self-end text-base-50 sm:text-2xl md:text-3xl lg:relative bottom-52 flex flex-col items-end">
          <div className="lg:mr-8">
            Creating beauty and bringing visions to life.
          </div>
          <div className="flex flex-col items-center mr-8 lg:mr-0">
            <div className="w-[2px] h-8 bg-base-10"></div>
            <Image
              src={moon}
              alt="moon"
              className="w-6 sm:w-10 md:w-20 lg:w-64"
            />
          </div>
        </div>
        <div className="flex flex-col sm:items-start gap-y-9">
          <MainTitle underline={false}>Dominik Ilja</MainTitle>
          <p className="max-w-3xl text-center sm:text-left text-base-50">
            I&apos;m probably not the typical designer positioned behind an
            Illustrator artboard adjusting pixels, but I design. Immersed in
            stylesheets tweaking font sizes and contemplating layouts is where
            you&apos;ll find me (~_^). I&apos;m committed to creating fluent
            user experiences while staying fashionable.
          </p>
          <Button
            internalLink={`projects/${PROJECTS[0].id}`}
            rounded={true}
            className="self-center bg-indigo sm:self-start"
          >
            Current Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
