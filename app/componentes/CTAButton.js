import React from "react";
import HandIcon from "../icons/HandIcon";

function CTAButton({ text = "click", type = "primary" }) {
  return (
    <button
      className={`w-fit flex flex-row items-center gap-2 px-7.5 py-3.75 ${type == "primary" | type == "contact" ? "bg-[#6841F2] text-white" : "bg-white"} rounded-full  leading-4.25`}
    >
      {type === "contact" && <HandIcon />}
      {text}
    </button>
  );
}

export default CTAButton;
