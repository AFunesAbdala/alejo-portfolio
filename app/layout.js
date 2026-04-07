import "./globals.css";
import { DM_Sans } from "next/font/google";
import SmoothScroll from "./componentes/SmoothScroll";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});


export const metadata = {
  title: "Alejo Funes Abdala",
  description: "Solving needs. Shaping identity. Staying authentic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={dmSans.className}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
