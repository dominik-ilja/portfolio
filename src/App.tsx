import { Container, Logo, Nav, ProjectCard, Section, SectionTitle, StatCard, SubTitle, Text, Palette } from "./components";
import { links, projects, githubStats, technologies } from "./constants";
console.log(Palette);


const App = () => {
  return (
    <div className="min-h-screen bg-bg font-space">
      <header className="py-4 border-b border-b-[#272727]">
        <Container className="flex flex-col items-center justify-between">
          <a href={links.home} className="mb-2">
            <Logo className="w-24" />
          </a>
          <Nav />
        </Container>
      </header>

      <main className="text-white">
        {/* Intro */}
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

        {/* Projects */}
        <Section className="bg-bg-light" id='projects'>
          <SectionTitle>Projects</SectionTitle>
          {projects.map(project => <ProjectCard project={project} />)}
        </Section>

        {/* About */}
        <Section id='about'>
          <SectionTitle>About</SectionTitle>
          <Text className="text-center">
            I began my journey by building a website with Wordpress to host my guitar lessons. I then moved to the big three: HTML, CSS, and JavaScript. I then moved to building websites and web applications with these technologies. I’ve fallen in love with learning all the details of computers, design, and software development. I’m currently contributing to Figma, open source projects through GitHub, and looking to build desktop applications with Electron.
          </Text>
          <div className="w-full">
            <SubTitle className="mb-6 text-center">GitHub Stats</SubTitle>
            <div className="flex flex-col w-full gap-y-3">
              {
                [
                  { title: 'Total Stars Earned:', value: githubStats.stars },
                  { title: 'Total Commits (2022):', value: githubStats.commits },
                  { title: 'Total PRs:', value: githubStats.prs },
                  { title: 'Total Issues:', value: githubStats.issues },
                  { title: 'Contributed To:', value: githubStats.contributed },
                ].map(stat => <StatCard title={stat.title} value={stat.value} />)
              }
            </div>
          </div>
          <div className="w-full">
            <SubTitle className="mb-6 text-center">Technologies</SubTitle>
            <div className="flex flex-col w-full gap-y-3">
              {
                technologies.map((tech, index) => {
                  const colorClasses = [
                    'text-[#1D667A] hover:text-[#61DAFB]',
                    'text-[#59338A] hover:text-[#6914D6]',
                    'text-[#94205E] hover:text-[#F82396]',
                  ];
                  return (
                    <div className="flex flex-col items-center text-center">
                      <h4 className="text-3xl border-b-2 border-b-[#313131] pb-2 mb-4">
                        <>
                          {tech.title}
                          {tech.icon}
                        </>
                      </h4>
                      <ul className="grid w-full grid-cols-3 gap-y-2">
                        {
                          tech.stack.map(item => (
                            <li className={`transition-colors ${colorClasses[index] || ''}`}>{item}</li>
                          ))
                        }
                      </ul>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section className="bg-bg-light" id="contact">
          <SectionTitle>Contact</SectionTitle>

          {
            [
              { href: links.linkedin, content: links.linkedin, title: 'LinkedIn' },
              { href: links.email, content: 'dominik.ilja.developer@gmail.com', title: 'Email' }
            ].map(item => (
              <div className="text-center">
                <SubTitle>{item.title}</SubTitle>
                <a className="hover:text-primary-light"
                  href={item.href}>
                  {item.content}
                </a>
              </div>
            ))
          }
        </Section>
      </main>
    </div>
  );
};

export default App;
