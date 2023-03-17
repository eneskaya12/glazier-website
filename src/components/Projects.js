import Project from "./Project";
import { useTranslation } from "react-i18next";

function Projects() {

  const { t } = useTranslation(["projects"]);

  return (
    <div className="p-10 bg-slate-300">
      <div className="flex flex-col mb-5">
        <span className="text-slate-700 text-3xl">{t("title")}</span>
        <span className="text-4xl ml-3 font-medium">{t("subtitle")}</span>
      </div>
      <div className="h-auto flex flex-wrap justify-center">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;
