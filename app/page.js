import { ArrowDecorative } from "./componentes/ArrowDecorative";
import { CircleBorder } from "./componentes/CircleBorder";
import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";
import ArrowUpIcon from "./icons/ArrowUpIcon";
import HandIcon from "./icons/HandIcon";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50">
      <Navbar></Navbar>
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
              <img src="/img/alejo_logo_colored.png" className="w-12.5 h-12.5 object-cover"></img>
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
      <div className="grid grid-cols-6 gap-3 w-full max-w-360">
        <div className="flex items-center justify-center bg-zinc-100 rounded-xl row-span-2">
          1
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          2
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          3
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl col-span-2">
          4
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          5
        </div>
        <div className="h-full flex items-center justify-center bg-zinc-100 rounded-xl col-span-2 row-span-2">
          6
        </div>
        <div className="flex items-center justify-center bg-zinc-100 rounded-xl">
          7
        </div>
        <div className="flex items-center justify-center bg-zinc-100 rounded-xl row-span-2">
          8
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          9
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          10
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          11
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          12
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          13
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          14
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl col-span-2">
          15
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          16
        </div>
        <div className="h-45 flex items-center justify-center bg-zinc-100 rounded-xl">
          17
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-360 p-40">
        <div className="grid grid-cols-2 gap-20 w-full max-w-283.5">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tighter">
              PRODUCT DESIGN
            </h2>
            <div className="w-full flex flex-row gap-12">
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>DISCOVERY</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>USER FLOWS</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>USER TESTING</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>COMPETITOR ANALYSIS</p>
                  <p>A</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>RESEARCH</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>BRAND IDENTITY</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>USABILITY TESTING</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
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
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>BRAND IDENTITY</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>BRAND KIT</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>MOTION & 3D</p>
                  <p>A</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>BRAND POSITIONING</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>BRAND TONE OF VOICE</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
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
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>NATIVE IOS APPS</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>NATIVE ANDROID APPS</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>WEB APPS</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>DESIGN SYSTEMS</p>
                  <p>A</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>PROTOTYPING</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>LANDING PAGES</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
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
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>NO-CODE 3D</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>WEBFLOW</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>FRAMER</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>MOTION</p>
                  <p>A</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>HTML / CSS</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>NEXT.JS / REACT NATIVE</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>JAVASCRIPT / TYPESCRIPT</p>
                  <p>A</p>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-3.5 border-b border-b-zinc-300">
                  <p>API REST</p>
                  <p>A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-360">
        <div className="relative flex items-center justify-center w-180 h-180">
          <CircleBorder rotate={"rotate-[-90deg]"} r="50%"></CircleBorder>
          <CircleBorder rotate={"rotate-[-225deg]"} r="48.5%"></CircleBorder>
          <div className="relative flex items-center justify-center w-175 h-175 rounded-full overflow-hidden">
            <div className="absolute flex flex-col gap-28 items-center justify-center">
              <div className="flex items-center">
                <div>
                  <p className="text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    transform.authentyc.
                  </p>
                </div>
                <div>
                  <p className="text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    transform.authentyc.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="text-[150px] tracking-tighter text-zinc-950 font-semibold">
                    shift.identity.shift.
                  </p>
                </div>
                <div>
                  <p className="text-[150px] tracking-tighter text-zinc-950 font-semibold">
                    shift.identity.shift.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    evolve.self.evolve.
                  </p>
                </div>
                <div>
                  <p className="text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    evolve.self.evolve.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="text-[150px] tracking-tighter text-zinc-950 font-semibold">
                    form.transcend.
                  </p>
                </div>
                <div>
                  <p className="text-[150px] tracking-tighter text-zinc-950 font-semibold">
                    form.transcend.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    becoming.true.
                  </p>
                </div>
                <div>
                  <p className="text-[150px] tracking-tighter text-zinc-500 font-semibold">
                    becoming.true.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-180 h-180">
          <CircleBorder rotate={"rotate-[-90deg]"} r="50%"></CircleBorder>
          <CircleBorder rotate={"rotate-[-225deg]"} r="48.5%"></CircleBorder>
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
