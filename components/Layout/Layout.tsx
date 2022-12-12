import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
