import Topbar from "../components/Topbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useEffect } from "react";

function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Topbar />
      <Products />
      <Footer />
    </div>
  );
}

export default ProductsPage;
