

function GoTop () {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };


  return (
    <div className="bg-custom-theme hover:bg-custom-darkTheme text-4xl text-custom-white rounded-lg md:w-14 w-11 md:h-14 h-11 fixed md:bottom-12 bottom-4 md:right-12 right-4 flex justify-center items-center cursor-pointer" onClick={scrollToTop}>
        <ion-icon name="chevron-up-outline"></ion-icon>
    </div>
    );
}

export default GoTop;
