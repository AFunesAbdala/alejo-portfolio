import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center gap-25 w-full max-w-360 p-40">
      <div className="grid grid-cols-2 gap-20 w-full max-w-283.5">
        <div className="">
          <p>Solving needs. Shaping identity. Staying authentic.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20 w-full max-w-283.5 items-end">
        <div className="flex flex-col gap-2">
          <img
            src="/img/alejo_logo_colored.png"
            className="w-12.5 h-12.5 object-cover"
          ></img>
          <p className="text-sm">Made with LOVE</p>
        </div>
        <div className="w-full flex flex-col gap-2 items-end">
          <p className="text-sm"><b>ALEJO FUNES ABDALA</b> - PRODUCT & MULTIMEDIA DESIGNER</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
