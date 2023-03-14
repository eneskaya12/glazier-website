import Project from "./Project";

function Projects() {
  return (
    <div className="p-10 bg-slate-300">
      <div className="flex flex-col mb-5">
        <span className="text-slate-700 text-3xl">Projeler</span>
        <span className="text-4xl ml-3 font-medium">Yaptığımız Çalışmalar</span>
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
