import Container from "../../components/Container/Container";
import Layout from "../../components/Layout/Layout";
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import TechnologyGrid from "../../components/TechnologyGrid/TechnologyGrid";
import Bold from "../../components/Utilities/Bold/Bold";
import Code from "../../components/Utilities/Code/Code";
import SectionTitle from "../../components/Utilities/SectionTitle/SectionTitle";
import Text from "../../components/Utilities/Text/Text";
import thumbnail from "../../public/projects/time_tracker/thumbnail.png";
import erd_diagram from "../../public/projects/time_tracker/erd_diagram.svg";
import Image from "next/image";
import Link from "../../components/Utilities/Link/Link";

const TimeTracker = () => {
  const technologies = [
    { name: "Axios", type: "frontend" },
    { name: "React", type: "frontend" },
    { name: "React Router", type: "frontend" },
    { name: "Tailwind", type: "frontend" },
    { name: "TypeScript", type: "frontend" },
    { name: "Express", type: "backend" },
    { name: "Heroku", type: "backend" },
    { name: "MySQL", type: "backend" },
    { name: "Node", type: "backend" },
    { name: "Figma", type: "workflow" },
    { name: "Git", type: "workflow" },
    { name: "GitHub", type: "workflow" },
    { name: "Heroku", type: "workflow" },
    { name: "Netlify", type: "workflow" },
  ];

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
            <SectionTitle>Heads Up</SectionTitle>
            <Text>
              Currently the project is down because of Heroku&apos;s service
              update. I&apos;ll be reploying through{" "}
              <Link href="https://render.com/">render</Link>.
            </Text>
          </ProjectSection>
          <ProjectSection>
            <SectionTitle>Technologies</SectionTitle>
            <TechnologyGrid technologies={technologies} />
          </ProjectSection>

          <ProjectSection>
            <SectionTitle>Intro</SectionTitle>
            <Text>
              I wanted to develop the backend first when starting this project.
              I used <Code>Express</Code> for the server and <Code>MySQL</Code>{" "}
              for the database. My primary way of development up to this point
              was using Heroku. I had to do some digging since MySQL didn&apos;t
              have a service like MongoDB for hosting the database on the cloud.
            </Text>
            <Text>
              I learned that Heroku had an add-on called{" "}
              <Bold>ClearDB MySQL</Bold> which could store my data. This was my
              solution to getting storage for my database. I could now move onto{" "}
              <Bold>Entity Relationship Diagrams</Bold>. Planning how your data
              is related is essential.
            </Text>
          </ProjectSection>

          <ProjectSection>
            <SectionTitle>ER Diagrams</SectionTitle>
            <Text>
              When tracking time there were two main components, the category
              that time was going into and the capturing of time itself. For
              example, when I track time I have a category for{" "}
              <Bold>Coding</Bold> and <Bold>Work</Bold>. I then add time to the
              relevant category. This process I wanted to model.
            </Text>
            <Image src={erd_diagram} alt="Entity relationship diagram" />
            <Text>
              As shown in the diagram, we have a table for categories and logs.
              The categories have a <Bold>one-to-many</Bold> relationship with
              the logs. This mean that each category can have multiple logs, but
              each log can have a reference to only one category. This was
              enough to get started on implementing the server.
            </Text>
          </ProjectSection>

          <ProjectSection>
            <SectionTitle>Server</SectionTitle>
            <Text>
              Express was set to listen for requests. My code was separated into
              three parts: <Code>app</Code>, <Code>routes</Code>, and{" "}
              <Code>controllers</Code>. The app was the main express
              application. We added all of our middlewares inside of this file.
              The routes file setup what routes we&apos;d be using. Controllers
              contained the code to control what would happen when a specific
              route is requested. It&apos;s main function was to interact with
              the database.
            </Text>
            <Text>
              To interact with the database I installed a package called{" "}
              <Code>mysql</Code>. I could write out the SQL queries now. With
              this power, I created CRUD operations for categories and logs. A
              user could create, read, update, and delete categories and logs.
            </Text>
          </ProjectSection>

          <ProjectSection>
            <SectionTitle>Client</SectionTitle>
            <Text>
              On the client side, I used <Code>React</Code> with{" "}
              <Code>TypeScript</Code> and <Code>React Router</Code> for routing.
              The main problem to solve on the client was giving properly
              formatted data to the server. MySQL has a particular format for
              dates and without this formatting dates won&apos;t be stored
              properly.
            </Text>
            <Text>
              I created inputs in order to validate everything that the user was
              giving me. This was done on two fronts through HTML validation and
              JavaScript validation. This validation made sure that the
              everything from year to seconds was within the valid range. Even
              leap years are validated!
            </Text>
            <Text>
              The log would be sent to the database and the frontend would be
              updated when the data was captured. This was all done for manual
              log creation though. The othe form of log creation was running the
              timer on the main page. When you hit the submit button, your time
              will be added as a log to the category that you choose.
            </Text>
          </ProjectSection>

          <ProjectSection>
            <SectionTitle>Deployment</SectionTitle>
            <Text>
              When deploying the application this process went pretty smoothly.
              As soon as the server was ready I deployed it. I just had to
              ensure that <Code>CORS</Code> headers were set. The backend was
              deployed to <Code>Heroku</Code> and the frontend to{" "}
              <Code>Netlify</Code>.
            </Text>
          </ProjectSection>
        </ProjectContainer>
      </Container>
    </Layout>
  );
};

export default TimeTracker;
