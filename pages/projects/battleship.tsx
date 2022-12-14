import Container from "../../components/Container/Container";
import Layout from "../../components/Layout/Layout";
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import SectionTitle from "../../components/Utilities/Titles/SectionTitle/SectionTitle";
import Text from "../../components/Utilities/Text/Text";
import thumbnail from "../../public/projects/battleship/thumbnail.png";

const Battleship = () => {
  return (
    <Layout>
      <Container>
        <ProjectIntro
          title="Battleship"
          thumbnail={thumbnail}
          codeLink="https://github.com/Dominik-Ilja/battleship"
          viewLink="https://battleship-ilja.netlify.app/"
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

export default Battleship;
