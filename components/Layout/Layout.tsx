import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
