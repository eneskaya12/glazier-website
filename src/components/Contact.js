function Contact () {
    return(
        <div className="p-10 pb-20 bg-slate-200">
        <div className="flex flex-col">
          <span className="text-slate-700 text-3xl">İletişim</span>
          <span className="text-4xl ml-3 font-medium">
            İletişim Formu & İletişim Bilgileri
          </span>
        </div>
        <diV className="flex flex-col lg:flex-row md:px-16 px-0">
          <div className="mt-10 lg:w-1/2 w-full py-10 md:pr-10">
            <span className="text-3xl">İletişim Formu</span>
            <form className="flex flex-col">
              <input
                className="mt-8 h-10 text-lg p-3"
                type="text"
                name="name"
                placeholder="Ad Soyad"
              />
              <input
                className="mt-8 h-10 text-lg p-3"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="mt-8 h-10 text-lg p-3"
                type="tel"
                name="tel"
                placeholder="Telefon"
              />
              <textarea
                className="mt-8 h-36 text-lg p-3"
                type="textarea"
                name="message"
                placeholder="Mesaj"
              />
              <button className="mt-5 bg-white hover:bg-slate-800 hover:text-white text-xl w-36 p-3">
                GÖNDER
              </button>
            </form>
          </div>
          <div className="mt-10 lg:w-1/2 w-full py-10 md:pr-10">
            <span className="text-3xl">İletişim Bilgileri</span>
            <div className="flex lg:flex-col flex-wrap">
              <div className="mt-8 text-xl mr-10 lg:mr-0">
                <div className="flex items-center">
                  <ion-icon name="location-outline"></ion-icon>
                  <span className="ml-5">Atatürk Caddesi - İstanbul</span>
                </div>
                <div className="mt-3 flex items-center">
                  <ion-icon name="call-outline"></ion-icon>
                  <span className="ml-5">0212 444 0 444</span>
                </div>
                <div className="mt-3 flex items-center">
                  <ion-icon name="mail-outline"></ion-icon>
                  <span className="ml-5">demo@demo.com</span>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-2xl">Sosyal Medya Hesapları</span>
                <div className="mt-5 text-4xl">
                  <a
                    className="mr-5 hover:text-yellow-500 duration-200"
                    href="/#"
                  >
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a
                    className="mr-5 hover:text-yellow-500 duration-200"
                    href="/#"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a
                    className="mr-5 hover:text-yellow-500 duration-200"
                    href="/#"
                  >
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                  <a
                    className="mr-5 hover:text-yellow-500 duration-200"
                    href="/#"
                  >
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </diV>
      </div>
    );
}

export default Contact;