import { useEffect, useState } from "react";
import About from "../components/About";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
import Header from "../components/Header";
import Products from "../components/Products";
import Projects from "../components/Projects";
import Topbar from "../components/Topbar";
import Wplink from "../components/Wplink";

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
    <div className="bg-custom-white">
    {sticky && <GoTop />}
      <Wplink />
      <Topbar />
      <Header />
      <About />
      <Products />
      <Projects />
      <Brands/>
      <Footer />
    </div>
  );
}

export default Home;
