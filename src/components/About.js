import { useTranslation } from "react-i18next";

function About() {

  const { t } = useTranslation(["about"]);
  
  return (
    <div className="p-10 bg-slate-300 flex lg:flex-row flex-col-reverse">
      <div className="flex flex-col lg:pr-10 lg:w-1/2">
        <span className="mb-5 text-5xl">ARC Yapı</span>
        <span className="mb-5 text-2xl">
          {t("desc")}
        </span>
        <div>
          <span className="text-3xl">{t("social")}</span>
          <div className="mt-5 text-4xl">
            <a className="mr-5 hover:text-slate-100 duration-200" href="/#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a className="mr-5 hover:text-slate-100 duration-200" href="/#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a className="mr-5 hover:text-slate-100 duration-200" href="/#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a className="mr-5 hover:text-slate-100 duration-200" href="/#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>
      <div className=" lg:w-1/2 mb-10 lg:mb-0">
        <img
          className="rounded-xl md:full md:h-full object-cover"
          src="https://lh3.googleusercontent.com/p/AF1QipNp6Nb_9B0nOkym-kSJhtIzpS8qn1rEHIAI254-=w1080-h608-p-k-no-v0"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
