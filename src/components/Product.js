import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Product({ product }) {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="w-96 shadow-xl m-5 cursor-pointer selection:bg-custom-theme selection:text-custom-white">
      <Link to={`/products/${product.url}`}>
        <div>
          <img className="md:w-96 md:h-80" src={product.img} alt="" />
        </div>
        <div className="bg-white w-full flex text-center justify-center p-5">
          <span className="text-custom-title text-2xl font-medium font-[Montserrat]">
            {product.name[`${lng}`]}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Product;
