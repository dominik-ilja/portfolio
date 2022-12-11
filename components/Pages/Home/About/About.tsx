import SectionTitle from "../../../Utilities/SectionTitle/SectionTitle";
import GitHubStats from "./GitHubStats/GitHubStats";
import Technologies from "./Technologies/Technologies";

const About = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col px-3 mx-auto gap-y-9">
        <SectionTitle title="About" />
        <p className="text-center text-base-50">
          I began my journey by building a website with Wordpress to host my
          guitar lessons. I then moved to the big three: HTML, CSS, and
          JavaScript. I then moved to building websites and web applications
          with these technologies. I&apos;ve fallen in love with learning all
          the details of computers, design, and software development. I&apos;m
          currently contributing to Figma, open source projects through GitHub,
          and looking to build desktop applications with Electron.
        </p>
        <GitHubStats />
        <Technologies />
      </div>
    </section>
  );
};

export default About;
