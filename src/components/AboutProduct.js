import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { products, common } from "../data";

function AboutProduct() {
  useTranslation();

  const { about, types } = useParams();
  const product = products
    .filter((item) => item.url === types)[0]
    .types.filter((item) => item.url === about)[0];

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="py-20 px-5 bg-custom-section1 flex justify-center selection:bg-custom-theme selection:text-custom-white">
      <div className="max-w-screen-xl">
        <div className="flex flex-col border-l-4 pl-3 border-custom-theme">
          <span className="text-custom-title text-xl italic font-[Montserrat]">
            {common[0].products[`${lng}`]}
          </span>
          <span className="text-custom-subtitle text-3xl font-medium font-[Montserrat]">
            {product.name[`${lng}`]}
          </span>
        </div>
        <div className="mt-10 h-auto w-full flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <div className="lg:w-1/2 p-5 flex justify-center">
            <img className=" object-cover" src={product.img} alt="" />
          </div>
          <div className="lg:w-1/2 p-5 lg:pr-20 flex flex-col">
            <span className="mb-20 text-3xl font-[Montserrat]">{product.name[`${lng}`]}</span>
            <span className="text-xl leading-8 font-[Bitter]">{product.desc[`${lng}`]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProduct;
