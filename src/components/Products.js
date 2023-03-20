import Product from "./Product";
import { products, common } from "../data";
import { useTranslation } from "react-i18next";

function Products() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="py-20 px-5 bg-custom-section2 flex justify-center selection:bg-custom-theme selection:text-custom-white">
      <div className="max-w-screen-xl">
        <div className="flex flex-col mb-10 border-l-4 pl-3 border-custom-theme">
          <span className="text-custom-title text-xl italic font-[Montserrat]">
            {common[0].products[`${lng}`]}
          </span>
          <span className="text-custom-subtitle text-3xl font-medium font-[Montserrat]">
            {common[0].glass[`${lng}`]}
          </span>
        </div>
        <div className="h-auto flex flex-wrap justify-center">
          {products.map((p) => (
            <Product product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
