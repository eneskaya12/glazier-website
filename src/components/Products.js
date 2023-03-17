import Product from "./Product";
import { useTranslation } from "react-i18next";

function Products() {

  const { t } = useTranslation(["products"]);

  return (
    <div className="p-10 bg-slate-200">
      <div className="flex flex-col">
        <span className="text-slate-700 text-3xl">{t("title")}</span>
        <span className="text-4xl ml-3 font-medium">{t("subtitle")}</span>
      </div>
      <div className="h-auto flex flex-wrap justify-center">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Products;
