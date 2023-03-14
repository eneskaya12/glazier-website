function Footer() {
  return (
    <div className="p-10 bg-slate-200">
      <div className="flex xl:flex-row flex-col lg:justify-evenly">
        <span className="text-2xl h-14 font-bold cursor-pointer mb-5">
          <img className="h-14 inline" src="/assets/logoipsum-286.svg" alt="" />
        </span>
        <div className="flex justify-evenly flex-wrap">
          <div className="flex flex-col m-5">
            <span className="text-lg font-medium cursor-pointer hover:text-yellow-500 duration-200">
              Ürünler
            </span>
            <span className="mb-1 cursor-pointer hover:text-yellow-500 duration-200">
              Sürme Cam Sistemleri
            </span>
            <span className="mb-1 cursor-pointer hover:text-yellow-500 duration-200">
              Sürme Cam Sistemleri
            </span>
            <span className="cursor-pointer hover:text-yellow-500 duration-200">
              Sürme Cam Sistemleri
            </span>
            <span className="cursor-pointer hover:text-yellow-500 duration-200">
              Sürme Cam Sistemleri
            </span>
          </div>
          <div className="flex flex-col m-5">
            <span className="text-lg font-medium cursor-pointer hover:text-yellow-500 duration-200">
              Projeler
            </span>
            <span className="mb-1 cursor-pointer hover:text-yellow-500 duration-200">
              Proje #1: Kış Bahçesi
            </span>
            <span className="mb-1 cursor-pointer hover:text-yellow-500 duration-200">
              Proje #1: Kış Bahçesi
            </span>
            <span className="cursor-pointer hover:text-yellow-500 duration-200">
              Proje #1: Kış Bahçesi
            </span>
          </div>
          <div className="flex flex-col m-5">
            <span className="text-lg font-medium  cursor-pointer hover:text-yellow-500 duration-200">
              İletişim
            </span>
            <span className="mb-1">Adres: Atatürk Caddesi - İstanbul</span>
            <span className="mb-1">Telefon: 0212 444 0 444</span>
            <span className="mb-1">E-Mail: demo@demo.com</span>
          </div>
        </div>

        <div className="ml-5 text-3xl flex flex-wrap justify-center h-1/2">
          <a
            className="mt-5 mr-5 h-9 hover:text-yellow-500 duration-200"
            href="/#"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            className="mt-5 mr-5 h-9 hover:text-yellow-500 duration-200"
            href="/#"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            className="mt-5 mr-5 h-9 hover:text-yellow-500 duration-200"
            href="/#"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            className="mt-5 mr-5 h-9 hover:text-yellow-500 duration-200"
            href="/#"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
      <div className="w-full flex text-center justify-center p-5">
        <span>©2023 ARC Yapı</span>
      </div>
    </div>
  );
}

export default Footer;
