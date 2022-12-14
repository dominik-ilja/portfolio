import Container from "../../../Container/Container";
import Section from "../../../Utilities/Section/Section";
import SectionTitle from "../../../Utilities/Titles/SectionTitle/SectionTitle";
import Text from "../../../Utilities/Text/Text";
import GitHubStats from "./GitHubStats/GitHubStats";
import Technologies from "./Technologies/Technologies";

const About = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-y-16">
        <SectionTitle title="About" />
        <div className="flex flex-col lg:flex-row gap-y-16 gap-x-24">
          <Text className="w-full max-w-xl mx-auto">
            I began my journey by building a website with Wordpress to host my
            guitar lessons. I then moved to the big three: HTML, CSS, and
            JavaScript. I then moved to building websites and web applications
            with these technologies. I&apos;ve fallen in love with learning all
            the details of computers, design, and software development. I&apos;m
            currently contributing to Figma, open source projects through
            GitHub, and looking to build desktop applications with Electron.
          </Text>
          <GitHubStats className="w-full" />
        </div>
        <Technologies />
      </Container>
    </Section>
  );
};

export default About;
