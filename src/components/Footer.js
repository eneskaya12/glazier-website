import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { common, products, projects } from "../data";

function Footer() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="pt-20 pb-5 md:px-5 px-2 bg-custom-footNav flex justify-center selection:bg-custom-theme selection:text-custom-white">
      <div className="max-w-screen-xl">
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
          <div className="flex justify-start flex-wrap mx-10">
            <div className="flex flex-col m-5">
              <Link to="/products" className="cursor-default mb-3">
                <span className="text-lg font-medium cursor-pointer font-[Montserrat] hover:text-custom-white text-custom-theme duration-200">
                  {common[0].products[`${lng}`]}
                </span>
              </Link>
              {products.map((p) => (
                <Link to={`/products/${p.url}`}>
                  <span className="mb-1 cursor-pointer font-[Montserrat] hover:text-custom-theme text-custom-white duration-200">
                    {p.name[`${lng}`]}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col m-5">
              <Link to="/projects" className="cursor-default mb-3">
                <span className="text-lg font-medium cursor-pointer font-[Montserrat] hover:text-custom-white text-custom-theme duration-200">
                  {common[0].projects[`${lng}`]}
                </span>
              </Link>
              {projects.map((p) => (
                <Link to={`/projects/${p.url}`}>
                  <span className="mb-1 cursor-pointer font-[Montserrat] hover:text-custom-theme text-custom-white duration-200">
                    {p.name[`${lng}`]}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col m-5">
              <Link to="/contact" className="cursor-default mb-3">
                <span className="text-lg font-medium  cursor-pointer font-[Montserrat] hover:text-custom-white text-custom-theme duration-200">
                  {common[0].contact[`${lng}`]}
                </span>
              </Link>
              <span className="mb-1 font-[Montserrat] flex items-center text-custom-theme">
                <ion-icon name="location-outline"></ion-icon>
                <span className="ml-3 text-custom-white">Atatürk Caddesi - İstanbul</span>
              </span>
              <span className="mb-1 font-[Montserrat] flex items-center text-custom-theme">
                <ion-icon name="call-outline"></ion-icon>
                <span className="ml-3 text-custom-white">0212 444 0 444</span>
              </span>
              <span className="mb-1 font-[Montserrat] flex items-center text-custom-theme">
                <ion-icon name="mail-outline"></ion-icon>
                <span className="ml-3 text-custom-white">demo@demo.com</span>
                 
              </span>
            </div>
          </div>

          <div className="text-3xl flex flex-wrap justify-center h-1/2">
            <a
              className="mt-5 mr-5 h-9 hover:text-custom-theme text-custom-white duration-200"
              href="/#"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              className="mt-5 mr-5 h-9 hover:text-custom-theme text-custom-white duration-200"
              href="/#"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              className="mt-5 mr-5 h-9 hover:text-custom-theme text-custom-white duration-200"
              href="/#"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
        </div>
        <hr className="border-6 w-full text-custom-theme mt-5" />
        <div className="w-full flex text-custom-white text-center justify-center p-5">
          <span>©2023 ARC Yapı</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
