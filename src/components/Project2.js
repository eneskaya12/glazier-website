import { Link } from "react-router-dom";

function Project2({ project }) {

  return (
    <div className="md:w-96 w-auto shadow-xl md:m-5 m-2 cursor-pointer selection:bg-custom-theme selection:text-custom-white">
      <Link to={`/project/${project.url}`}>
        <div>
          <img
            className="w-96 h-80 object-cover"
            src={project.img}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
}

export default Project2;
