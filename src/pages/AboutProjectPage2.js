import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import AboutProject2 from "../components/AboutProject2";
import { useEffect } from "react";

function AboutProjectPage2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Topbar />
      <AboutProject2 />
      <Footer />
    </div>
  );
}

export default AboutProjectPage2;
