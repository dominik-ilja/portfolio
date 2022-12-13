import Container from "../../components/Container/Container";
import Layout from "../../components/Layout/Layout";
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import Bold from "../../components/Utilities/Bold/Bold";
import SectionTitle from "../../components/Utilities/SectionTitle/SectionTitle";
import Text from "../../components/Utilities/Text/Text";
import thumbnail from "../../public/projects/time_tracker/thumbnail.png";

const TimeTracker = () => {
  return (
    <Layout>
      <Container>
        <ProjectIntro
          title="Time Tracker"
          thumbnail={thumbnail}
          codeLink="https://github.com/Dominik-Ilja/time-tracker"
          viewLink="https://timer-tracker-ilja.netlify.app/"
        >
          <Text>
            Every single day I track the hours that I put into coding and other
            activities. These logs are then put into Google Sheets. Sheets
            started to become very slow and this was a great opportunity to
            create my own <Bold>Time Tracker</Bold>!
          </Text>
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

export default TimeTracker;
