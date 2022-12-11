import Image from "next/image";
import Button from "../../../Utilities/Button/Button";
import moon from "../../../../public/moon.svg";
import { projects } from "../../../../constants/projectData";

const Showcase = () => {
  return (
    <section className="pb-16 -mt-16">
      <div className="container flex flex-col px-3 mx-auto gap-y-9">
        <div className="text-right max-w-[225px] ml-auto text-base-50 flex flex-col items-end">
          Creating beauty and bringing visions to life.
          <div className="flex flex-col items-center mr-8">
            <div className="w-[2px] h-8 bg-base-10"></div>
            <Image src={moon} alt="moon" className="w-6" />
          </div>
        </div>
        <h1 className="text-5xl text-center text-white">Dominik Ilja</h1>
        <p className="text-center text-base-50">
          I&apos;m probably not the typical designer positioned behind an
          Illustrator artboard adjusting pixels, but I design. Immersed in
          stylesheets tweaking font sizes and contemplating layouts is where
          you&apos;ll find me (~_^). I&apos;m committed to creating fluent user
          experiences while staying fashionable.
        </p>
        <Button
          internalLink={`projects/${projects[0].id}`}
          rounded={true}
          className="self-center bg-indigo"
        >
          Current Project
        </Button>
      </div>
    </section>
  );
};

export default Showcase;
