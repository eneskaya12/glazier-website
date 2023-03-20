import Project from "./Project";
import { useTranslation } from "react-i18next";
import { projects, common } from "../data";

function Projects() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="p-10 bg-slate-300">
      <div className="flex flex-col mb-5">
        <span className="text-slate-700 text-3xl">
          {common[0].projects[`${lng}`]}
        </span>
        <span className="text-4xl ml-3 font-medium">
          {common[0].work[`${lng}`]}
        </span>
      </div>
      <div className="h-auto flex flex-wrap justify-center">
        {projects.map((p) => (
          <Project project={p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
