import { useTranslation } from "react-i18next";
import { about } from "../data";

function About() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="py-20 md:px-5 px-2 bg-custom-section1 flex justify-center flex-row selection:bg-custom-theme selection:text-custom-white">
      <div className="max-w-screen-xl flex flex-col">
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="flex flex-col lg:pr-10 lg:w-1/2">
            <span className="mb-5 md:text-5xl text-3xl font-[Montserrat] border-l-4 pl-3 border-custom-theme">ARC Yapı</span>
            <span className="text-custom-desc mb-5 md:text-xl text-lg font-[Bitter] leading-8">{about[0].desc[`${lng}`]}</span>
            <ul className="pl-10">
              {about[0].list.map((l) => (
                <li className="text-custom-desc md:text-xl text-lg list-disc font-[Bitter] leading-8">{l.li[`${lng}`]}</li>
              ))}
            </ul>
          </div>
          <div className=" lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
            <img
              className="rounded-xl h-[590px] object-cover"
              src={about[0].img}
              alt=""
            />
          </div>
        </div>
        <span className="text-custom-desc md:text-xl text-lg mt-5 font-[Bitter] leading-8">{about[0].descBtt[`${lng}`]}</span>
      </div>
    </div>
  );
}

export default About;
