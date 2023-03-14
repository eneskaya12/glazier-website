import About from "../components/About";
import Products from "../components/Products";
import Projects from "../components/Projects";
import Topbar from "../components/Topbar";

function Home () {
    return (
        <div className="px-20">
            <Topbar />
            <About />
            <Products />
            <Projects />
        </div>
    );
}

export default Home;