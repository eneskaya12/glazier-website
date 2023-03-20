function Header () {
    return(
        <div className="w-screen h-screen">
            <span className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-8xl text-4xl text-custom-white font-[Montserrat] selection:bg-custom-theme selection:text-custom-white md:border-b-4 border-b-2 border-custom-theme pb-5">ARC Yapı</span>
            <span className="absolute md:top-[60%] top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-5xl text-2xl text-custom-white italic font-[Bitter] selection:bg-custom-theme selection:text-custom-white">Yeniliklerin ve Kalitenin Adresi.</span>
            <img className="w-full h-full object-cover" src="/assets/plant.jpg" alt=""/>
        </div>
    );
}

export default Header;