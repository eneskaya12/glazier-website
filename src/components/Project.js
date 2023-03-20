import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Project({ project }) {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="w-96 h-80shadow-xl m-5 cursor-pointer selection:bg-custom-theme selection:text-custom-white">
      <Link to={`/projects/${project.url}`}>
        <div>
          <img
            className="md:w-96 md:h-80 w-full h-full object-cover"
            src={project.img}
            alt=""
          />
        </div>
        <div className="bg-white w-full flex text-center justify-center p-5">
          <span className="text-slate-500 text-2xl font-medium font-[Montserrat]">
            {project.name[`${lng}`]}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Project;
