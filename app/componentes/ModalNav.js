import React from "react";
import CTAButton from "./CTAButton";

function ModalNav() {
  return (
    <div className="fixed bottom-5 flex flex-row items-center justify-center gap-1 p-1 bg-zinc-50/25 border border-zinc-50/25 backdrop-blur rounded-full">
      <div className="h-[47px] w-[47px] flex items-center justify-center bg-white rounded-full">
        <img src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png" className="h-[30px] w-[30px] object-cover"></img>
      </div>
      <CTAButton text="Visit Site" type="secondary"/>
      <CTAButton text="Let's talk" type="primary"/>
      <div className="h-[47px] w-[47px] flex items-center justify-center bg-white rounded-full"></div>
    </div>
  );
}

export default ModalNav;
