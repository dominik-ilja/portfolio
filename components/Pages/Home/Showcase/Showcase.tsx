import Image from "next/image";
import Button from "../../../Utilities/Button/Button";
import moon from "../../../../public/moon.svg";
import { PROJECTS } from "../../../../constants/projectData";
import MainTitle from "../../../Utilities/MainTitle/MainTitle";
import Text from "../../../Utilities/Text/Text";
import Section from "../../../Utilities/Section/Section";
import Container from "../../../Container/Container";

const Showcase = () => {
  return (
    <Section className="pt-0 -mt-16 md:-mt-28 lg:mt-0">
      <Container className="flex flex-col lg:flex-row-reverse lg:justify-between gap-y-9 sm:gap-y-4 md:gap-0">
        <div className="text-right max-w-[225px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-md self-end text-base-50 lg:relative bottom-52 flex flex-col items-end">
          <div className="font-light lg:mr-8 sm:text-xl md:text-3xl">
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
        <div className="flex flex-col sm:items-start gap-y-7">
          <MainTitle underline={false}>Dominik Ilja</MainTitle>
          <Text className="max-w-2xl">
            I&apos;m probably not the typical designer positioned behind an
            Illustrator artboard adjusting pixels, but I design. Immersed in
            stylesheets tweaking font sizes and contemplating layouts is where
            you&apos;ll find me (~_^). I&apos;m committed to creating fluent
            user experiences while staying fashionable.
          </Text>
          <Button
            internalLink={`projects/${PROJECTS[0].id}`}
            rounded={true}
            className="self-center bg-indigo sm:self-start"
          >
            Current Project
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Showcase;
