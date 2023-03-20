import { useTranslation } from "react-i18next";
import { common } from "../data";

function Contact() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="py-20 px-5 bg-custom-section1 flex justify-center selection:bg-custom-theme selection:text-custom-white">
      <div className="max-w-screen-xl w-full">
        <div className="flex flex-col border-l-4 pl-3 border-custom-theme">
          <span className="text-custom-title text-xl italic font-[Montserrat]">
            {common[0].contact[`${lng}`]}
          </span>
          <span className="text-custom-subtitle text-3xl font-medium font-[Montserrat]">
            {common[0].contactSb[`${lng}`]}
          </span>
        </div>
        <diV className="flex flex-col lg:flex-row md:px-16 px-0">
          <div className="mt-10 lg:w-1/2 w-full py-10 md:pr-10">
            <span className="text-3xl font-[Montserrat]">{common[0].form[`${lng}`]}</span>
            <form className="flex flex-col">
              <input
                className="mt-8 h-10 text-lg p-3 pl-4 focus:outline-custom-theme focus:ease-in duration-200 rounded-xl font-[Montserrat]"
                type="text"
                name="name"
                placeholder={common[0].name[`${lng}`]}
              />
              <input
                className="mt-8 h-10 text-lg p-3 pl-4 focus:outline-custom-theme focus:ease-in duration-200 rounded-xl font-[Montserrat]"
                type="email"
                name="email"
                placeholder={common[0].email[`${lng}`]}
              />
              <input
                className="mt-8 h-10 text-lg p-3 pl-4 focus:outline-custom-theme focus:ease-in duration-200 rounded-xl font-[Montserrat]"
                type="tel"
                name="tel"
                placeholder={common[0].tel[`${lng}`]}
              />
              <textarea
                className="mt-8 h-36 text-lg p-3 pl-4 focus:outline-custom-theme focus:ease-in duration-200 rounded-xl font-[Montserrat]"
                type="textarea"
                name="message"
                placeholder={common[0].message[`${lng}`]}
              />
              <button className="mt-8 bg-custom-theme hover:bg-custom-darkTheme text-custom-white hover:text-white text-xl w-36 p-3 rounded-xl font-[Montserrat]">
                {common[0].send[`${lng}`]}
              </button>
            </form>
          </div>
          <div className="mt-10 lg:w-1/2 w-full py-10 md:pr-10">
            <span className="text-3xl font-[Montserrat]">{common[0].info[`${lng}`]}</span>
            <div className="flex lg:flex-col flex-wrap">
              <div className="mt-8 text-xl mr-10 lg:mr-0">
                <div className="flex items-center">
                  <ion-icon name="location-outline"></ion-icon>
                  <span className="ml-5 font-[Montserrat]">Atatürk Caddesi - İstanbul</span>
                </div>
                <div className="mt-3 flex items-center">
                  <ion-icon name="call-outline"></ion-icon>
                  <span className="ml-5 font-[Montserrat]">0212 444 0 444</span>
                </div>
                <div className="mt-3 flex items-center">
                  <ion-icon name="mail-outline"></ion-icon>
                  <span className="ml-5 font-[Montserrat]">demo@demo.com</span>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-2xl font-[Montserrat]">{common[0].social[`${lng}`]}</span>
                <div className="mt-5 text-4xl">
                  <a
                    className="mr-5 hover:text-custom-theme duration-200"
                    href="/#"
                  >
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a
                    className="mr-5 hover:text-custom-theme duration-200"
                    href="/#"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a
                    className="mr-5 hover:text-custom-theme duration-200"
                    href="/#"
                  >
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </diV>
      </div>
    </div>
  );
}

export default Contact;
