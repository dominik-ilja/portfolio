import { Container } from '../';

type Props = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

const Section = (props: Props) => {
  return (
    <section className={`py-16 ${props.className || ''}`} id={props.id}>
      <Container className="flex flex-col items-center gap-y-12">
        {props.children}
      </Container>
    </section>
  );
};

export default Section;
