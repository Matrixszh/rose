import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Rose Realestate",
  openGraph: {
    title: "Rose Realestate",
    url: "https://www.realestatebyrose.com",
    images: [
      {
        url: "https://www.realestatebyrose.com/images/footerlogo.png", // Updated path to logo in images folder
        width: 800,
        height: 600,
        alt: "Rose Realestate Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rose Realestate",
    images: ["https://www.realestatebyrose.com/images/footerlogo.png"], // Updated path for Twitter
  },
  // Add favicon for better browser tab appearance
  icons: {
    icon: "/favicon.ico", // Ensure favicon is at this path
  },
  // Website URL
  url: "https://www.realestatebyrose.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className={`antialiased bg-[#09272C] text-white ${poppins.className}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
