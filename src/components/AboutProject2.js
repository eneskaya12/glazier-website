import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { projects2, common } from "../data";

function AboutProduct() {
  useTranslation();

  const { about } = useParams();
  const project = projects2.filter((item) => item.url === about)[0];

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="py-20 md:px-5 px-2 bg-custom-section1 flex justify-center selection:bg-custom-theme selection:text-custom-white">
      <div className="max-w-screen-xl w-full">
        <div className="flex flex-col border-l-4 pl-3 border-custom-theme">
          <span className="text-custom-title md:text-xl text-lg font-medium font-[Montserrat]">
            {common[0].work[`${lng}`]}
          </span>
          <span className="text-custom-subtitle md:text-3xl text-2xl font-medium font-[Montserrat]">
            {project.name[`${lng}`]}
          </span>
        </div>
        <div className="mt-10 h-auto w-full flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <div className="lg:p-5 flex justify-center flex-wrap">
            {project.images.map((img) => (
              <div className="md:p-5 md:my-0 my-5 md:w-1/2 flex-wrap">
                <img
                  className=" md:w-full w-96 lg:h-[500px] md:h-96 object-cover"
                  src={img.src}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProduct;
