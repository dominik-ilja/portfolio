import Container from "../../components/Container/Container";
import Layout from "../../components/Layout/Layout";
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import SectionTitle from "../../components/Utilities/Titles/SectionTitle/SectionTitle";
import Text from "../../components/Utilities/Text/Text";
import thumbnail from "../../public/projects/battleship/thumbnail.png";
import TechnologyGrid from "../../components/TechnologyGrid/TechnologyGrid";
import List from "../../components/List/List";
import Code from "../../components/Utilities/Code/Code";
import SubTitle from "../../components/Utilities/Titles/SubTitle/SubTitle";
import Bold from "../../components/Utilities/Bold/Bold";
import Link from "../../components/Utilities/Link/Link";

const Battleship = () => {
  const technologies = [
    { name: "CSS", type: "frontend" },
    { name: "HTML", type: "frontend" },
    { name: "JavaScript", type: "frontend" },
    { name: "SCSS", type: "frontend" },
    { name: "Figma", type: "workflow" },
    { name: "Git", type: "workflow" },
    { name: "GitHub", type: "workflow" },
  ];

  return (
    <Layout>
      <Container>
        <ProjectIntro
          title="Battleship"
          thumbnail={thumbnail}
          codeLink="https://github.com/dominik-ilja/battleship"
          viewLink="https://battleship-ilja.netlify.app/"
        >
          <Text>
            User plays against an Ai in this interactable web app. Users can
            drag and drop their game pieces into the grid. The app detects if
            the user input is valid, when to begin the game, when a user has
            made a move, and when someone has won the game.
          </Text>
        </ProjectIntro>
        <ProjectContainer>
          <ProjectSection>
            <SectionTitle>Technologies</SectionTitle>
            <TechnologyGrid technologies={technologies} />
          </ProjectSection>

          <ProjectSection>
            <SectionTitle>Intro</SectionTitle>
            <Text>
              I always wanted to make a version of Battleship, so I did! This
              was done completely in vanilla JavaScript. This opened up some
              concepts that I never knew about.
            </Text>
          </ProjectSection>
          <ProjectSection>
            <SectionTitle>Design</SectionTitle>
            <SubTitle>Board & Grid</SubTitle>
            <Text>
              The approach that I took in this project was to first create the
              HTML and CSS. Having the game pieces made would make creating the
              elements in JavaScript later a lot easier. There were a couple of
              things I knew I wanted to do right away:
            </Text>
            <List>
              <li>Illusion of water moving underneath the game tiles</li>
              <li>Make the game tiles look like foam</li>
            </List>
            <Text>
              To make it seem like water was moving, I made a gradient for the
              background. The background had lighter parts and some contrasting
              colors to resemble the sun reflecting off the water. For the
              actual moving water part, I animated the positioning of the
              background to move. It took some fine tuning, but gave a real
              subtle effect once it was done. Who would&apos;ve thought, it
              really seemed like there was water moving!
            </Text>
            <Text>
              As for the tiles, I choose to use a transparent white to allow the
              gradient to seep through. Using <Code>CSS Grid</Code> made the
              formatting of the tiles very simple.
            </Text>
            <SubTitle>Ships</SubTitle>
            <Text>
              Creating the ships took advantage of the grid. Since a patrol boat
              was two long, we could have it span two grid columns or rows. This
              idea could then be applied to every ship variant. I then used
              another grid for the ship itself. This grid allowed me to space
              out the &quot;pegs&quot; evenly. Later on I would add a{" "}
              <Bold>hitbox</Bold> to sit on top of each ship. More on that
              later.
            </Text>
            <Text>
              To display the user&apos;s ships, I created an area below the
              gameboards for them. This also contained buttons to rotate the
              ships and randomly place them.
            </Text>
          </ProjectSection>
          <ProjectSection>
            <SectionTitle>JavaScript</SectionTitle>
            <Text>
              I&apos;m not going to cover every detail because a lot went into
              this. Here are the main things I had to figure out:
            </Text>
            <List>
              <li>Grid detection</li>
              <li>Ship placement</li>
              <li>Game start and end detection</li>
              <li>Random ship placement</li>
              <li>AI tile choice</li>
              <li>Score</li>
              <li>Game replay</li>
            </List>

            <SubTitle>Grid Detection</SubTitle>
            <Text>
              The first obstacle was, &quot;How the heck can I get the tiles to
              detect a ship being placed on them?&quot; This led me to discover
              a particular set of JavaScript events: <Code>dragstart</Code>,{" "}
              <Code>dragend</Code>, <Code>dragover</Code>, and <Code>drop</Code>
              . We could add listeners to the cells for dragover and drop
              events.
            </Text>
            <Text>
              To allow a drop,{" "}
              <Link href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_feedback">
                I needed to prevent the default behavior of the dragover event
              </Link>
              . The events were setup and I could move onto the next step.
            </Text>

            <SubTitle>Ship Placement</SubTitle>
            <Text>
              We can start adding the ships to the board. The main problems at
              this stage were:
            </Text>
            <List>
              <li>Is the ship being placed out of the grid bounds</li>
              <li>Is there a ship where the user is trying to place</li>
              <li>How do we detect a vertical ship</li>
            </List>
            <Text>
              All cells were added to an array when creating the grid. We&apos;d
              use the index of the array to see if the move would be valid or
              not. When adding the ship, we&apos;d update the values within the
              array to match the HTML representation of the game. Now, all that
              needed to happen was if any cell the ship would take up was
              anything other than empty the move became invalid.
            </Text>

            <SubTitle>Game Start and End Detection</SubTitle>
            <Text>
              Each time a ship was placed a method would be triggered. Now, each
              ship has a property called <Code>placed</Code> on it. This method
              would check to see if every ship had been placed using this
              property. If every ship had been placed a custom{" "}
              <Code>shipsPlaced</Code> event would be triggered.
            </Text>
            <Text>
              The window had an event listener attached to it that listened for
              this specific event. When triggered, the game would start. For the
              end of the game, every turn a check was run to see if all the
              ships on either side were sunk. If one set of ships were sunk the
              game would end.
            </Text>

            <SubTitle>Random Ship Placement</SubTitle>
            <Text>
              Instead of laying out the ships themselves, a user could opt to
              randomly place their ships. We try to place every ship a use rhas,
              but first we needed to make sure a user didn&apos;t already place
              the ship. Next, I generated a random number, either 0 or 1, to
              simulate a coin toss. The result determined if a ship was rotated
              or not.
            </Text>
            <Text>
              We then attempted to place the ship at randomly generated
              coordinates. I figured since the board was small it wouldn&apos;t
              be a bad idea to try and brute force it. Once the ship was placed,
              we&apos;d perform a check to see if that was the last ship that
              needed placed. If it was we&apos;d add the start game button.
            </Text>

            <SubTitle>AI tile choice</SubTitle>
            <Text>
              The AI would generate two random numbers within the grid range.
              This coordinate would then be checked. If the cell was empty or
              was an un-hit part of a ship, it&apos;d be updated. If the cell
              was already interacted with before another loop would happen.
              We&apos;d keep looping until it finally got a correct choice.
            </Text>

            <SubTitle>Score</SubTitle>
            <Text>
              Inside of a <Code>Game</Code> class, I kept track of the computer
              and player score. I also kept a reference to the HTML elements for
              the scores. When a winner was detected we updated the correct
              score then gave the new score to the HTML element.
            </Text>

            <SubTitle>Game Replay</SubTitle>
            <Text>
              After updating the score, a method runs that creates a prompt.
              This prompt has an event listener attached that resets the game.
              The game is reset by removing all the game elements and
              initializing the game properities over again.
            </Text>
          </ProjectSection>
          <ProjectSection>
            <SectionTitle>Future Updates</SectionTitle>
            <List>
              <li>Instructions on how to play</li>
              <li>Smarter AI</li>
              <li>Two Player</li>
            </List>
          </ProjectSection>
        </ProjectContainer>
      </Container>
    </Layout>
  );
};

export default Battleship;
