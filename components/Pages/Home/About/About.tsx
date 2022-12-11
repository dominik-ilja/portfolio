import { githubStats, technologies } from "../../../../constants/projectData";
import SectionTitle from "../../../Utilities/SectionTitle/SectionTitle";
import Tag from "../../../Utilities/Tag/Tag";
import Underline from "../../../Utilities/Underline/Underline";

const techClasses = [
  {
    textClasses: "transition-colors text-cyan-faded hover:text-cyan",
    bgClasses: "transition-colors bg-cyan-faded hover:bg-cyan",
  },
  {
    textClasses: "transition-colors text-purple-faded hover:text-purple",
    bgClasses: "transition-colors bg-purple-faded hover:text-purple",
  },
  {
    textClasses: "transition-colors text-pink-faded hover:text-pink",
    bgClasses: "transition-colors bg-pink-faded hover:bg-pink",
  },
];

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
        {/* GitHub stats */}
        <div>
          <h2 className="mb-6 text-xl text-center text-base-40">
            GitHub Stats
          </h2>
          <div className="grid grid-cols-1 gap-y-3">
            {githubStats.map(({ stat, value }) => (
              <div key={stat} className="p-3 text-center bg-base-10">
                <div className="mb-1 text-base-50">{stat}</div>
                <div className="text-xl text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Technologies */}
        <div>
          <h2 className="mb-6 text-xl text-center text-base-40">
            Technologies
          </h2>
          <div className="grid grid-cols-1 gap-y-8">
            {technologies.map((tech, i) => (
              <div
                key={tech.title}
                className="flex flex-col items-center gap-y-4"
              >
                <h3 className={`${techClasses[i].textClasses} text-xl`}>
                  {tech.title}
                </h3>
                <Underline className={techClasses[i].bgClasses} />
                <div className="grid grid-cols-3 gap-3">
                  {tech.stack.map((item) => (
                    <Tag
                      key={item}
                      text={item}
                      className={techClasses[i].textClasses}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
