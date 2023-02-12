import Container from "../../components/Container/Container";
import Layout from "../../components/Layout/Layout";
import List from "../../components/List/List";
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import TechnologyGrid from "../../components/TechnologyGrid/TechnologyGrid";
import Bold from "../../components/Utilities/Bold/Bold";
import Code from "../../components/Utilities/Code/Code";
import Link from "../../components/Utilities/Link/Link";
import SectionTitle from "../../components/Utilities/Titles/SectionTitle/SectionTitle";
import Text from "../../components/Utilities/Text/Text";
import thumbnail from "../../public/projects/poke_finder/thumbnail.png";
import SubTitle from "../../components/Utilities/Titles/SubTitle/SubTitle";

const PokeFinder = () => {
  const technologies = [
    { name: "Axios", type: "frontend" },
    { name: "CSS", type: "frontend" },
    { name: "HTML", type: "frontend" },
    { name: "JavaScript", type: "frontend" },
    { name: "React", type: "frontend" },
    { name: "React Router", type: "frontend" },
    { name: "TailwindCSS", type: "frontend" },
    { name: "Poke API", type: "backend" },
    { name: "Figma", type: "workflow" },
    { name: "Git", type: "workflow" },
    { name: "GitHub", type: "workflow" },
  ];

  return (
    <Layout>
      <Container>
        <ProjectIntro
          title="Poke Finder"
          thumbnail={thumbnail}
          codeLink="https://github.com/dominik-ilja/poke-finder"
          viewLink="https://poke-finder-ilja.netlify.app/"
        >
          <Text>
            Poke Finder allows you to search for any of the 905 available
            Pokemon! This is done by accessing Pokemon information available
            through the free to use Poke API! You&apos;ll be able to see any of
            your favorite Pokemon in our beautiful light or dark modes.
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
              The main inspiration for this site was{" "}
              <Link href="https://www.serebii.net/">Serebii</Link> and{" "}
              <Link href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">
                Bulbapedia
              </Link>
              . I wanted to create something similar to them. When looking
              through free APIs, I came across the <Bold>Poke API</Bold>. After
              reading its documentation and getting a better idea of how the API
              worked, I knew this API was perfect for this form of application.
            </Text>
          </ProjectSection>

          <ProjectSection>
            <SectionTitle>Design</SectionTitle>
            <Text>
              The hardest part of any application is knowing where you want to
              go. I started figuring this out by taking inspiration from
              Serebii. I used this to start my design process. I start from the
              mobile view and building up to desktop. This allows me to add in
              more content as the screen gets bigger. From the start, I wanted
              to have light and dark mode for the site. I used{" "}
              <Bold>TailwindCSS</Bold> for styling and they make it easy to do
              this.
            </Text>
            <Text>
              In tailwind, you have a configuration file. In the configuration,
              you can set the property <Code>darkMode</Code> to
              <Code>&quot;class&quot;</Code>. What this does is activate dark
              mode by putting a class of <Code>dark</Code> on the body. A toggle
              component is all that was needed to add or take away the dark
              mode.
            </Text>
          </ProjectSection>
          <ProjectSection>
            <SectionTitle>Pokedex Page</SectionTitle>
            <Text>
              The <Bold>pokedex</Bold> page is the most complex of the pages on
              the site. It uses two types of filtering to display the data you
              want. You can filter by a Pokemon&apos;s name or by its type. Each
              type of filtering can work alone or be used in conjunction with
              the other.When you find the pokemon you want to know more about,
              just click on its row and you&apos;ll be taken to its page.
            </Text>
          </ProjectSection>
          <ProjectSection>
            <SectionTitle>Pokemon Page</SectionTitle>
            <Text>
              Every Pokemon page is dynamically generated. This was done by
              using <Bold>React Router</Bold>. When the rows on the pokedex page
              are created, the link points to a page associated with their id.
              React Router provides a <Bold>hook</Bold> called{" "}
              <Code>useParams()</Code>. We are able to pull this id from the URL
              and make a request to the API.
            </Text>
            <SubTitle>Challenges</SubTitle>
            <Text>
              There were a lot of <Bold>challenges</Bold> that went into getting
              the data I needed.
            </Text>
            <List>
              <li>
                Follow up requests to get information about evolutions were
                needed.
              </li>
              <li>
                Some evolutions had branching paths that needed accounted for.
              </li>
              <li>
                Sometimes flavor text (descriptions) of pokemon wouldn&apos;t be
                in English, despite basically every other entry being English at
                the same index.
              </li>
            </List>
            <Text>
              Once having the data, I wasn&apos;t out of the woods yet. The data
              that was extracted needed to be formatted properly. Some of the
              data that need formatted was:
            </Text>
            <List>
              <li>
                Dex numbers could go up to triple digits. So, one or two digit
                numbers needed zeros pre-pended to them. A hash <Code>#</Code>{" "}
                also needed to be pre-pended after the zeros were added.
              </li>
              <li>
                Weight and height needed to be divided by 10 and rounded to one
                decimal place to accurately reflect the stats.
              </li>
              <li>
                A pokemon&apos;s stats like special defense would be received AS{" "}
                <Code>special-defense</Code>. This needed to be converted to{" "}
                <Code>SP. DEF</Code>.
              </li>
              <li>
                Some data would have a hyphen <Code>-</Code> between words. The
                hyphens needed to be replaced with spaces.
              </li>
            </List>
          </ProjectSection>
          <ProjectSection>
            <SectionTitle>Future Updates</SectionTitle>
            <List>
              <li>Additional Information and interconnected pages</li>
              <li>
                Replace <Code>Create React App</Code> with <Code>Next.js</Code>
              </li>
              <li>Update UI</li>
              <li>Update state management</li>
            </List>
          </ProjectSection>
        </ProjectContainer>
      </Container>
    </Layout>
  );
};

export default PokeFinder;
