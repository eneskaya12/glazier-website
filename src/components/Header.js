import { useTranslation } from "react-i18next";
import { common } from "../data";

function Header() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");
  return (
    <div className="h-screen  flex text-center">
      <span className="w-72 md:w-auto absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-8xl text-6xl text-custom-theme font-medium font-[Montserrat] selection:bg-custom-theme selection:text-custom-white md:border-b-4 border-custom-white pb-5">
        ARC Yapı
      </span>
      <span className="bg-custom-section1 bg-opacity-90 py-3 w-full absolute md:top-[60%] top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-5xl text-3xl text-custom-theme italic font-medium font-[Bitter] selection:bg-custom-theme selection:text-custom-white">
        {common[0].header[`${lng}`]}
      </span>
      <img className="w-full h-full object-cover" src="/assets/house.jpg" alt="" />
    </div>
  );
}

export default Header;
