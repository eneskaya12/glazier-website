import Project from "./Project";
import { useTranslation } from "react-i18next";
import { projects, common } from "../data";

function Projects() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="py-20 md:px-5 px-2 bg-custom-section1 flex justify-center selection:bg-custom-theme selection:text-custom-white">
      <div className="max-w-screen-xl">
        <div className="flex flex-col mb-10 border-l-4 pl-3 border-custom-theme">
          <span className="text-slate-700 md:text-xl text-lg italic font-[Montserrat]">
            {common[0].projects[`${lng}`]}
          </span>
          <span className="md:text-3xl text-2xl font-medium font-[Montserrat]">
            {common[0].work[`${lng}`]}
          </span>
        </div>
        <div className="h-auto flex flex-wrap justify-center">
          {projects.map((p) => (
            <Project project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
