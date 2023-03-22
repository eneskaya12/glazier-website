import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Product2({ product }) {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="md:w-96 w-auto shadow-xl md:m-5 m-2 cursor-pointer selection:bg-custom-theme selection:text-custom-white">
      <Link to={`/product/${product.url}`}>
        <div>
          <img className="sm:w-96 sm:h-80 object-cover" src={product.img} alt="" />
        </div>
        <div className="bg-white w-full flex text-center justify-center p-5">
          <span className="text-custom-title md:text-2xl text-base font-medium font-[Montserrat]">
            {product.name[`${lng}`]}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Product2;
