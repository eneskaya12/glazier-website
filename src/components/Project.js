import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="bg-slate-400 w-96 shadow-xl m-5 cursor-pointer">
      <Link to="/proje-hakkinda">
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://www.edsproje.com/images/HEBE.jpg"
            alt=""
          />
        </div>
        <div className="bg-white w-full flex text-center justify-center p-5">
          <span className="text-slate-500 text-2xl">Proje #1: Kış Bahçesi</span>
        </div>
      </Link>
    </div>
  );
}

export default Project;
