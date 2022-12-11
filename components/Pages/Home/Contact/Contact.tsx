import Image from "next/image";
import Button from "../../../Utilities/Button/Button";
import SectionTitle from "../../../Utilities/SectionTitle/SectionTitle";
import arrows from "../../../../public/arrows.svg";

const Contact = () => {
  return (
    <section className="pt-16 pb-4">
      <div className="container flex flex-col px-3 mx-auto gap-y-9">
        <SectionTitle title="Contact" />
        <p className="text-center text-base-50">
          I&apos;m currently open to new opportunities, My inbox is open. If you
          have a question or just want to say hi, I&apos;ll try my best to get
          back to you!
        </p>
        <Button rounded={true} className="self-center bg-green">
          Say Hello
        </Button>
        <p className="text-center text-base-50">
          If email isn&apos;t your style you can add or follow me on my socials
          below!
        </p>
        <Image src={arrows} alt="arrows" className="self-center" />
      </div>
    </section>
  );
};

export default Contact;
