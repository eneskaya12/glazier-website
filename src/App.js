import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage.js";
import AboutProduct from "./pages/AboutProduct.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import AboutProject from "./pages/AboutProject.js";
import ContactPage from "./pages/ContactPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/urunler" element={<ProductsPage />} />
        <Route path="/urun-sayfasi" element={<ProductPage />} />
        <Route path="/urun-hakkinda" element={<AboutProduct />} />
        <Route path="/projeler" element={<ProjectsPage />} />
        <Route path="/proje-hakkinda" element={<AboutProject />} />
        <Route path="/iletisim" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
