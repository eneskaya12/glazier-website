import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Project({ project }) {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="bg-slate-400 w-96 shadow-xl m-5 cursor-pointer">
      <Link to={`/projects/${project.url}`}>
        <div>
          <img
            className="w-full h-full object-cover"
            src={project.img}
            alt=""
          />
        </div>
        <div className="bg-white w-full flex text-center justify-center p-5">
          <span className="text-slate-500 text-2xl">
            {project.name[`${lng}`]}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Project;
