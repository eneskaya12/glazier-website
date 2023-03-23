import { useTranslation } from "react-i18next";
import { common } from "../data";

function Contact() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="py-20 md:px-5 px-2 bg-custom-section1 flex justify-center selection:bg-custom-theme selection:text-custom-white">
      <div className="max-w-screen-xl w-full">
        <div className="flex flex-col border-l-4 pl-3 border-custom-theme">
          <span className="text-custom-title md:text-xl text-lg font-medium font-[Montserrat]">
            {common[0].contact[`${lng}`]}
          </span>
          <span className="text-custom-subtitle md:text-3xl text-2xl font-medium font-[Montserrat]">
            {common[0].contactSb[`${lng}`]}
          </span>
        </div>
        <div className="flex justify-center items-center mt-10 px-4 w-full rounded-xl">
          <iframe
            className="md:w-11/12 w-full h-96 rounded-xl"
            title="This is a unique title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.1038555233266!2d39.37933086989528!3d41.0822174646982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40640dab31f580b1%3A0xbad1d9abe4dba0bc!2sBizim%20Saatci!5e0!3m2!1sen!2str!4v1679404289735!5m2!1sen!2str"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <diV className="flex flex-col-reverse lg:flex-row md:px-16 px-0">
          <div className="md:mt-10 lg:w-1/2 w-full py-10 md:pr-10">
            <span className="md:text-3xl text-2xl font-[Montserrat] font-medium">
              {common[0].form[`${lng}`]}
            </span>
            <form className="flex flex-col">
              <input
                className="mt-8 h-10 md:text-lg text-base p-3 pl-4 outline-custom-theme rounded-xl font-[Montserrat]"
                type="text"
                name="name"
                placeholder={common[0].name[`${lng}`]}
              />
              <input
                className="mt-8 h-10 md:text-lg text-base p-3 pl-4 outline-custom-theme rounded-xl font-[Montserrat]"
                type="email"
                name="email"
                placeholder={common[0].email[`${lng}`]}
              />
              <input
                className="mt-8 h-10 md:text-lg text-base p-3 pl-4 outline-custom-theme rounded-xl font-[Montserrat]"
                type="tel"
                name="tel"
                placeholder={common[0].tel[`${lng}`]}
              />
              <textarea
                className="mt-8 h-36 max-h-64 md:text-lg text-base p-3 pl-4 focus:outline-custom-theme rounded-xl font-[Montserrat]"
                type="textarea"
                name="message"
                placeholder={common[0].message[`${lng}`]}
              />
              <button className="mt-8 bg-custom-theme hover:bg-custom-darkTheme duration-200 text-custom-white hover:text-white md:text-lg text-base w-36 p-3 rounded-xl font-[Montserrat]">
                {common[0].send[`${lng}`]}
              </button>
            </form>
          </div>
          <div className="mt-10 lg:w-1/2 w-full py-10 md:pr-10">
            <span className="md:text-3xl text-2xl font-[Montserrat] font-medium">
              {common[0].info[`${lng}`]}
            </span>
            <div className="flex lg:flex-col flex-wrap">
              <div className="mt-8 md:text-xl text-lg mr-10 lg:mr-0">
                <div className="text-custom-theme flex items-center">
                  <ion-icon name="location-outline"></ion-icon>
                  <span className="text-custom-desc ml-5 font-[Montserrat]">
                    Atatürk Caddesi - İstanbul
                  </span>
                </div>
                <div className="text-custom-theme mt-3 flex items-center">
                  <ion-icon name="call-outline"></ion-icon>
                  <span className="text-custom-desc ml-5 font-[Montserrat]">0212 444 0 444</span>
                </div>
                <div className="text-custom-theme mt-3 flex items-center">
                  <ion-icon name="mail-outline"></ion-icon>
                  <span className="text-custom-desc ml-5 font-[Montserrat]">demo@demo.com</span>
                </div>
              </div>
              <div className="mt-8">
                <span className="md:text-2xl text-xl font-[Montserrat] font-medium">
                  {common[0].social[`${lng}`]}
                </span>
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
