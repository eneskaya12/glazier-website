function Brand({ brand }) {
  return (
    <div className="md:w-40 w-auto shadow-xl m-2 cursor-pointer selection:bg-custom-theme selection:text-custom-white flex justify-center items-center">
      <div className="">
        <img className="w-40 h-40 object-fill" src={brand.src} alt="" />
      </div>
    </div>
  );
}

export default Brand;
