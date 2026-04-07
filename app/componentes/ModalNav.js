import React from "react";
import CTAButton from "./CTAButton";
import ArrowTopIcon from "../icons/ArrowTopIcon";

function ModalNav({ proyect, linkToP, setIsPopUp }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Movimiento fluido
    });
  };

  return (
    <div className="fixed bottom-5 flex flex-row items-center justify-center gap-1 p-1 bg-zinc-50/25 border border-zinc-50/25 backdrop-blur rounded-full">
      <div className="h-[47px] w-[47px] flex items-center justify-center bg-white rounded-full">
        <img
          src={proyect === "adinfluence" ? "../img/adinfluence_logo_a.png" : ""}
          className="h-[24px] w-[24px] object-cover"
        ></img>
      </div>
      <CTAButton text="Visit Site" type="secondary" linkTo={linkToP} />
      <CTAButton text="Let's talk" type="primary" setIsPopUp={setIsPopUp} />
      <button
        className="h-[47px] w-[47px] flex items-center justify-center bg-white rounded-full cursor-pointer"
        onClick={() => {
          scrollToTop();
        }}
      >
        <ArrowTopIcon width="24" height="24" />
      </button>
    </div>
  );
}

export default ModalNav;
