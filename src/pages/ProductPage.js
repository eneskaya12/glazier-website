import Footer from "../components/Footer";
import ProductType from "../components/ProductType";
import Topbar from "../components/Topbar";
import { useTranslation } from "react-i18next";

function ProductPage() {

  const { t } = useTranslation(["common","product"]);
  
  return (
    <div>
      <Topbar />
      <div className="p-10 bg-slate-200">
        <div className="flex flex-col">
          <span className="text-slate-700 text-3xl">{t("common:products")}</span>
          <span className="text-4xl ml-3 font-medium">{t("product:name")}</span>
        </div>
        <div className="h-auto flex flex-wrap justify-center">
          <ProductType />
          <ProductType />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
