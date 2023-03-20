import { useTranslation } from "react-i18next";
import { about } from "../data";

function About() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="p-10 bg-slate-300 flex lg:flex-row flex-col-reverse">
      <div className="flex flex-col lg:pr-10 lg:w-1/2">
        <span className="mb-5 text-5xl">ARC Yapı</span>
        <span className="mb-5 text-2xl">{about[0].desc[`${lng}`]}</span>
      </div>
      <div className=" lg:w-1/2 mb-10 lg:mb-0">
        <img
          className="rounded-xl md:full md:h-full object-cover"
          src={about[0].img}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
