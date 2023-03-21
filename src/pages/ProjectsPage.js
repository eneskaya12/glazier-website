import Topbar from "../components/Topbar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { useEffect } from "react";

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Topbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default ProjectsPage;
