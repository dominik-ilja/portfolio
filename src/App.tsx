import { Container, Logo, Nav } from "./components";
import { links } from "./constants";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <header className="py-4">
        <Container className="flex flex-col items-center justify-between">
          <a href={links.home} className="mb-2">
            <Logo className="w-24" />
          </a>
          <Nav />
        </Container>
      </header>

      <main className="text-white bg-black">
        <section className="" id='home'>Intro</section>
        <section className="h-screen " id='projects'>Projects</section>
        <section className="h-screen " id='about'>About</section>
        <section className="h-screen " id='contact'>Contact</section>
      </main>
    </div>
  );
};

export default App;
