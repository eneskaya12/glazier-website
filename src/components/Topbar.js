import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Topbar() {
  let [open, setOpen] = useState(false);

  const {t, i18n} = useTranslation(["common"]);

  useEffect((e) => {
    if(localStorage.getItem("i18nextLng")?.length>2){
      i18next.changeLanguage("tr");
    }
  }, [])

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  } 

  const menuHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="p-5 bg-slate-400 shadow md:flex md:items-center md:justify-between sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold cursor-pointer">
          <Link to="/">
            <img
              className="h-10 inline"
              src="/assets/logoipsum-286.svg"
              alt=""
            />
          </Link>
        </span>
        <span className="text-4xl cursor-pointer mx-2 md:hidden block">
          <ion-icon
            name={open ? "close-outline" : "menu-outline"}
            onClick={menuHandler}
          ></ion-icon>
        </span>
      </div>

      <ul
        className={`md:flex md:items-center z-0 md:z-auto md:static absolute bg-slate-400 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300 ${
          open ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"
        }`}
      >
        <li className="mx-4 my-6 md:my-0">
          <Link to="/" className="text-xl hover:text-white duration-200">
          {t("home")}
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link to="/urunler" className="text-xl hover:text-white duration-200">
            {t("products")}
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/projeler"
            className="text-xl hover:text-white duration-200"
          >
            {t("projects")}
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/iletisim"
            className="text-xl hover:text-white duration-200"
          >
            {t("contact")}
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
        <select
							className="text-xl bg-transparent border-b-2 border-black"
							value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}
						>
							<option value="tr">Turkish</option>
							<option value="en">English</option>
							<option value="de">Deutsch</option>
						</select>
        </li>
      </ul>
    </div>
  );
}

export default Topbar;
