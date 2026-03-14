import Link from "next/link";
import LocationIcon from "../icons/LocationIcon";

export default function Navbar() {
  return (
    <nav className="fixed top-5 w-full max-w-349 flex justify-between items-center p-4 bg-zinc-50/25 border border-zinc-100/25 backdrop-blur">
      
      <div className="flex gap-2 items-center text-sm text-zinc-900">
        <LocationIcon></LocationIcon>
        Working from <b>Córdoba, Argentina</b>
      </div>

      <div className="flex gap-2 items-center text-sm text-zinc-900">
        <b>ALEJO FUNES ABDALA</b>- PRODUCT & MULTIMEDIA DESIGNER
      </div>

    </nav>
  );
}
