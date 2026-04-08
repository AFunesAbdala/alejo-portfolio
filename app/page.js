"use client";

import { useState } from "react";
import { ArrowDecorative } from "./componentes/ArrowDecorative";
import { CircleBorder } from "./componentes/CircleBorder";
import CTAButton from "./componentes/CTAButton";
import DecorativeFrame from "./componentes/DecorativeFrame";
import EyeAnimation from "./componentes/EyeAnimation";
import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";
import ArrowUpIcon from "./icons/ArrowUpIcon";
import HandIcon from "./icons/HandIcon";
import HoverCircles from "./componentes/HoverCircles";
import StarIcon from "./icons/StarIcon";
import LoaderIcon from "./icons/Loader";
import FormContact from "./componentes/Form";

export default function Home() {
  const [numberProyect, setIsNumberProyect] = useState(0);
  const [isNumberStar, setIsNumberStar] = useState(0);
  const [isPopUp, setIsPopUp] = useState(false);

  return (
    <div className="relative z-0 flex flex-col items-center justify-center bg-zinc-50 overflow-hidden">
      <Navbar></Navbar>
      <div className="absolute w-full flex flex-col items-center -z-1 -top-18 inset-0">
        <EyeAnimation></EyeAnimation>
      </div>
      <DecorativeFrame></DecorativeFrame>
      <div className="flex flex-col items-center justify-center w-full sm:max-w-360 sm:p-40 pt-40 px-2 mb-20">
        <div className="flex flex-col gap-52 w-full sm:max-w-283.5">
          <div className="flex flex-col items-center gap-25">
            <div className="hidden w-full sm:flex flex-row items-center justify-between">
              <div className="w-full flex flex-row gap-12.5">
                <a
                  href="https://www.linkedin.com/in/alejo-funes-abdala/"
                  target="_blank"
                  className="flex flex-row items-center gap-2 text-sm"
                >
                  LINKEDIN
                  <ArrowUpIcon></ArrowUpIcon>
                </a>
                <a
                  href="https://www.behance.net/alejofunesd4eb"
                  target="_blank"
                  className="flex flex-row items-center gap-2 text-sm"
                >
                  BEHANCE
                  <ArrowUpIcon></ArrowUpIcon>
                </a>
                <a
                  href="https://drive.google.com/file/d/1LgEDw9CzfC4AMhb6PmepHioidiqNO8Pf/view?usp=drive_link"
                  target="_blank"
                  className="flex flex-row items-center gap-2 text-sm"
                >
                  READ.CV
                  <ArrowUpIcon></ArrowUpIcon>
                </a>
                <a
                  href="mailto:alejofunes1@gmail.com"
                  className="flex flex-row items-center gap-2 text-sm"
                >
                  E-MAIL
                  <ArrowUpIcon></ArrowUpIcon>
                </a>
              </div>
              <img
                src="/img/alejo_logo_colored.png"
                className="w-12.5 h-12.5 object-cover"
              ></img>
            </div>
            <h2 className="w-full flex items-center justify-center py-4 text-[64px] font-semibold leading-12 -tracking-[6px] bg-linear-to-b from-[#1100FF] via-[#897DFF] to-[#F0E8FF] bg-clip-text text-transparent">
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
          <div className="flex flex-col sm:grid grid-cols-2 sm:gap-20 gap-8 w-full sm:max-w-283.5">
            <p className="max-w-131.5">
              I’m a product designer at Adinfluence. I create interfaces that
              work beautifully, driven by simplicity and purpose.
            </p>
            <CTAButton
              text="say hello"
              type="contact"
              setIsPopUp={setIsPopUp}
            ></CTAButton>
            {isPopUp && (
              <div className="fixed top-0 left-0 z-50 w-full h-screen flex flex-col items-center justify-center backdrop-blur-lg">
                <div className="w-[550px] p-4 rounded-2xl bg-white shadow-xl shadow-zinc-100 fade-in">
                  <button
                    className="text-[#1100FF] tracking-tight cursor-pointer"
                    onClick={() => {
                      setIsPopUp(false);
                    }}
                  >
                    Close
                  </button>
                  <FormContact></FormContact>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 w-full sm:max-w-360 px-2 sm:px-0">
        <a
          className="relative h-45 flex items-center justify-center bg-zinc-100 rounded-xl duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(2);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/switchwear_logo.png"
            className="w-full h-full object-cover rounded-xl"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 bg-linear-to-t from-[#ffffff] via-[#ffffff00] to-[#ffffff00] duration-800 rounded-xl sm:opacity-0 opacity-100 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-sm leading-4">
              Switch Wear
              <br></br>
              Branding
            </p>
          </div>
          <HoverCircles number={2} status={numberProyect === 2}></HoverCircles>
        </a>
        <div className="relative h-45 flex items-center justify-center border border-zinc-200 rounded-xl duration-400 hover:scale-105">
          <div className="absolute flex flex-col gap-2 items-center justify-center h-full w-full duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <LoaderIcon />
            <p className="text-center text-sm text-zinc-400 leading-4">
              Future Proyect
            </p>
          </div>
        </div>
        <a
          href="/adinfluence"
          className="relative h-45 flex items-center justify-center bg-zinc-100 rounded-xl col-span-2 duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(15);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/adinfluence_logo.png"
            className="w-full h-full object-cover rounded-xl"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 bg-linear-to-t from-[#09090b] via-[#09090b00] to-[#09090b00] duration-800 rounded-xl sm:opacity-0 opacity-100 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-white text-sm leading-4">
              Adinfluence
              <br></br>
              Website Redesign
            </p>
          </div>
          <HoverCircles
            number={15}
            status={numberProyect === 15}
          ></HoverCircles>
        </a>
        <a
          href="https://www.hinfluencer.cl/"
          target="_blank"
          className="relative h-45 flex items-center justify-center bg-zinc-100 rounded-xl duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(14);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/hinfluencer_logo.png"
            className="w-full h-full object-cover rounded-xl"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 bg-linear-to-t from-[#09090b] via-[#09090b00] to-[#09090b00] duration-800 rounded-xl sm:opacity-0 opacity-100 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-white text-sm leading-4">
              Hi Influencer
              <br></br>
              Landing Website
            </p>
          </div>
          <HoverCircles
            number={14}
            status={numberProyect === 14}
          ></HoverCircles>
        </a>
        <div className="hidden relative h-45 sm:flex items-center justify-center border border-zinc-200 rounded-xl duration-400 hover:scale-105">
          <div className="absolute flex flex-col gap-2 items-center justify-center h-full w-full duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <LoaderIcon />
            <p className="text-center text-sm text-zinc-400 leading-4">
              Future Proyect
            </p>
          </div>
        </div>
        <a
          className="relative h-45 flex items-center justify-center bg-zinc-100 rounded-xl duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(17);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/sibolife_logo.png"
            className="w-full h-full object-cover rounded-xl"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 bg-linear-to-t from-[#ffffff] via-[#ffffff00] to-[#ffffff00] duration-800 rounded-xl sm:opacity-0 opacity-100 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-sm leading-4">
              Sibo Life
              <br></br>
              App Design
            </p>
          </div>
          <HoverCircles
            number={17}
            status={numberProyect === 17}
          ></HoverCircles>
        </a>
        <a
          className="relative h-full flex items-center justify-center bg-zinc-100 rounded-xl row-span-2 col-span-2 duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(6);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/destiny_logo.png"
            className="w-full h-full object-cover rounded-xl"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 bg-linear-to-t from-[#09090b] via-[#09090b00] to-[#09090b00] duration-800 rounded-xl sm:opacity-0 opacity-100 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-white text-sm leading-4">
              Destiny 2 Companion
              <br></br>
              App Redesign <span className="text-zinc-300">(Coming Soon)</span>
            </p>
          </div>
          <HoverCircles number={6} status={numberProyect === 6}></HoverCircles>
        </a>
        <div className="hidden relative h-45 sm:flex items-center justify-center border border-zinc-200 rounded-xl duration-400 hover:scale-105">
          <div className="absolute flex flex-col gap-2 items-center justify-center h-full w-full duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <LoaderIcon />
            <p className="text-center text-sm text-zinc-400 leading-4">
              Future Proyect
            </p>
          </div>
        </div>
        <a
          className="relative flex items-center justify-center bg-zinc-100 rounded-xl row-span-2 duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(8);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/apple_notes.png"
            className="w-full h-full object-cover rounded-xl transform-gpu"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 bg-linear-to-t from-[#ffffff] via-[#ffffff00] to-[#ffffff00] duration-800 rounded-xl sm:opacity-0 opacity-100 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-sm leading-4">
              Apple Notes
              <br></br>
              <span className="text-zinc-600">(Coming Soon)</span>
            </p>
          </div>
          <HoverCircles number={8} status={numberProyect === 8}></HoverCircles>
        </a>
        <div className="hidden relative h-45 sm:flex items-center justify-center border border-zinc-200 rounded-xl duration-400 hover:scale-105">
          <div className="absolute flex flex-col gap-2 items-center justify-center h-full w-full duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <LoaderIcon />
            <p className="text-center text-sm text-zinc-400 leading-4">
              Future Proyect
            </p>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1WZWVJK4N7xr-lO1dGYWr3ol3FD-qOfcB/view?usp=sharing"
          target="_blank"
          className="relative h-45 flex items-center justify-center bg-zinc-100 rounded-xl duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(12);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/vallax_logo.png"
            className="w-full h-full object-cover rounded-xl"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 bg-linear-to-t from-[#09090b] via-[#09090b00] to-[#09090b00] duration-800 rounded-xl sm:opacity-0 opacity-100 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-white text-sm leading-4">
              Vallax
              <br></br>
              Branding
            </p>
          </div>
          <HoverCircles
            number={12}
            status={numberProyect === 12}
          ></HoverCircles>
        </a>
        <div className="relative h-45 flex items-center justify-center border border-zinc-200 rounded-xl duration-400 hover:scale-105">
          <div className="absolute flex items-center justify-center h-full w-full duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-sm text-zinc-400 leading-4">
              Our Proyect
              <br></br>
              Here 😉
            </p>
          </div>
        </div>
        <a
          href="https://www.behance.net/gallery/153651021/NUBU-GAME-DEV"
          target="_blank"
          className="relative flex items-center justify-center bg-zinc-100 rounded-xl row-span-2 duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(1);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/nubu_logo.png"
            className="w-full h-full object-cover rounded-xl transform-gpu"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 bg-linear-to-t from-[#09090b] via-[#09090b00] to-[#09090b00] duration-800 sm:opacity-0 opacity-100 rounded-xl hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-sm leading-4 text-white">
              Nubu
              <br></br>
              Videogame Design
            </p>
          </div>
          <HoverCircles number={8} status={numberProyect === 1}></HoverCircles>
        </a>
        <div className="relative h-45 flex items-center justify-center border border-zinc-200 rounded-xl duration-400 hover:scale-105">
          <div className="absolute flex flex-col gap-2 items-center justify-center h-full w-full duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <LoaderIcon />
            <p className="text-center text-sm text-zinc-400 leading-4">
              Future Proyect
            </p>
          </div>
        </div>
        <a
          href="https://www.behance.net/alejofunesd4eb"
          target="_blank"
          className="relative h-45 flex items-center justify-center bg-zinc-100 rounded-xl duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(10);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/motion.png"
            className="w-full h-full object-cover rounded-xl"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 bg-linear-to-t from-[#ffffff] via-[#ffffff00] to-[#ffffff00] duration-800 rounded-xl sm:opacity-0 opacity-100 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-sm leading-4">
              Motion Design
              <br></br>
              Library
            </p>
          </div>
          <HoverCircles
            number={10}
            status={numberProyect === 10}
          ></HoverCircles>
        </a>
        <a
          href="https://www.figma.com/proto/WB3FDh2u9yAr002KkCS3EQ/UNLAR-%3E-SAE?node-id=8-330&page-id=0%3A1&starting-point-node-id=8%3A330&t=taxygGzBX8YM5I0P-1"
          target="_blank"
          className="relative h-45 flex items-center justify-center bg-zinc-100 rounded-xl col-span-2 duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(4);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/students_app_logo.png"
            className="w-full h-full object-cover rounded-xl"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 bg-linear-to-t from-[#ffffff] via-[#ffffff00] to-[#ffffff00] duration-800 rounded-xl sm:opacity-0 opacity-100 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-sm leading-4">
              Student's App
              <br></br>
              Ux/Ui Design
            </p>
          </div>
          <HoverCircles number={4} status={numberProyect === 4}></HoverCircles>
        </a>
        <div className="hidden relative h-45 sm:flex items-center justify-center border border-zinc-200 rounded-xl duration-400 hover:scale-105">
          <div className="absolute flex flex-col gap-2 items-center justify-center h-full w-full duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <LoaderIcon />
            <p className="text-center text-sm text-zinc-400 leading-4">
              Future Proyect
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-360 px-2 sm:p-40 mt-20 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 w-full sm:max-w-283.5">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tighter">
              PRODUCT DESIGN
            </h2>
            <div className="w-full flex flex-row gap-12">
              <div className="w-full flex flex-col">
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(1);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>DISCOVERY</p>
                  <StarIcon animation={isNumberStar === 1} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(2);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>USER FLOWS</p>
                  <StarIcon animation={isNumberStar === 2} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(3);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>USER TESTING</p>
                  <StarIcon animation={isNumberStar === 3} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(4);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>COMPETITOR ANALYSIS</p>
                  <StarIcon animation={isNumberStar === 4} />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(5);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>RESEARCH</p>
                  <StarIcon animation={isNumberStar === 5} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(6);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>BRAND IDENTITY</p>
                  <StarIcon animation={isNumberStar === 6} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(7);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>USABILITY TESTING</p>
                  <StarIcon animation={isNumberStar === 7} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(8);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>UX/UI DESIGN</p>
                  <StarIcon animation={isNumberStar === 8} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tighter">
              BRANDING
            </h2>
            <div className="w-full flex flex-row gap-12">
              <div className="w-full flex flex-col">
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(9);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>BRAND IDENTITY</p>
                  <StarIcon animation={isNumberStar === 9} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(10);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>BRAND KIT</p>
                  <StarIcon animation={isNumberStar === 10} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(11);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>MOTION & 3D</p>
                  <StarIcon animation={isNumberStar === 11} />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(12);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>BRAND POSITIONING</p>
                  <StarIcon animation={isNumberStar === 12} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(13);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>BRAND TONE OF VOICE</p>
                  <StarIcon animation={isNumberStar === 13} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(14);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>CREATIVE DIRECTION</p>
                  <StarIcon animation={isNumberStar === 14} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tighter">
              UX/UI DESIGN
            </h2>
            <div className="w-full flex flex-row gap-12">
              <div className="w-full flex flex-col">
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(15);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>NATIVE IOS APPS</p>
                  <StarIcon animation={isNumberStar === 15} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(16);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>NATIVE ANDROID APPS</p>
                  <StarIcon animation={isNumberStar === 16} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(17);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>WEB APPS</p>
                  <StarIcon animation={isNumberStar === 17} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(18);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>DESIGN SYSTEMS</p>
                  <StarIcon animation={isNumberStar === 18} />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(19);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>PROTOTYPING</p>
                  <StarIcon animation={isNumberStar === 19} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(20);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>LANDING PAGES</p>
                  <StarIcon animation={isNumberStar === 20} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(21);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>INTERACTION DESIGNS</p>
                  <StarIcon animation={isNumberStar === 21} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tighter">
              DEVELOPMENT
            </h2>
            <div className="w-full flex flex-row gap-12">
              <div className="w-full flex flex-col">
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(22);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>NO-CODE 3D</p>
                  <StarIcon animation={isNumberStar === 22} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(23);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>WEBFLOW</p>
                  <StarIcon animation={isNumberStar === 23} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(24);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>FRAMER</p>
                  <StarIcon animation={isNumberStar === 24} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(25);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>MOTION</p>
                  <StarIcon animation={isNumberStar === 25} />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(26);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>HTML / CSS</p>
                  <StarIcon animation={isNumberStar === 26} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(27);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>NEXT.JS / REACT NATIVE</p>
                  <StarIcon animation={isNumberStar === 27} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(28);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>JAVASCRIPT / TYPESCRIPT</p>
                  <StarIcon animation={isNumberStar === 28} />
                </div>
                <div
                  className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400 duration-200 hover:text-purple-600 hover:border-purple-600"
                  onMouseEnter={() => {
                    setIsNumberStar(29);
                  }}
                  onMouseLeave={() => {
                    setIsNumberStar(0);
                  }}
                >
                  <p>API REST</p>
                  <StarIcon animation={isNumberStar === 29} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center w-full sm:max-w-360 overflow-hidden mt-20 sm:mt-0 px-2 sm:px-0">
        <div className="relative flex items-center justify-center w-180 h-180">
          <CircleBorder
            rotate={"rotate-[-90deg]"}
            r="50%"
            color="#d4d4d8"
          ></CircleBorder>
          <CircleBorder
            rotate={"rotate-[-225deg]"}
            r="48.5%"
            color="#a1a1aa"
          ></CircleBorder>
          <div className="relative flex items-center w-175 h-175 rounded-full overflow-hidden">
            <div className="absolute flex flex-col items-center gap-2">
              <div className="max-w-175 flex items-center">
                <div className="flex items-center animate-scroll">
                  <p className="h-30 flex items-center text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    transform.authentyc.
                  </p>
                  <p className="h-30 flex items-center text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    transform.authentyc.
                  </p>
                </div>
                <div className="flex items-center animate-scroll">
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    transform.authentyc.
                  </p>
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    transform.authentyc.
                  </p>
                </div>
              </div>
              <div className="max-w-175 flex flex-row-reverse items-center">
                <div className="flex items-center animate-scroll-r">
                  <p className="h-30 flex items-center text-[150px] tracking-tighter text-zinc-950 font-semibold">
                    shift.identity.
                  </p>
                  <p className="h-30 flex items-center text-[150px] tracking-tighter text-zinc-950 font-semibold">
                    shift.identity.
                  </p>
                </div>
                <div className="flex items-center animate-scroll-r">
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter text-zinc-950 font-semibold">
                    shift.identity.
                  </p>
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter text-zinc-950 font-semibold">
                    shift.identity.
                  </p>
                </div>
              </div>
              <div className="max-w-175 flex items-center">
                <div className="flex items-center animate-scroll">
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter font-semibold bg-linear-to-b from-[#1100FF] via-[#897DFF] to-[#F0E8FF]  bg-clip-text text-transparent">
                    evolve.self.
                  </p>
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter font-semibold bg-linear-to-b from-[#1100FF] via-[#897DFF] to-[#F0E8FF]  bg-clip-text text-transparent">
                    evolve.self.
                  </p>
                </div>
                <div className="flex items-center animate-scroll">
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter font-semibold bg-linear-to-b from-[#1100FF] via-[#897DFF] to-[#F0E8FF]  bg-clip-text text-transparent">
                    evolve.self.
                  </p>
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter font-semibold bg-linear-to-b from-[#1100FF] via-[#897DFF] to-[#F0E8FF]  bg-clip-text text-transparent">
                    evolve.self.
                  </p>
                </div>
              </div>
              <div className="max-w-175 flex flex-row-reverse items-center">
                <div className="flex items-center animate-scroll-r">
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter text-zinc-950 font-semibold">
                    form.transcend.
                  </p>
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter text-zinc-950 font-semibold">
                    form.transcend.
                  </p>
                </div>
                <div className="flex items-center animate-scroll-r">
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter text-zinc-950 font-semibold">
                    form.transcend.
                  </p>
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter text-zinc-950 font-semibold">
                    form.transcend.
                  </p>
                </div>
              </div>
              <div className="max-w-175 flex items-center">
                <div className="flex items-center animate-scroll">
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    becoming.true.
                  </p>
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    becoming.true.
                  </p>
                </div>
                <div className="flex items-center animate-scroll">
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    becoming.true.
                  </p>
                  <p className="h-30 flex items-center justify-center text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    becoming.true.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-180 h-180">
          <CircleBorder
            rotate={"rotate-[-0deg]"}
            r="50%"
            color="#d4d4d8"
          ></CircleBorder>
          <CircleBorder
            rotate={"rotate-[-225deg]"}
            r="48.5%"
            color="#a1a1aa"
          ></CircleBorder>
          <div className=" flex items-center justify-center w-175 h-175 rounded-full overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/aa/88/89/aa8889318f0dbd57d584f8b68f039211.jpg"
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col sm:flex-row sm:items-center justify-center px-2 sm:px-0 mt-20 sm:mt-0">
        <ArrowDecorative></ArrowDecorative>
        <div className="flex flex-col items-center justify-center w-full sm:max-w-360 sm:p-40">
          <div className="sm:grid grid-cols-2 gap-20 flex flex-col w-full sm:max-w-283.5">
            <div className="hidden sm:flex items-center">
              <div className="w-2.5 h-2.5 bg-zinc-950 rounded-full"></div>
            </div>
            <div>
              <p>
                I started my path in multimedia design, curious about how people
                interact with technology.
                <br></br>
                <br></br>
                After that, I discovered UX/UI as the perfect space where
                creativity meets problem-solving.
                <br></br>
                <br></br>
                Now, with experience at Adinfluence and freelance projects, I
                keep evolving—always designing with authenticity and simplicity
                at the core.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
