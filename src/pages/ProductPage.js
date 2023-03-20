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
      <div className="py-20 px-5 bg-slate-200 flex justify-center selection:bg-custom-theme selection:text-custom-white">
        <div className="max-w-screen-xl">
          <div className="flex flex-col border-l-4 pl-3 border-custom-theme">
            <span className="text-custom-title text-xl italic font-[Montserrat]">
              {common[0].products[`${lng}`]}
            </span>
            <span className="text-custom-subtitle text-3xl font-medium font-[Montserrat]">
              {product.name[`${lng}`]}
            </span>
          </div>
          <div className="h-auto flex flex-wrap justify-center">
            {product.types.map((t) => (
              <ProductType productUrl={product.url} type={t} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
