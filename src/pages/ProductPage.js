import Footer from "../components/Footer";
import ProductType from "../components/ProductType";
import Topbar from "../components/Topbar";
import { useParams } from "react-router-dom";
import { products, common } from "../data";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function ProductPage() {
  useTranslation();

  const { types } = useParams();
  const product = products.filter((item) => item.url === types)[0];

  let lng = localStorage.getItem("i18nextLng");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Topbar />
      <div className="py-20 md:px-5 px-2 bg-slate-200 flex justify-center selection:bg-custom-theme selection:text-custom-white">
        <div className="max-w-screen-xl">
          <div className="flex flex-col mb-10 border-l-4 pl-3 border-custom-theme">
            <span className="text-custom-title md:text-xl text-lg font-medium font-[Montserrat]">
              {common[0].glass[`${lng}`]}
            </span>
            <span className="text-custom-subtitle md:text-3xl text-2xl font-medium font-[Montserrat]">
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
