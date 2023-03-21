import { useEffect, useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
import Header from "../components/Header";
import Products from "../components/Products";
import Projects from "../components/Projects";
import Topbar from "../components/Topbar";

function Home() {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="bg-custom-black">
    {sticky && <GoTop />}
      <Topbar />
      <Header />
      <About />
      <Products />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
