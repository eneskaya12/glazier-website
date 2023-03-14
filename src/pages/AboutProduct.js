import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

function AboutProduct() {
  return (
    <div>
      <Topbar />

      <div className="p-10 pb-20 bg-slate-200">
        <div className="flex flex-col">
          <span className="text-slate-700 text-3xl">Ürünler</span>
          <span className="text-4xl ml-3 font-medium">
            Isıcamlı Sürme Cam Sistemleri
          </span>
        </div>
        <div className="mt-10 h-auto w-full flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <div className="lg:w-1/2 p-5 flex justify-center">
            <img
            className=" object-cover"
              src="https://elizcam.com.tr/wp-content/uploads/2023/01/Mask-group-7-1-466x393.jpg"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 p-5 lg:pr-20 flex flex-col">
            <span className="mb-20 text-3xl">Isıcamlı Sürme Cam Sistemleri</span>
            <span className="text-xl leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dui lorem, feugiat et eros vitae, laoreet vehicula diam. Mauris ut
              magna et odio imperdiet pretium. Sed fermentum sagittis semper.
              Curabitur ultricies feugiat sem, quis ornare odio egestas sit
              amet. Morbi accumsan justo id dictum fringilla. In vitae dolor mi.
              Proin id risus ut dui maximus viverra. Morbi a risus faucibus,
              varius enim sit amet, sodales sem.
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutProduct;
