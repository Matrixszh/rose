import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import WorkSection from "@/components/WorkSection";
import ExpertSection from "@/components/ExpertSection";
import CollaborationSectionOne from "@/components/CollaborationSectionOne";
import CollabSectionTwo from "@/components/CollabSectionTwo";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import BookCall from "@/components/BookCall";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="px-10 overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <Hero />
      <VideoSection />
      <AboutSection />
      <WorkSection />
      <ExpertSection />
      <AboutMe />
      <Testimonials />
      <BookCall />
    </div>
  );
}
