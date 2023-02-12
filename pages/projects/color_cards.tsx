import Image from "next/image";
import axios from "axios";
import Container from "../../components/Container/Container";
import Layout from "../../components/Layout/Layout";
import SectionTitle from "../../components/Utilities/Titles/SectionTitle/SectionTitle";
import TechnologyGrid from "../../components/TechnologyGrid/TechnologyGrid";
import Code from "../../components/Utilities/Code/Code";
import Bold from "../../components/Utilities/Bold/Bold";
import Link from "../../components/Utilities/Link/Link";
import image_thumbnail from "../../public/projects/color_cards/thumbnail.png";
import image_setup_plugin from "../../public/projects/color_cards/setup_plugin.png";
import image_ui from "../../public/projects/color_cards/ui.png";
import image_color_api from "../../public/projects/color_cards/color_api.png";
import image_cards from "../../public/projects/color_cards/cards.png";
import image_application from "../../public/projects/color_cards/application.gif";
import StatCard from "../../components/Cards/StatCard/StatCard";
import Text from "../../components/Utilities/Text/Text";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";

type Props = {
  stats: StatObject[];
};

const ColorCards = ({ stats }: Props) => {
  const technologies = [
    { name: "CSS", type: "frontend" },
    { name: "HTML", type: "frontend" },
    { name: "JavaScript", type: "frontend" },
    { name: "TypeScript", type: "frontend" },
    { name: "Axios", type: "backend" },
    { name: "Color API", type: "backend" },
    { name: "Figma API", type: "backend" },
    { name: "Figma", type: "workflow" },
    { name: "Git", type: "workflow" },
    { name: "GitHub", type: "workflow" },
  ];

  return (
    <Layout>
      <Container>
        <ProjectIntro
          title="Color Cards"
          thumbnail={image_thumbnail}
          codeLink="https://github.com/dominik-ilja/color-cards"
          viewLink="https://www.figma.com/community/plugin/1127675179361433108"
        >
          <Text>
            My first Figma plugin. Inspired by{" "}
            <Link href="https://www.figma.com/community/file/1000656797444667092">
              Pantone Color Cards by Kaci
            </Link>{" "}
            on Figma. I wanted to create a system that would allow for quick
            creation of her card design. Repeating the same steps over and over
            is a good indicator it&apos;s time to automate!
          </Text>
        </ProjectIntro>
        <ProjectContainer>
          <ProjectSection>
            <SectionTitle>Stats</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((data) => (
                <StatCard key={data.stat} data={data} />
              ))}
            </div>
          </ProjectSection>

          <ProjectSection>
            <SectionTitle>Technologies</SectionTitle>
            <TechnologyGrid technologies={technologies} />
          </ProjectSection>

          <ProjectSection>
            <SectionTitle title="Setup" />
            <Text>
              Since this was my first plugin I looked for{" "}
              <Link href="https://www.youtube.com/watch?v=pFGhMr6rDhc&t=3834s">
                resources
              </Link>{" "}
              on how the process went. In the Figma app there&apos;s a section
              to create a plugin. When creating a plugin for Figma we&apos;re
              given a couple of options for templates. We went with option three
              since it seemed to cover what we needed the most.
            </Text>
            <Image src={image_setup_plugin} alt="plugin choices" />
            <Text>
              With the project files created, what I needed to figure out was
              how to run the plugin. I learned that when you create your plugin
              Figma creates a reference to the created files. Allowing you to
              run your project files from where it is on your computer.
            </Text>
            <Text>
              With that done, it was time for the UI. I added a CSS file and
              linked it to the HTML. I setup the general outline of the plugin
              and added in CSS for styling. I quickly found out that CSS can not
              be linked to your Figma plugin. After doing some{" "}
              <Link href="https://forum.figma.com/t/linking-css-to-ui-html/5347">
                reading
              </Link>
              , I learned that the plugin only loads files inside of the{" "}
              <Code>manifest.json</Code>. This was one of the files given to us
              when we created the plugin template. This means any CSS or
              JavaScript related to the UI should be written inside of the HTML
              file.
            </Text>
          </ProjectSection>

          <ProjectSection>
            <SectionTitle title="User Interface" />
            <Text>Our result so far was:</Text>
            <Image src={image_ui} alt="plugin ui" />
            <Text>
              I created event listeners to keep the value controlled within
              JavaScript. Other listeners were attached to the{" "}
              <Bold>Cancel</Bold> and <Bold>Create Card</Bold> buttons. If a
              user clicked on one of these buttons it would send a message to
              the API. Either closing the plugin or creating the card.
            </Text>
            <Image src={image_color_api} alt="color api homepage" />
            <Text>
              Another option given was to use the <Bold>Color API</Bold>. If
              this is checked the generated card will have a name that is pulled
              from this API. I made sure to first check that the user has a
              valid color name. If this was good, we cut off the <Code>#</Code>{" "}
              from the hex code and send it to the API. We add the API&apos;s
              custom name to the message we send to Figma&apos;s API.
            </Text>
            <Text>
              With the UI finished we can now focus on generating cards like
              these:
            </Text>
            <Image src={image_cards} alt="color cards example" />
          </ProjectSection>

          <ProjectSection>
            <SectionTitle title="Figma API Code" />
            <Text>
              Our first task was to pick up the messages sent from the UI inside
              of the plugin code. After picking up the data from the user, we
              could start the card creation process. There&apos;s a couple of
              things that&apos;ll happen:
            </Text>
            <ol className="ml-4 list-decimal sm:text-lg">
              <li>
                Initialize color code values for <Code>HEX</Code>,{" "}
                <Code>RGB</Code>, and <Code>HSL</Code>
              </li>
              <li>Generate the card pieces</li>
              <li>Combine the card pieces</li>
              <li>Add the card to Figma</li>
              <li>Alert user that the card is created</li>
            </ol>
            <h2 className="text-2xl text-center text-white">
              Initializing color codes
            </h2>
            <Text>
              We initialize multiple color codes because these codes get added
              to the cards. The main problem with this was converting the values
              from <Code>HEX</Code> to <Code>RGB</Code> and <Code>HSL</Code>.
              This was a problem that has been solved before so I was able to
              find resources on how to do the conversion.
            </Text>
            <h2 className="text-2xl text-center text-white">
              Building the cards
            </h2>
            <Text>
              To build the cards, I took a look at a design I had already built
              in Figma. I had to read a lot of documentation to find the parts
              of the Figma API I needed to interact with. The most difficult
              piece of the API was <Code>figma.loadFontAsync</Code>. There
              seemed to be an issue that not only did I have to{" "}
              <Code>await</Code> this function call, but also function calls to
              any element that was using the loaded font.
            </Text>
            <Text>
              I solved this issue by awaiting <Code>Promise.All</Code>. Each
              element that used the custom font was assured to be loaded before
              moving on, thanks to this. Everything else went smoothly. It was
              just create the element and add the configuration to it.
            </Text>
            <Text>
              Once the pieces were made, the API had methods to combine the
              pieces. This process did have to be done in a specific order or
              the card would break. Lastly, with a{" "}
              <Code>frame.appendChild</Code> the card was finished and usable.
            </Text>
          </ProjectSection>

          <ProjectSection>
            <SectionTitle title="Publishing" />
            <Text>
              The code was complete, but there was one last step, publishing. To
              publish your plugin you needed to fill out the application and get
              accepted. The standout points where:
            </Text>
            <ol className="ml-4 list-decimal sm:text-lg">
              <li>Creating an icon</li>
              <li>Creating cover art</li>
              <li>Documentation</li>
            </ol>
            <Image
              src={image_application}
              alt="figma application"
              className="mx-auto"
            />
            <Text>
              My plugin was accepted in about a day, and has gone through an
              update to allow different card sizes. A future update will allow a
              user to place cards into a group.
            </Text>
          </ProjectSection>
        </ProjectContainer>
      </Container>
    </Layout>
  );
};

// TODO:
export async function getStaticProps() {
  try {
    const res = await axios.get(
      "https://figma-plugin-stats.onrender.com/api/most_recent"
    );
    const [stats] = res.data;

    return {
      props: {
        stats: [
          {
            stat: "Views",
            value: stats.views,
          },
          {
            stat: "Users",
            value: stats.users,
          },
          {
            stat: "Likes",
            value: stats.comments,
          },
          {
            stat: "Comments",
            value: stats.comments,
          },
        ],
      },
    };
  } catch (e) {
    return {
      props: {
        stats: [],
      },
    };
  }
}

export default ColorCards;
