import { useTranslation } from "react-i18next";
import { brands } from "../data";
import Brand from "./Brand";

function Brands() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="py-20 md:px-5 px-2 bg-custom-section2 flex justify-center selection:bg-custom-theme selection:text-custom-white">
      <div className="max-w-screen-xl w-full">
        <div className="flex flex-col mb-10 border-l-4 pl-3 border-custom-theme">
          <span className="md:text-3xl text-2xl font-medium font-[Montserrat]">
            {brands[0].name[`${lng}`]}
          </span>
        </div>
        <div className="h-auto flex flex-wrap justify-center">
          {brands[0].images.map((b) => (
            <Brand brand={b}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
