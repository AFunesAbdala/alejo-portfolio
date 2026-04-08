"use client";

import React from "react";
import { useRouter } from "next/navigation";
import HandIcon from "../icons/HandIcon";
import Link from "next/link";

function CTAButton({ text = "click", type = "primary", setIsPopUp, linkTo, blank }) {
  const router = useRouter();
  return (
    <div className="w-fit h-fit">
      {linkTo ? (
        <Link
          href={linkTo}
          target={blank ? "_blank" : ""}
          className={`w-fit flex flex-row items-center gap-2 px-7.5 py-3.75 ${(type == "primary") | (type == "contact") ? "bg-[#6841F2] text-white" : "bg-white"} rounded-full  leading-4.25 cursor-pointer duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl`}
        >
          {text}
        </Link>
      ) : (
        <button
          className={`w-fit flex flex-row items-center gap-2 px-7.5 py-3.75 ${(type == "primary") | (type == "contact") ? "bg-[#6841F2] text-white" : "bg-white"} rounded-full  leading-4.25 cursor-pointer duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl`}
          onClick={() => {
            if (type === "contact" || type === "primary") {
              setIsPopUp(true);
            } else {
              router.back();
            }
          }}
        >
          {type === "contact" && <HandIcon />}
          {text}
        </button>
      )}
    </div>
  );
}

export default CTAButton;
