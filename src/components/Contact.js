import { useTranslation } from "react-i18next";
import { common } from "../data";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Result = () => {
  let lng = localStorage.getItem("i18nextLng");

  return <p>{common[0].submitted[`${lng}`]}</p>;
};

function Contact() {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const [result, setResult] = useState(false);

  useTranslation();

  let lng = localStorage.getItem("i18nextLng");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 3000);

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.3539584423706!2d29.10390625150867!3d37.75829787966311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73ef0c597970d%3A0xba79f5eafca0c101!2s%C4%B0ncilip%C4%B1nar%2C%201252.%20Sk.%20No%3A4%2C%2020150%20Denizli%20Merkez%2FDenizli!5e0!3m2!1sen!2str!4v1679945163831!5m2!1sen!2str"
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
            <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
              <input
                className="mt-8 h-10 md:text-lg text-base p-3 pl-4 outline-custom-theme rounded-xl font-[Montserrat]"
                type="text"
                name="name"
                placeholder={common[0].name[`${lng}`]}
                required
              />
              <input
                className="mt-8 h-10 md:text-lg text-base p-3 pl-4 outline-custom-theme rounded-xl font-[Montserrat]"
                type="email"
                name="email"
                placeholder={common[0].email[`${lng}`]}
                required
              />
              <input
                className="mt-8 h-10 md:text-lg text-base p-3 pl-4 outline-custom-theme rounded-xl font-[Montserrat]"
                type="tel"
                name="tel"
                placeholder={common[0].tel[`${lng}`]}
                required
              />
              <textarea
                className="mt-8 h-36 max-h-64 md:text-lg text-base p-3 pl-4 focus:outline-custom-theme rounded-xl font-[Montserrat]"
                type="textarea"
                name="message"
                placeholder={common[0].message[`${lng}`]}
                required
              />
              <input
                type="submit"
                value={common[0].send[`${lng}`]}
                className="cursor-pointer mt-8 bg-custom-theme hover:bg-custom-darkTheme duration-200 text-custom-white hover:text-white md:text-lg text-base w-36 p-3 rounded-xl font-[Montserrat]"
              />
              <div className="py-5 text-lg font-[Montserrat]">
                {result ? <Result /> : null}
              </div>
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
                    İncilipınar, 1252. Sk. No:4 - Denizli
                  </span>
                </div>
                <div className="text-custom-theme mt-3 flex items-center">
                  <ion-icon name="call-outline"></ion-icon>
                  <span className="text-custom-desc ml-5 font-[Montserrat]">
                    0532 170 70 20
                  </span>
                </div>
                <div className="text-custom-theme mt-3 flex items-center">
                  <ion-icon name="mail-outline"></ion-icon>
                  <span className="text-custom-desc ml-5 font-[Montserrat]">
                    arcyapi2@gmail.com
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <span className="md:text-2xl text-xl font-[Montserrat] font-medium">
                  {common[0].social[`${lng}`]}
                </span>
                <div className="mt-5 text-4xl">
                  <a
                    className="mr-5 hover:text-custom-theme duration-200"
                    href="https://www.instagram.com/arcyapi20/?igshid=YmMyMTA2M2Y%3D"
                  >
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a
                    className="mr-5 hover:text-custom-theme duration-200"
                    href="https://www.facebook.com/profile.php?id=100009592010939&mibextid=ZbWKwL"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a
                    className="mr-5 hover:text-custom-theme duration-200"
                    href="https://wa.me/+905321707020"
                  >
                    <ion-icon name="logo-whatsapp"></ion-icon>
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
