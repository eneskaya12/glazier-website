import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import AboutProduct from "../components/AboutProduct";
import { useEffect } from "react";

function AboutProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Topbar />
      <AboutProduct />
      <Footer />
    </div>
  );
}

export default AboutProductPage;
