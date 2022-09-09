import { Container, Logo, Nav, ProjectCard, Section, SectionTitle, StatCard, SubTitle, Text, ChevronUp } from "./components";
import { links, projects, githubStats, technologies } from "./constants";
import resume from './assets/resume.pdf';

const App = () => {

  const projectCards = projects.map(project => <ProjectCard project={project} />);

  const stats = [
    { title: 'Total Stars Earned:', value: githubStats.stars },
    { title: 'Total Commits (2022):', value: githubStats.commits },
    { title: 'Total PRs:', value: githubStats.prs },
    { title: 'Total Issues:', value: githubStats.issues },
    { title: 'Contributed To:', value: githubStats.contributed },
  ].map(stat => <StatCard title={stat.title} value={stat.value} />);

  const technologyCards = technologies.map((tech, index) => {
    const colorClasses = [
      'transition-colors text-frontend hover:text-frontend-light',
      'transition-colors text-backend hover:text-backend-light',
      'transition-colors text-workflow hover:text-workflow-light',
    ];
    return (
      <div className="flex flex-col items-center max-w-xs w-full min-w-[288px] text-center">
        <h4 className="flex items-center pb-2 mb-4 text-3xl border-b-2 border-b-bg-light-200 gap-x-4">
          {tech.title}
          <div className={`h-6 ${colorClasses[index] || ''}`}>{tech.icon}</div>
        </h4>
        <ul className="grid w-full grid-cols-3 gap-y-2">
          {
            tech.stack.map(item => (
              <li className={`${colorClasses[index] || ''}`}>{item}</li>
            ))
          }
        </ul>
      </div>
    );
  });

  const contactInfo = [
    { href: links.linkedin, content: 'in/dominik-kulak', title: 'LinkedIn' },
    { href: links.email, content: 'dominik.ilja.developer@gmail.com', title: 'Email' }
  ].map(item => (
    <div className="text-center md:text-left">
      <SubTitle>{item.title}</SubTitle>
      <a className="hover:text-primary-light"
        href={item.href}>
        {item.content}
      </a>
    </div>
  ));

  return (
    <div className="min-h-screen bg-bg font-space">
      <header className="py-4 border-b border-b-bg-light-200">
        <Container className="flex flex-col items-center justify-between md:flex-row">
          <a href={links.home} className="mb-2">
            <Logo className="w-24" />
          </a>
          <Nav />
        </Container>
      </header>

      <main className="text-white">
        {/* Intro */}
        {/* bg-center bg-no-repeat bg-cover bg-intro */}
        <section className="py-16 min-h-[500px] bg-intro-mobile sm:bg-intro-tablet lg:bg-intro-desktop bg-center bg-no-repeat bg-cover" id='home'>
          <Container className="flex flex-col gap-y-2.5">
            <div>
              <h1 className="text-5xl font-medium leading-none sm:text-6xl md:text-7xl lg:text-8xl">
                Dominik <span className="text-primary">Ilja</span>
              </h1>
              <h2 className="text-xl text-text sm:text-2xl md:text-3xl">Software Developer</h2>
            </div>
            <Text>
              I love creating beautiful things and bringing visions to life.
            </Text>
            <a className="px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-light transition-colors max-w-fit"
              href={resume} download={true}>
              Download Resume
            </a>
          </Container>
        </section>

        {/* Projects */}
        <Section className="bg-bg-light" id='projects'>
          <SectionTitle className="md:self-start">Projects</SectionTitle>
          <div className="grid grid-cols-1 gap-12 md:gap-6 md:grid-cols-2">
            {projectCards}
          </div>
        </Section>

        {/* About */}
        <Section className="bg-right-top bg-no-repeat md:bg-about-rings" id='about'>
          <SectionTitle className="md:self-start">About</SectionTitle>
          <Text className="text-center md:text-left">
            I began my journey by building a website with Wordpress to host my guitar lessons. I then moved to the big three: HTML, CSS, and JavaScript. I then moved to building websites and web applications with these technologies. I’ve fallen in love with learning all the details of computers, design, and software development. I’m currently contributing to Figma, open source projects through GitHub, and looking to build desktop applications with Electron.
          </Text>
          <div className="w-full">
            <SubTitle className="mb-6 text-center">GitHub Stats</SubTitle>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-5">
              {stats}
            </div>
          </div>
          <div className="w-full">
            <SubTitle className="mb-6 text-center">Technologies</SubTitle>
            <div className="grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 lg:grid-cols-3">
              {technologyCards}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section className="bg-bg-light" id="contact">
          <SectionTitle className="md:self-start">Contact</SectionTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:self-start md:justify-items-start">
            {contactInfo}
          </div>
        </Section>
      </main>

      <button className="fixed h-8 w-8 bg-bg border-2 border-black p-1 rounded-full bottom-[16px] right-[16px] text-text hover:text-primary-light-100 transition-colors focus:text-primary-light-100"
        onClick={() => window.scrollTo(0, 0)}
      >
        <ChevronUp />
      </button>
    </div>
  );
};

export default App;
