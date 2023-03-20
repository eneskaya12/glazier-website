import Product from "./Product";
import { products, common } from "../data";
import { useTranslation } from "react-i18next";

function Products() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="p-10 bg-slate-200">
      <div className="flex flex-col">
        <span className="text-slate-700 text-3xl">
          {common[0].products[`${lng}`]}
        </span>
        <span className="text-4xl ml-3 font-medium">
          {common[0].glass[`${lng}`]}
        </span>
      </div>
      <div className="h-auto flex flex-wrap justify-center">
        {products.map((p) => (
          <Product product={p} />
        ))}
      </div>
    </div>
  );
}

export default Products;
