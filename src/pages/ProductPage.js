import Footer from "../components/Footer";
import ProductType from "../components/ProductType";
import Topbar from "../components/Topbar";
import { useParams } from "react-router-dom";
import { products, common } from "../data";
import { useTranslation } from "react-i18next";

function ProductPage() {
  useTranslation();

  const { types } = useParams();
  const product = products.filter((item) => item.url === types)[0];

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div>
      <Topbar />
      <div className="p-10 bg-slate-200">
        <div className="flex flex-col">
          <span className="text-slate-700 text-3xl">
            {common[0].products[`${lng}`]}
          </span>
          <span className="text-4xl ml-3 font-medium">
            {product.name[`${lng}`]}
          </span>
        </div>
        <div className="h-auto flex flex-wrap justify-center">
          {product.types.map((t) => (
            <ProductType productUrl={product.url} type={t} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
