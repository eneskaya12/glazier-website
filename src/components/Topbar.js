import { useState } from "react";

function Topbar() {

    let [open, setOpen] = useState(false);

    const menuHandler = () => {
        setOpen(!open);
    }

  return (
    <div className="p-5 bg-slate-400 shadow md:flex md:items-center md:justify-between sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold cursor-pointer">
          <img className="h-10 inline" src="/assets/logoipsum-286.svg" alt="" />
        </span>
        <span className="text-4xl cursor-pointer mx-2 md:hidden block">
          <ion-icon name={open ? "close-outline" : "menu-outline"} onClick={menuHandler}></ion-icon>
        </span>
      </div>

      <ul className={`md:flex md:items-center z-0 md:z-auto md:static absolute bg-slate-400 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300 ${open ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"}`}>
        <li className="mx-4 my-6 md:my-0">
          <a href="/#" className="text-xl hover:text-white duration-200">
            Anasayfa
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/#" className="text-xl hover:text-white duration-200">
            Ürünler
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/#" className="text-xl hover:text-white duration-200">
            Projeler
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/#" className="text-xl hover:text-white duration-200">
            İletişim
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Topbar;
