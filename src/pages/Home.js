import About from "../components/About";
import Products from "../components/Products";
import Topbar from "../components/Topbar";

function Home () {
    return (
        <div>
            <Topbar />
            <About />
            <Products />
        </div>
    );
}

export default Home;