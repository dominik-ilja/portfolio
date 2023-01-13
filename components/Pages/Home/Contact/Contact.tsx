import Image from "next/image";
import Button from "../../../Utilities/Button/Button";
import SectionTitle from "../../../Utilities/Titles/SectionTitle/SectionTitle";
import arrows from "../../../../public/arrows.svg";
import Text from "../../../Utilities/Text/Text";
import Bold from "../../../Utilities/Bold/Bold";
import Section from "../../../Utilities/Section/Section";
import Container from "../../../Container/Container";

const Contact = () => {
  return (
    <Section id="contact" className="pb-4">
      <Container className="flex flex-col mb-8 gap-y-9">
        <SectionTitle title="Contact" />
        <Text className="max-w-xl mx-auto">
          I&apos;m currently open to new opportunities, My inbox is open. If you
          have a question or just want to <Bold>say hello</Bold>, I&apos;ll try
          my best to get back to you!{" "}
          <span className="lg:hidden">
            {" "}
            If email isn&apos;t your style you can add or follow me on my
            socials below!
          </span>
        </Text>
        <Button
          externalLink="mailto:dominik.ilja.work@gmail.com"
          rounded={true}
          className="self-center bg-green"
        >
          Say Hello
        </Button>
        <Image src={arrows} alt="arrows" className="self-center lg:hidden" />
      </Container>
    </Section>
  );
};

export default Contact;
