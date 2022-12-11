import Head from "next/head";
import Image from "next/image";
import ProjectCard from "../components/Cards/ProjectCard/ProjectCard";
import Layout from "../components/Layout/Layout";
import Button from "../components/Utilities/Button/Button";
import SectionTitle from "../components/Utilities/SectionTitle/SectionTitle";
import arrows from "../public/arrows.svg";
import moon from "../public/moon.svg";
import { projects, githubStats, technologies } from "../constants/projectData";
import Underline from "../components/Utilities/Underline/Underline";
import Tag from "../components/Utilities/Tag/Tag";
import Link from "next/link";

export default function Home() {
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

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Showcase */}
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
              you&apos;ll find me (~_^). I&apos;m committed to creating fluent
              user experiences while staying fashionable.
            </p>
            <Button rounded={true} className="self-center bg-indigo">
              Current Project
            </Button>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16">
          <div className="container flex flex-col px-3 mx-auto gap-y-16">
            <SectionTitle title="Projects" />
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            <Button
              rounded={true}
              internalLink="/projects"
              className="self-center mt-16 bg-red"
            >
              View All Projects
            </Button>
          </div>
        </section>

        {/* About */}
        <section className="py-16">
          <div className="container flex flex-col px-3 mx-auto gap-y-9">
            <SectionTitle title="About" />
            <p className="text-center text-base-50">
              I began my journey by building a website with Wordpress to host my
              guitar lessons. I then moved to the big three: HTML, CSS, and
              JavaScript. I then moved to building websites and web applications
              with these technologies. I&apos;ve fallen in love with learning
              all the details of computers, design, and software development.
              I&apos;m currently contributing to Figma, open source projects
              through GitHub, and looking to build desktop applications with
              Electron.
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
        {/* Contact */}
        <section className="pt-16 pb-4">
          <div className="container flex flex-col px-3 mx-auto gap-y-9">
            <SectionTitle title="Contact" />
            <p className="text-center text-base-50">
              I&apos;m currently open to new opportunities, My inbox is open. If
              you have a question or just want to say hi, I&apos;ll try my best
              to get back to you!
            </p>
            <Button rounded={true} className="self-center bg-green">
              Say Hello
            </Button>
            <p className="text-center text-base-50">
              If email isn&apos;t your style you can add or follow me on my
              socials below!
            </p>
            <Image src={arrows} alt="arrows" className="self-center" />
          </div>
        </section>
      </Layout>
    </div>
  );
}
