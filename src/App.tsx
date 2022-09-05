import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Logo, Nav, ProjectCard, Section, SectionTitle, SubTitle, Text } from "./components";
import { links, projects } from "./constants";

type Stat = {
  title: string;
  value: string | number;
};

const App = () => {
  const [stats, setStats] = useState<[] | Stat[]>([]);

  useEffect(() => {
    async function getStats() {
      const res = await axios.get('');
      console.log(res);
    }
    getStats();
  }, []);

  return (
    <div className="min-h-screen bg-bg font-space">
      <header className="py-4 border-b border-b-text-dark">
        <Container className="flex flex-col items-center justify-between">
          <a href={links.home} className="mb-2">
            <Logo className="w-24" />
          </a>
          <Nav />
        </Container>
      </header>

      <main className="text-white">
        {/* bg-center bg-no-repeat bg-cover bg-intro */}
        <section className="py-16" id='home'>
          <Container className="flex flex-col gap-y-2.5">
            <div>
              <h1 className="text-5xl font-medium leading-none">
                Dominik <span className="text-primary">Ilja</span>
              </h1>
              <h2 className="text-xl text-text">Software Developer</h2>
            </div>
            <Text>
              I love creating beautiful things and bringing visions to life.
            </Text>
            <button className="px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-light transition-colors max-w-fit">View Resume</button>
          </Container>
        </section>
        <Section className="bg-bg-light" id='projects'>
          <SectionTitle>Projects</SectionTitle>
          {projects.map(project => <ProjectCard project={project} />)}
        </Section>
        <Section id='about'>
          <SectionTitle>About</SectionTitle>
          <Text className="text-center">
            I began my journey by building a website with Wordpress to host my guitar lessons. I then moved to the big three: HTML, CSS, and JavaScript. I then moved to building websites and web applications with these technologies. I’ve fallen in love with learning all the details of computers, design, and software development. I’m currently contributing to Figma, open source projects through GitHub, and looking to build desktop applications with Electron.
          </Text>
          <div>
            <SubTitle>GitHub Stats</SubTitle>
            <img src="https://github-readme-stats.vercel.app/api?username=Dominik-Ilja&count_private=true" alt="" />
          </div>
        </Section>
        <Section className="bg-bg-light" id="contact">
          <SectionTitle>Contact</SectionTitle>
        </Section>
      </main>
    </div>
  );
};

export default App;
