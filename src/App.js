import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage.js";
import AboutProductPage from "./pages/AboutProductPage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import AboutProjectPage from "./pages/AboutProjectPage.js";
import ContactPage from "./pages/ContactPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/products/:types" element={<ProductPage />} />
        <Route path="/products/:types/:about" element={<AboutProductPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:about" element={<AboutProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
