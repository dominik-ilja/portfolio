import Container from "../../components/Container/Container";
import Layout from "../../components/Layout/Layout";
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import SectionTitle from "../../components/Utilities/SectionTitle/SectionTitle";
import Text from "../../components/Utilities/Text/Text";
import thumbnail from "../../public/projects/poke_finder/thumbnail.png";

const PokeFinder = () => {
  return (
    <Layout>
      <Container>
        <ProjectIntro
          title="Poke Finder"
          thumbnail={thumbnail}
          codeLink="https://github.com/Dominik-Ilja/poke-finder"
          viewLink="https://poke-finder-ilja.netlify.app/"
        >
          <Text></Text>
        </ProjectIntro>
        <ProjectContainer>
          <ProjectSection>
            <SectionTitle>Intro</SectionTitle>
          </ProjectSection>
        </ProjectContainer>
      </Container>
    </Layout>
  );
};

export default PokeFinder;
