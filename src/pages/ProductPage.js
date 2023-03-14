import Footer from "../components/Footer";
import Product from "../components/Product";
import Topbar from "../components/Topbar";

function ProductPage() {
  return (
    <div>
      <Topbar />
      <div className="p-10 bg-slate-200">
        <div className="flex flex-col">
          <span className="text-slate-700 text-3xl">Ürünler</span>
          <span className="text-4xl ml-3 font-medium">Sürme Cam Sistemleri</span>
        </div>
        <div className="h-auto flex flex-wrap justify-center">
          <Product />
          <Product />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
