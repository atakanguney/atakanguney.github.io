import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

import "./main-content.scss"

const Page = () => {
  return (
    <main className="yb-main-content">
      <About />
      <Blog />
      <Contact />
      <Portfolio />
      <Resume />
    </main>
  );
};

export default Page;
