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
  description: "Helping you build and grow your real estate investment portfolios.",
  // Metadata for sharing on social platforms
  openGraph: {
    title: "Rose Realestate",
    description: "Helping you build and grow your real estate investment portfolios.",
    url: "https://www.realestatebyrose.com",
    images: [
      {
        url: "/footerlogo.png", // Update this with the correct path to your logo
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
    description: "Helping you build and grow your real estate investment portfolios.",
    images: ["/footerlogo.png"], // Same logo for Twitter card
  },
  // Add favicon for better browser tab appearance
  icons: {
    icon: "/favicon.ico", // Ensure you have a favicon at this path
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
