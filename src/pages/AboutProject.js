import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import { useTranslation } from "react-i18next";

function AboutProject() {

  const { t } = useTranslation(["aboutProject"]);

  return (
    <div>
      <Topbar />

      <div className="p-10 pb-20 bg-slate-200">
        <div className="flex flex-col">
          <span className="text-slate-700 text-3xl">{t("title")}</span>
          <span className="text-4xl ml-3 font-medium">
            {t("subtitle")}
          </span>
        </div>
        <div className="mt-10 h-auto w-full flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <div className="lg:w-1/2 p-5 flex justify-center">
            <img
              className="h-96 object-cover"
              src="https://www.edsproje.com/images/HEBE.jpg"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 p-5 lg:pr-20 flex flex-col">
            <span className="mb-20 text-3xl">
            {t("name")}
            </span>
            <span className="text-xl leading-8">
              {t("desc")}
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutProject;
