"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LocationIcon from "../icons/LocationIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-5 z-50 w-full max-w-349 flex justify-between items-center gap-12.5 py-4 pl-4 pr-5 bg-zinc-50/25 border border-zinc-50/25 backdrop-blur rounded-full">
      <div className="flex gap-2 items-center text-sm text-zinc-900">
        <LocationIcon></LocationIcon>
        Working from <b>Córdoba, Argentina</b>
      </div>
      {pathname != "/" && (
        <div className="flex gap-12.5 grow">
          <a href="#" className="flex flex-row items-center gap-2 text-xs">
            LINKEDIN
            <ArrowUpIcon width="8" height="8"></ArrowUpIcon>
          </a>
          <a href="#" className="flex flex-row items-center gap-2 text-xs">
            BEHANCE
            <ArrowUpIcon width="8" height="8"></ArrowUpIcon>
          </a>
          <a href="#" className="flex flex-row items-center gap-2 text-xs">
            READ.CV
            <ArrowUpIcon width="8" height="8"></ArrowUpIcon>
          </a>
          <a href="#" className="flex flex-row items-center gap-2 text-xs">
            E-MAIL
            <ArrowUpIcon width="8" height="8"></ArrowUpIcon>
          </a>
        </div>
      )}
      <div className="flex gap-2 items-center text-sm text-zinc-900">
        <b>ALEJO FUNES ABDALA</b>- PRODUCT & MULTIMEDIA DESIGNER
      </div>
    </nav>
  );
}
