import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Topbar() {
  let [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation(["common"]);

  useEffect((e) => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("tr");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const menuHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="p-3 bg-custom-white bg-opacity-100 shadow-lg md:flex md:items-center md:justify-center sticky top-0 z-50 selection:bg-custom-theme selection:text-custom-white">
      <div className="max-w-screen-xl md:flex md:justify-between w-full">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold cursor-pointer">
            <Link to="/">
              <img
                className="h-16 inline"
                src="/assets/arclogo.jpg"
                alt=""
              />
            </Link>
          </span>
          <span className="text-custom-black text-4xl cursor-pointer mx-2 md:hidden block">
            <ion-icon
              name={open ? "close-outline" : "menu-outline"}
              onClick={menuHandler}
            ></ion-icon>
          </span>
        </div>

        <ul
          className={`md:bg-custom-transparent bg-custom-white md:flex md:items-center z-0 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300 ${
            open ? "opacity-100 top-[88px]" : "opacity-0 top-[-400px]"
          }`}
        >
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/"
              className="text-lg text-custom-black hover:text-custom-theme duration-200 font-[Montserrat] font-medium"
            >
              {t("home")}
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/products"
              className="text-lg text-custom-black hover:text-custom-theme duration-200 font-[Montserrat] font-medium"
            >
              {t("products")}
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/projects"
              className="text-lg text-custom-black hover:text-custom-theme duration-200 font-[Montserrat] font-medium"
            >
              {t("projects")}
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/contact"
              className="text-lg text-custom-black hover:text-custom-theme duration-200 font-[Montserrat] font-medium"
            >
              {t("contact")}
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <select
              className="text-lg bg-custom-transparent text-custom-black cursor-pointer border-b-2 pb-1 border-custom-theme font-[Montserrat] hover:text-custom-theme duration-200 font-medium outline-0"
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}
            >
              <option value="tr" className="bg-custom-white">
                Türkçe
              </option>
              <option value="en" className="bg-custom-white">
                English
              </option>
              <option value="de" className="bg-custom-white">
                Deutsch
              </option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
