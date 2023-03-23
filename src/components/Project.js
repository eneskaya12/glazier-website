import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Project({ project }) {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="md:w-96 w-auto shadow-xl md:m-5 m-2 cursor-pointer selection:bg-custom-theme selection:text-custom-white">
      <Link to={`/projects/${project.url}`}>
        <div>
          <img
            className="w-96 h-80 object-cover"
            src={project.img}
            alt=""
          />
        </div>
        <div className="bg-white w-full flex text-center justify-center p-5">
          <span className="text-slate-500 md:text-2xl sm:text-xl text-lg font-medium font-[Montserrat]">
            {project.name[`${lng}`]}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Project;
