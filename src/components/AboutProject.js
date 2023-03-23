import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { projects, common } from "../data";

function AboutProject() {
  useTranslation();

  const { about } = useParams();
  const project = projects.filter((item) => item.url === about)[0];

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="py-20 md:px-5 px-2 bg-custom-section1 flex justify-center selection:bg-custom-theme selection:text-custom-white">
      <div className="max-w-screen-xl">
        <div className="flex flex-col border-l-4 pl-3 border-custom-theme">
          <span className="text-custom-title md:text-xl text-lg font-medium font-[Montserrat]">
            {common[0].work[`${lng}`]}
          </span>
          <span className="text-custom-subtitle md:text-3xl text-2xl font-medium font-[Montserrat]">
            {project.name[`${lng}`]}
          </span>
        </div>
        <div className="mt-10 h-auto w-full flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <div className="lg:w-1/2 md:p-5 flex justify-center">
            <img className="md:h-96 h-72 object-cover" src={project.img} alt="" />
          </div>
          <div className="lg:w-1/2 md:p-5 md:mt-0 mt-5 lg:pr-20 flex flex-col">
            <span className="md:mb-20 mb-10 md:text-3xl text-2xl font-[Montserrat]">{project.name[`${lng}`]}</span>
            <span className="text-custom-desc md:text-xl text-base leading-8 font-[Bitter]">{project.desc[`${lng}`]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
