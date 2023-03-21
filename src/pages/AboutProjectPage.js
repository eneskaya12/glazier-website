import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import AboutProject from "../components/AboutProject";
import { useEffect } from "react";

function AboutProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Topbar />
      <AboutProject />
      <Footer />
    </div>
  );
}

export default AboutProjectPage;
