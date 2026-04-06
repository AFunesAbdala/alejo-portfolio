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

export default function Home() {
  const [numberProyect, setIsNumberProyect] = useState(0);

  return (
    <div className="relative z-0 flex flex-col items-center justify-center bg-zinc-50 overflow-hidden">
      <Navbar></Navbar>
      <div className="absolute w-full flex flex-col items-center -z-1 -top-18 inset-0">
        <EyeAnimation></EyeAnimation>
      </div>
      <DecorativeFrame></DecorativeFrame>
      <div className="flex flex-col items-center justify-center w-full max-w-360 p-40">
        <div className="flex flex-col gap-52 w-full max-w-283.5">
          <div className="flex flex-col items-center gap-25">
            <div className="w-full flex flex-row items-center justify-between">
              <div className="w-full flex flex-row gap-12.5">
                <a
                  href="#"
                  className="flex flex-row items-center gap-2 text-sm"
                >
                  LINKEDIN
                  <ArrowUpIcon></ArrowUpIcon>
                </a>
                <a
                  href="#"
                  className="flex flex-row items-center gap-2 text-sm"
                >
                  BEHANCE
                  <ArrowUpIcon></ArrowUpIcon>
                </a>
                <a
                  href="#"
                  className="flex flex-row items-center gap-2 text-sm"
                >
                  READ.CV
                  <ArrowUpIcon></ArrowUpIcon>
                </a>
                <a
                  href="#"
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
          <div className="grid grid-cols-2 gap-20 w-full max-w-283.5">
            <p className="max-w-131.5">
              I’m a product designer at Adinfluence. I create interfaces that
              work beautifully, driven by simplicity and purpose.
            </p>
            <CTAButton text="say hello" type="contact"></CTAButton>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-3 w-full max-w-360">
        <a
          href="https://www.behance.net/gallery/153651021/NUBU-GAME-DEV"
          className="relative flex items-center justify-center bg-zinc-100 rounded-xl row-span-2 duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(1);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/nubu_game.png"
            className="w-full h-full object-cover rounded-xl transform-gpu"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 duration-800 opacity-0 rounded-xl hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-sm leading-4 text-white">
              Nubu
              <br></br>
              Videogame Design
            </p>
            <div className="pointer-events-none absolute -bottom-[180px] w-[200px] h-[200px] rounded-full bg-pink-500 blur-2xl"></div>
          </div>
          <HoverCircles number={8} status={numberProyect === 1}></HoverCircles>
        </a>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          2
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          3
        </div>
        <a
          href="/"
          className="relative h-45 flex items-center justify-center bg-zinc-100 rounded-xl col-span-2 duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(4);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/student_app.png"
            className="w-full h-full object-cover rounded-xl"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-sm leading-4">
              Student's App
              <br></br>
              Ux/Ui Design
            </p>
            <div className="pointer-events-none absolute -bottom-[180px] w-[200px] h-[200px] rounded-full bg-emerald-500 blur-2xl"></div>
          </div>
          <HoverCircles number={4} status={numberProyect === 4}></HoverCircles>
        </a>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          5
        </div>
        <a
          href="/"
          className="relative h-full flex items-center justify-center bg-zinc-100 rounded-xl row-span-2 col-span-2 duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(6);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/destiny_companion.png"
            className="w-full h-full object-cover rounded-xl"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-white text-sm leading-4">
              Destiny 2 Companion
              <br></br>
              App Redesign <span className="text-zinc-300">(Coming Soon)</span>
            </p>
            <div className="pointer-events-none absolute -bottom-[180px] w-[200px] h-[200px] rounded-full bg-blue-500 blur-2xl"></div>
          </div>
          <HoverCircles number={6} status={numberProyect === 6}></HoverCircles>
        </a>
        <div className="flex items-center justify-center bg-zinc-100 rounded-xl">
          7
        </div>
        <a
          href="/"
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
          <div className="absolute flex items-end justify-center h-full w-full pb-4 duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-sm leading-4">
              Apple Notes
              <br></br>
              <span className="text-zinc-600">(Coming Soon)</span>
            </p>
            <div className="pointer-events-none absolute -bottom-[180px] w-[200px] h-[200px] rounded-full bg-amber-200 blur-2xl"></div>
          </div>
          <HoverCircles number={8} status={numberProyect === 8}></HoverCircles>
        </a>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          9
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          10
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          11
        </div>
        <a
          href="/"
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
          <div className="absolute flex items-end justify-center h-full w-full pb-4 duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-white text-sm leading-4">
              Vallax
              <br></br>
              Branding
            </p>
            <div className="pointer-events-none absolute -bottom-[180px] w-[200px] h-[200px] rounded-full bg-teal-700 blur-2xl"></div>
          </div>
          <HoverCircles
            number={12}
            status={numberProyect === 12}
          ></HoverCircles>
        </a>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          13
        </div>
        <a
          href="https://www.hinfluencer.cl/"
          className="relative h-45 flex items-center justify-center bg-zinc-100 rounded-xl duration-400 hover:scale-105 hover:ring-1 hover:ring-white hover:shadow-xl hover:z-10"
          onMouseEnter={() => {
            setIsNumberProyect(14);
          }}
          onMouseLeave={() => {
            setIsNumberProyect(null);
          }}
        >
          <img
            src="./img/hi_influencer.png"
            className="w-full h-full object-cover rounded-xl"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-white text-sm leading-4">
              Hi Influencer
              <br></br>
              Landing Website
            </p>
            <div className="pointer-events-none absolute -bottom-[180px] w-[200px] h-[200px] rounded-full bg-[#EEFF0B] blur-2xl"></div>
          </div>
          <HoverCircles
            number={14}
            status={numberProyect === 14}
          ></HoverCircles>
        </a>
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
            src="./img/adinfluence_portada.png"
            className="w-full h-full object-cover rounded-xl"
          ></img>
          <div className="absolute flex items-end justify-center h-full w-full pb-4 duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-white text-sm leading-4">
              Adinfluence
              <br></br>
              Website Redesign
            </p>
            <div className="pointer-events-none absolute -bottom-[180px] w-[200px] h-[200px] rounded-full bg-purple-500 blur-2xl"></div>
          </div>
          <HoverCircles
            number={15}
            status={numberProyect === 15}
          ></HoverCircles>
        </a>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          16
        </div>
        <a
          href="/"
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
          <div className="absolute flex items-end justify-center h-full w-full pb-4 duration-800 rounded-xl opacity-0 hover:opacity-100 overflow-hidden">
            <p className="relative z-10 text-center text-sm leading-4">
              Sibo Life
              <br></br>
              App Design
            </p>
            <div className="pointer-events-none absolute -bottom-[180px] w-[200px] h-[200px] rounded-full bg-rose-300 blur-2xl"></div>
          </div>
          <HoverCircles
            number={17}
            status={numberProyect === 17}
          ></HoverCircles>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-360 p-40">
        <div className="grid grid-cols-2 gap-20 w-full max-w-283.5">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tighter">
              PRODUCT DESIGN
            </h2>
            <div className="w-full flex flex-row gap-12">
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>DISCOVERY</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>USER FLOWS</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>USER TESTING</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>COMPETITOR ANALYSIS</p>
                  <p>A</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>RESEARCH</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>BRAND IDENTITY</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>USABILITY TESTING</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>UX/UI DESIGN</p>
                  <p>A</p>
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
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>BRAND IDENTITY</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>BRAND KIT</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>MOTION & 3D</p>
                  <p>A</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>BRAND POSITIONING</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>BRAND TONE OF VOICE</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>CREATIVE DIRECTION</p>
                  <p>A</p>
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
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>NATIVE IOS APPS</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>NATIVE ANDROID APPS</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>WEB APPS</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>DESIGN SYSTEMS</p>
                  <p>A</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>PROTOTYPING</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>LANDING PAGES</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>INTERACTION DESIGNS</p>
                  <p>A</p>
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
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>NO-CODE 3D</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>WEBFLOW</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>FRAMER</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>MOTION</p>
                  <p>A</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>HTML / CSS</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>NEXT.JS / REACT NATIVE</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>JAVASCRIPT / TYPESCRIPT</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-400">
                  <p>API REST</p>
                  <p>A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-360 overflow-hidden">
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
      <div className="relative w-full flex items-center justify-center">
        <ArrowDecorative></ArrowDecorative>
        <div className="flex flex-col items-center justify-center w-full max-w-360 p-40">
          <div className="grid grid-cols-2 gap-20 w-full max-w-283.5">
            <div className="flex items-center">
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
