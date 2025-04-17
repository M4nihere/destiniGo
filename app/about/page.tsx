"use client";
import Image from "next/image";
import Link from "next/link";
import AboutUs from "@/app/component/about/AboutUs_top"
import Header from "@/app/component/Header"
import Footer from "@/app/component/footer"
import ImpactSection from "@/app/component/about/AboutUs_middle"
import Services from "@/app/component/Services";
import GalleryAndCertificates from "@/app/component/about/AboutUs_bottom"


const about_page = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <ImpactSection />
      <GalleryAndCertificates />
      <Footer />
    </div>
  );
};

export default about_page;