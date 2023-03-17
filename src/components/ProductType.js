import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProductType() {

  const { t } = useTranslation(["productType"]);

  return (
    <div className="bg-slate-400 w-96 shadow-xl m-5 cursor-pointer">
      <Link to="/urun-hakkinda">
        <div>
          <img
            className="w-full"
            src="https://elizcam.com.tr/wp-content/uploads/2023/01/Mask-group-7-1-466x393.jpg"
            alt=""
          />
        </div>
        <div className="bg-white w-full flex text-center justify-center p-5">
          <span className="text-slate-500 text-2xl">
            {t("name")}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default ProductType;
