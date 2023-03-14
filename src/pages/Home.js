import About from "../components/About";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Projects from "../components/Projects";
import Topbar from "../components/Topbar";

function Home () {
    return (
        <div className="">
            <Topbar />
            <About />
            <Products />
            <Projects />
            <Footer />
        </div>
    );
}

export default Home;