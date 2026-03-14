import Image from "next/image";
import Navbar from "./componentes/Navbar";
import ArrowUpIcon from "./icons/ArrowUpIcon";
import HandIcon from "./icons/HandIcon";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50">
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-360">
        <div className="flex flex-col gap-64 w-full max-w-283.5">
          <div className="flex flex-col items-center gap-28">
            <div className="w-full flex flex-row gap-12.5">
              <a href="#" className="flex flex-row items-center gap-2 text-sm">
                LINKEDIN
                <ArrowUpIcon></ArrowUpIcon>
              </a>
              <a href="#" className="flex flex-row items-center gap-2 text-sm">
                BEHANCE
                <ArrowUpIcon></ArrowUpIcon>
              </a>
              <a href="#" className="flex flex-row items-center gap-2 text-sm">
                READ.CV
                <ArrowUpIcon></ArrowUpIcon>
              </a>
              <a href="#" className="flex flex-row items-center gap-2 text-sm">
                E-MAIL
                <ArrowUpIcon></ArrowUpIcon>
              </a>
            </div>
            <h2 className="h-16 w-full flex items-center justify-center pb-2 text-[64px] font-semibold tracking-[-8%] bg-linear-to-b from-[#1100FF] via-[#897DFF] to-[#F0E8FF] bg-clip-text text-transparent">
              Designing experiences for real people.
            </h2>
            <div className="flex flex-col gap-2 items-center text-center">
              <p>
                “Design is not just what it looks like and feels like. <br></br>
                Design is how it works.”
              </p>
              <p className="italic text-zinc-500">Steve Jobs</p>
            </div>
          </div>
          <div className="flex flex-row gap-20 items-center">
            <p className="max-w-131.5">
              I’m a product designer at Adinfluence. I create interfaces that
              work beautifully, driven by simplicity and purpose.
            </p>
            <button className="flex flex-row items-center gap-2 px-7.5 py-3.75 bg-[#6841F2] rounded-full text-white leading-4.25">
              <HandIcon></HandIcon>
              say hello
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
