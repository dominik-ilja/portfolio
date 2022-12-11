import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Showcase from "../components/Pages/Home/Showcase/Showcase";
import Projects from "../components/Pages/Home/Projects/Projects";
import About from "../components/Pages/Home/About/About";
import Contact from "../components/Pages/Home/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio - Dominik Ilja</title>
        <meta name="description" content="Portfolio website of Dominik Ilja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Showcase />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </div>
  );
}
