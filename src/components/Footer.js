import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { common, products, projects } from "../data";

function Footer() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="p-10 bg-slate-200">
      <div className="flex xl:flex-row flex-col lg:justify-evenly">
        <span className="text-2xl h-14 font-bold cursor-pointer mb-5">
          <Link to="/">
            <img
              className="h-14 inline"
              src="/assets/logoipsum-286.svg"
              alt=""
            />
          </Link>
        </span>
        <div className="flex justify-evenly flex-wrap">
          <div className="flex flex-col m-5">
            <Link to="/urunler" className="cursor-default">
              <span className="text-lg font-medium cursor-pointer hover:text-yellow-500 duration-200">
                {common[0].products[`${lng}`]}
              </span>
            </Link>
            {products.map((p) => (
              <Link to={`/products/${p.url}`}>
                <span className="mb-1 cursor-pointer hover:text-yellow-500 duration-200">
                  {p.name[`${lng}`]}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col m-5">
            <Link to="/projeler" className="cursor-default">
              <span className="text-lg font-medium cursor-pointer hover:text-yellow-500 duration-200">
                {common[0].projects[`${lng}`]}
              </span>
            </Link>
            {projects.map((p) => (
              <Link to={`/projects/${p.url}`}>
                <span className="mb-1 cursor-pointer hover:text-yellow-500 duration-200">
                  {p.name[`${lng}`]}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col m-5">
            <Link to="/contact" className="cursor-default">
              <span className="text-lg font-medium  cursor-pointer hover:text-yellow-500 duration-200">
                {common[0].contact[`${lng}`]}
              </span>
            </Link>
            <span className="mb-1">
              {common[0].address[`${lng}`]}: Atatürk Caddesi - İstanbul
            </span>
            <span className="mb-1">
              {common[0].tel[`${lng}`]}: 0212 444 0 444
            </span>
            <span className="mb-1">
              {common[0].products[`${lng}`]}: demo@demo.com
            </span>
          </div>
        </div>

        <div className="ml-5 text-3xl flex flex-wrap justify-center h-1/2">
          <a
            className="mt-5 mr-5 h-9 hover:text-yellow-500 duration-200"
            href="/#"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            className="mt-5 mr-5 h-9 hover:text-yellow-500 duration-200"
            href="/#"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            className="mt-5 mr-5 h-9 hover:text-yellow-500 duration-200"
            href="/#"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            className="mt-5 mr-5 h-9 hover:text-yellow-500 duration-200"
            href="/#"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
      <div className="w-full flex text-center justify-center p-5">
        <span>©2023 ARC Yapı</span>
      </div>
    </div>
  );
}

export default Footer;
