import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center gap-25 w-full sm:max-w-360 sm:p-40 px-2 my-40 sm:my-0">
      <div className="grid grid-cols-2 gap-20 w-full max-w-283.5">
        <div className="">
          <p>Solving needs. Shaping identity. Staying authentic.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-20 gap-10 w-full max-w-283.5 sm:items-end">
        <div className="flex flex-col gap-2">
          <img
            src="/img/alejo_logo_colored.png"
            className="w-12.5 h-12.5 object-cover"
          ></img>
          <p className="text-sm">Made with LOVE</p>
        </div>
        <div className="w-full flex flex-col gap-2 sm:items-end">
          <p className="text-sm"><b>ALEJO FUNES ABDALA</b> - PRODUCT & MULTIMEDIA DESIGNER</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
