import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import Projects from "../components/Projects";
import Topbar from "../components/Topbar";

function Home () {
    return (
        <div className="bg-custom-black">
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