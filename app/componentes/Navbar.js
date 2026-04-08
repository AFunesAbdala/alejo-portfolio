"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LocationIcon from "../icons/LocationIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-2 sm:top-4 px-2 sm:px-0 w-full max-w-349 z-50">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center sm:gap-12.5 gap-2 py-4 pl-4 pr-5 bg-zinc-50/25 border border-zinc-50/25 backdrop-blur rounded-full">
        <div className="flex gap-2 items-center text-sm text-zinc-900">
          <LocationIcon></LocationIcon>
          Working from <b>Córdoba, Argentina</b>
        </div>
        {pathname != "/" && (
          <div className="flex gap-12.5 grow">
            <a
              href="https://www.linkedin.com/in/alejo-funes-abdala/"
              target="blank"
              className="flex flex-row items-center gap-2 text-xs"
            >
              LINKEDIN
              <ArrowUpIcon width="8" height="8"></ArrowUpIcon>
            </a>
            <a
              href="https://www.behance.net/alejofunesd4eb"
              target="_blank"
              className="flex flex-row items-center gap-2 text-xs"
            >
              BEHANCE
              <ArrowUpIcon width="8" height="8"></ArrowUpIcon>
            </a>
            <a
              href="https://drive.google.com/file/d/1LgEDw9CzfC4AMhb6PmepHioidiqNO8Pf/view?usp=drive_link"
              target="_blank"
              className="flex flex-row items-center gap-2 text-xs"
            >
              READ.CV
              <ArrowUpIcon width="8" height="8"></ArrowUpIcon>
            </a>
            <a
              href="mailto:alejofunes1@gmail.com"
              className="flex flex-row items-center gap-2 text-xs"
            >
              E-MAIL
              <ArrowUpIcon width="8" height="8"></ArrowUpIcon>
            </a>
          </div>
        )}
        <div className="text-sm flex flex-col sm:block sm:text-right text-center text-zinc-900">
          <b>ALEJO FUNES ABDALA</b> <span className="hidden sm:inline">-</span> PRODUCT & MULTIMEDIA DESIGNER
        </div>
      </div>
    </nav>
  );
}
