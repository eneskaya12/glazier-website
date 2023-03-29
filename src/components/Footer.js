import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { common, products, products2, projects, projects2 } from "../data";

function Footer() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="pt-20 pb-5 md:px-5 px-2 bg-custom-footNav flex justify-center selection:bg-custom-theme selection:text-custom-white">
      <div className="max-w-screen-xl">
        <div className="flex xl:flex-row flex-col lg:justify-evenly">
          <span className="text-2xl h-28 font-bold cursor-pointer mb-10 flex justify-center">
            <Link to="/">
              <img className="h-28 inline" src="/assets/arclogo.jpg" alt="" />
            </Link>
          </span>
          <div className="flex justify-center flex-wrap md:mx-5">
            <div className="flex flex-col md:m-5 m-3">
              <Link to="/products" className="cursor-default mb-3">
                <span className="text-lg font-medium cursor-pointer font-[Montserrat] hover:text-custom-white text-custom-theme duration-200">
                  {common[0].products[`${lng}`]}
                </span>
              </Link>
              {products.map((p) => (
                <Link to={`/products/${p.url}`}>
                  <span className="mb-1 cursor-pointer font-[Montserrat] hover:text-custom-theme text-custom-white duration-200 font-medium">
                    {p.name[`${lng}`]}
                  </span>
                </Link>
              ))}
              {products2.map((p) => (
                <Link to={`/product/${p.url}`}>
                  <span className="mb-1 cursor-pointer font-[Montserrat] hover:text-custom-theme text-custom-white duration-200 font-medium">
                    {p.name[`${lng}`]}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col md:m-5 m-3">
              <Link to="/projects" className="cursor-default mb-3">
                <span className="text-lg font-medium cursor-pointer font-[Montserrat] hover:text-custom-white text-custom-theme duration-200">
                  {common[0].projects[`${lng}`]}
                </span>
              </Link>
              {projects.map((p) => (
                <Link to={`/projects/${p.url}`}>
                  <span className="mb-1 cursor-pointer font-[Montserrat] hover:text-custom-theme text-custom-white duration-200 font-medium">
                    {p.name[`${lng}`]}
                  </span>
                </Link>
              ))}
              {projects2.map((p) => (
                <Link to={`/project/${p.url}`}>
                  <span className="mb-1 cursor-pointer font-[Montserrat] hover:text-custom-theme text-custom-white duration-200 font-medium">
                    {p.name[`${lng}`]}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col md:m-5 m-3">
              <Link to="/contact" className="cursor-default mb-3">
                <span className="text-lg font-medium  cursor-pointer font-[Montserrat] hover:text-custom-white text-custom-theme duration-200">
                  {common[0].contact[`${lng}`]}
                </span>
              </Link>
              <span className="mb-1 font-[Montserrat] flex items-center text-custom-theme font-medium">
                <ion-icon name="location-outline"></ion-icon>
                <span className="ml-3 text-custom-white">
                  İncilipınar, 1252. Sk. No:4 - Denizli
                </span>
              </span>
              <span className="mb-1 font-[Montserrat] flex items-center text-custom-theme font-medium">
                <ion-icon name="call-outline"></ion-icon>
                <span className="ml-3 text-custom-white">0532 170 70 20</span>
              </span>
              <span className="mb-1 font-[Montserrat] flex items-center text-custom-theme font-medium">
                <ion-icon name="mail-outline"></ion-icon>
                <span className="ml-3 text-custom-white">
                  arcyapi2@gmail.com
                </span>
              </span>
            </div>
          </div>

          <div className="text-3xl flex flex-wrap justify-center h-1/2">
            <a
              className="mt-5 mr-3 h-9 hover:text-custom-theme text-custom-white duration-200"
              href="https://www.instagram.com/arcyapi20/?igshid=YmMyMTA2M2Y%3D"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              className="mt-5 mr-3 h-9 hover:text-custom-theme text-custom-white duration-200"
              href="https://www.facebook.com/profile.php?id=100009592010939&mibextid=ZbWKwL"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              className="mt-5 mr-3 h-9 hover:text-custom-theme text-custom-white duration-200"
              href="https://wa.me/+905321707020"
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </div>
        </div>
        <hr className="border-6 w-full text-custom-theme mt-5" />
        <div className="w-full flex text-custom-white text-center justify-center p-5">
          <span>
            Copyright © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
