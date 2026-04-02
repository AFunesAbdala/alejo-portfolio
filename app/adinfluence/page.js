"use client";

import React, { useState } from "react";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import DecorativeFrame from "../componentes/DecorativeFrame";
import CTAButton from "../componentes/CTAButton";
import ModalNav from "../componentes/ModalNav";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import FormContact from "../componentes/Form";

const Adinfluence = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative z-0 flex flex-col items-center justify-center gap-20 bg-zinc-50">
      <Navbar></Navbar>
      <DecorativeFrame></DecorativeFrame>
      <div className="flex flex-col items-center justify-center w-full max-w-360 pt-40">
        <div className="flex flex-col gap-20 w-full max-w-280">
          <div className="flex flex-col items-center gap-25">
            <div className="w-full flex flex-row items-center justify-between">
              <div className="w-full flex flex-row items-center gap-12.5">
                <CTAButton text="go back" type="secondary"></CTAButton>
                <div className="flex flex-row items-center gap-8 text-sm">
                  <p className="text-zinc-600">Projects</p>
                  <p>{">"}</p>
                  <p>Adinfluence</p>
                </div>
              </div>
              <img
                src="/img/alejo_logo_colored.png"
                className="w-12.5 h-12.5 object-cover"
              ></img>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="h-21 w-full flex items-center justify-center text-[80px] font-semibold tracking-[-8%] bg-linear-to-b from-[#18181B] via-[#9A95A4] to-[#F0E8FF] bg-clip-text text-transparent">
                Adinfluence
              </h2>
              <h2 className="h-21 w-full flex items-center justify-center pb-2 text-[80px] font-semibold tracking-[-8%] bg-linear-to-b from-[#1100FF] via-[#897DFF] to-[#F0E8FF] bg-clip-text text-transparent">
                Website Redesign
              </h2>
              <h2 className="italic text-zinc-500 mt-6">
                Enhancing trust, conversion, and performance.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-20 w-full max-w-280">
            <div className="w-full flex flex-col gap-25">
              <div className="w-full flex flex-col gap-2">
                <p className="font-semibold text-lg">Who they are?</p>
                <p>
                  Adinfluence is a growing digital marketing agency helping
                  brands connect through performance and strategy.
                  <br></br>
                  <br></br>
                  But their website wasn’t keeping up. It didn’t reflect their
                  growth, it felt cluttered, and it failed to turn visits into
                  real leads.
                </p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="font-semibold text-lg">Why they needed change?</p>
                <p>
                  They wanted a site that built trust, looked professional, and
                  performed better without losing the brand’s authentic tone.
                  <br></br>
                  <br></br>
                  The challenge was to redesign their digital presence while
                  keeping everything simple, transparent, and human.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-10 w-full max-w-360 px-40 overflow-hidden">
        <h2 className="h-16 w-full flex items-center text-[56px] font-semibold tracking-[-8%] bg-linear-to-b from-[#18181B] via-[#9A95A4] to-[#F0E8FF] bg-clip-text text-transparent">
          Before the redesign
        </h2>
        <div className="flex flex-col justify-center w-full max-w-[836px] gap-8">
          <div className="w-full h-[410px]">
            <div
              className="h-full flex flex-row gap-12 flex-nowrap transition duration-300"
              style={{
                transform: `translateX(-${currentIndex * (836 + 48)}px)`,
              }}
            >
              <div className="relative shrink-0 w-[836px] h-full bg-zinc-100 rounded-3xl border border-zinc-200">
                <div className="w-full absolute bottom-11 flex flex-row items-center justify-between px-10">
                  <h3 className="text-[28px] font-semibold tracking-tighter">
                    Hero
                  </h3>
                  <p className="text-sm text-zinc-500 bg-white py-1.5 px-2.5 rounded-lg">
                    Lacked personality, weak navigation segmentation, and no
                    clear introductory text.
                  </p>
                </div>
              </div>
              <div className="relative shrink-0 w-[836px] h-full bg-zinc-100 rounded-3xl border border-zinc-200">
                <div className="w-full absolute bottom-11 flex flex-row items-center justify-between px-10">
                  <h3 className="text-[28px] font-semibold tracking-tighter">
                    Conversion
                  </h3>
                  <p className="text-sm text-zinc-500 bg-white py-1.5 px-2.5 rounded-lg">
                    The quote form mixed influencers and business leads,
                    creating confusion
                  </p>
                </div>
              </div>
              <div className="relative shrink-0 w-[836px] h-full bg-zinc-100 rounded-3xl border border-zinc-200">
                <div className="w-full absolute bottom-11 flex flex-row items-center justify-between px-10">
                  <h3 className="text-[28px] font-semibold tracking-tighter">
                    Case Studies
                  </h3>
                  <p className="text-sm text-zinc-500 bg-white py-1.5 px-2.5 rounded-lg">
                    Insufficient results shown and overly long copy.
                  </p>
                </div>
              </div>
              <div className="relative shrink-0 w-[836px] h-full bg-zinc-100 rounded-3xl border border-zinc-200">
                <div className="w-full absolute bottom-11 flex flex-row items-center justify-between px-10">
                  <h3 className="text-[28px] font-semibold tracking-tighter">
                    Services
                  </h3>
                  <p className="text-sm text-zinc-500 bg-white py-1.5 px-2.5 rounded-lg">
                    Limited information and low credibility in content
                    presentation.
                  </p>
                </div>
              </div>
              <div className="relative shrink-0 w-[836px] h-full bg-zinc-100 rounded-3xl border border-zinc-200">
                <h3 className="absolute left-10 top-11 text-[28px] font-semibold tracking-tighter">
                  Visual Elements
                </h3>
                <div className="absolute left-10 bottom-11 flex flex-col gap-2">
                  <p className="w-fit text-sm text-zinc-500 bg-white py-1.5 px-2.5 rounded-lg">
                    Poor color balance, low contrast, inconsistent spacing, and
                    uneven typography sizes.
                  </p>
                  <p className="w-fit text-sm text-zinc-500 bg-white py-1.5 px-2.5 rounded-lg">
                    Decorative elements interrupted readability and overall user
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit flex flex-row items-center justify-center gap-4 p-5 bg-white rounded-full">
            <div
              className={`${currentIndex === 0 ? "w-12 bg-zinc-800 border border-zinc-800" : "w-2 bg-zinc-100 border border-zinc-200"} h-2 rounded-full transition-[width] duration-200 cursor-pointer`}
              onClick={() => setCurrentIndex(0)}
            ></div>
            <div
              className={`${currentIndex === 1 ? "w-12 bg-zinc-800 border border-zinc-800" : "w-2 bg-zinc-100 border border-zinc-200"} h-2 rounded-full transition-[width] duration-200 cursor-pointer`}
              onClick={() => setCurrentIndex(1)}
            ></div>
            <div
              className={`${currentIndex === 2 ? "w-12 bg-zinc-800 border border-zinc-800" : "w-2 bg-zinc-100 border border-zinc-200"} h-2 rounded-full transition-[width] duration-200 cursor-pointer`}
              onClick={() => setCurrentIndex(2)}
            ></div>
            <div
              className={`${currentIndex === 3 ? "w-12 bg-zinc-800 border border-zinc-800" : "w-2 bg-zinc-100 border border-zinc-200"} h-2 rounded-full transition-[width] duration-200 cursor-pointer`}
              onClick={() => setCurrentIndex(3)}
            ></div>
            <div
              className={`${currentIndex === 4 ? "w-12 bg-zinc-800 border border-zinc-800" : "w-2 bg-zinc-100 border border-zinc-200"}  h-2 rounded-full transition-[width] duration-200 cursor-pointer`}
              onClick={() => setCurrentIndex(4)}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-360">
        <div className="flex flex-col gap-20 w-full max-w-280">
          <div className="grid grid-cols-2 gap-20 w-full max-w-280">
            <div className="w-full flex flex-col gap-25">
              <div className="w-full flex flex-col gap-2">
                <p className="font-semibold text-lg">How I approached it?</p>
                <p>
                  I led the redesign from UX/UI strategy to Webflow development.
                  <br></br>
                  <br></br>I studied user behavior, simplified navigation, and
                  restructured the information architecture so users could find
                  what they needed effortlessly.
                  <br></br>
                  <br></br>
                  Each interface decision aimed to make Adinfluence feel more
                  reliable, modern, and aligned with its identity. I redefined
                  the brand story through a clearer value proposition and
                  hierarchy that naturally guided users from awareness to
                  action.
                  <br></br>
                  <br></br>
                  On the technical side, I built a scalable CMS on Webflow,
                  optimized performance and SEO, and designed a fully
                  responsive, mobile-first experience with smooth
                  microinteractions that reinforced the brand’s storytelling.
                  <br></br>
                  <br></br>I also automated lead capture, making the site easier
                  to manage and ready to grow.
                </p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="font-semibold text-lg">What came out of it?</p>
                <p>
                  The new site loads faster, converts better, and communicates
                  trust through a cleaner, more intentional design.
                  <br></br>
                  <br></br>
                  It’s not just a visual upgrade — it’s a complete shift in how
                  Adinfluence presents itself to clients: confident,
                  transparent, and true to who they are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-10 w-full max-w-360 px-40">
        <h2 className="h-16 w-full flex items-center text-[56px] font-semibold tracking-[-8%] bg-linear-to-b from-[#1100FF] via-[#897DFF] to-[#F0E8FF] bg-clip-text text-transparent">
          Design that builds trust
        </h2>
        <div className="w-full h-[410px] bg-[#040011] rounded-3xl"></div>
        <div className="w-full h-[410px] bg-[#040011] rounded-3xl"></div>
        <div className="w-full h-[410px] bg-[#040011] rounded-3xl"></div>
        <div className="w-full h-[410px] bg-[#040011] rounded-3xl"></div>
      </div>
      <div className="flex flex-col justify-center gap-10 w-full max-w-360 px-40">
        <h2 className="h-16 w-full flex items-center text-[56px] font-semibold tracking-[-8%] text-zinc-800">
          Measured impact
        </h2>
        <div className="w-full grid grid-cols-3 gap-9">
          <div className="w-full h-[200px] flex flex-col items-start justify-end gap-2 p-10 rounded-3xl bg-white border border-zinc-100 shadow-xl shadow-zinc-200/30">
            <p className="text-[28px] font-semibold">+155% clicks.</p>
            <p className="text-zinc-500 italic">Traffic increase.</p>
          </div>
          <div className="w-full h-[200px] flex flex-col items-start justify-end gap-2 p-10 rounded-3xl bg-white border border-zinc-100 shadow-xl shadow-zinc-200/30">
            <p className="text-[28px] font-semibold">+56% submissions.</p>
            <p className="text-zinc-500 italic">Higher conversion rate.</p>
          </div>
          <div className="w-full h-[200px] flex flex-col items-start justify-end gap-2 p-10 rounded-3xl bg-white border border-zinc-100 shadow-xl shadow-zinc-200/30">
            <p className="text-[28px] font-semibold">+62% impressions.</p>
            <p className="text-zinc-500 italic">Organic reach growth.</p>
          </div>
          <div className="w-full h-[200px] flex flex-col items-start justify-end gap-2 p-10 rounded-3xl bg-white border border-zinc-100 shadow-xl shadow-zinc-200/30">
            <p className="text-[28px] font-semibold">−45% load time.</p>
            <p className="text-zinc-500 italic">Higher engagement quality.</p>
          </div>
          <div className="w-full h-[200px] flex flex-col items-start justify-end gap-2 p-10 rounded-3xl bg-white border border-zinc-100 shadow-xl shadow-zinc-200/30">
            <p className="text-[28px] font-semibold">+52% views on case studies</p>
            <p className="text-zinc-500 italic">Content exploration.</p>
          </div>
          <div className="w-full h-[200px] flex flex-col items-start justify-end gap-2 p-10 rounded-3xl bg-white border border-zinc-100 shadow-xl shadow-zinc-200/30">
            <p className="text-[28px] font-semibold">Automated lead flow through Make</p>
            <p className="text-zinc-500 italic">Integrated third-party apps.</p>
          </div>
        </div>
        <p className="text-[13px] text-zinc-500">Data source: Google Search Console — comparing Jun–Aug 2024 vs Jun–Aug 2025.</p>
      </div>
      <FormContact></FormContact>
      <ModalNav></ModalNav>
      <Footer></Footer>
    </div>
  );
};

export default Adinfluence;
