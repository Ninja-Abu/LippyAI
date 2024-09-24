// Date: 09/23/24
// Desc: Landing Page for Lippy AI

import LippyNavbar from "@/components/Navbar";
import SOPHero from "@/components/SOPHero";
import AnimationHero from "@/components/AnimationHero";
import Endorsements from "@/components/Endorsements";
import FeatureAnimation from "@/components/FeatureAnimation";
import FAQSection from "@/components/FAQSection";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <LippyNavbar />

      <div className="flex justify-between items-start px-[50px]">
        <SOPHero />
        <AnimationHero />
      </div>
      
      <Endorsements />

      <div className="flex justify-between items-start py-[50px] px-[50px]">
        <FeatureAnimation />
        <FAQSection />
      </div>

      <Pricing />

      <div className="flex justify-between items-start py-[100px] px-[50px]">
        <CTA />
        <BookingForm />
      </div>

      <Footer />
      
    </div>
  );
}