import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Rose Realestate",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className={`antialiased bg-[#09272C] text-white ${poppins.className}`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
