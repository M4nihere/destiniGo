"use client";

import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";
import { useState, useEffect,useRef} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Testimonials from "@/app/component/testimonial_new";
import StudyDestinations from "@/app/component/StudyDestinations"
import StickyButtons from "@/app/component/StickyButtons";
import UniversityCarousel from "@/app/component/UniversityCarousel";
import Footer from "@/app/component/footer";
import ContactBanner from "@/app/component/ContactBanner";
import StudentPathway from "@/app/component/StudentPathway";
import Services from "@/app/component/Services";
import Hero from "@/app/component/Hero"
import Header from "@/app/component/Header"


export default function HomePage() {
  
    // const [darkMode, setDarkMode] = useState(true);
    // const [selectedFeature, setSelectedFeature] = useState(null);
    // const menuRef = useRef(null);
    
    // // Load theme from localStorage
    // useEffect(() => {
    //   const storedTheme = localStorage.getItem("theme");
    //   if (storedTheme === "light") {
    //     setDarkMode(false);
    //   }
    // }, []);

    // // Toggle Theme
    // const toggleTheme = () => {
    //   const newMode = !darkMode;
    //   setDarkMode(newMode);
    //   localStorage.setItem("theme", newMode ? "dark" : "light");
    // };

    // // Apply theme to document
    // useEffect(() => {
    //   document.documentElement.classList.toggle("dark", darkMode);
    // }, [darkMode]);


  
  return (
    <div>   
    <Header />
    <Hero />
    <StickyButtons />
    <Services />
    <StudyDestinations />
    {/* <Testimonials /> */}
    <UniversityCarousel />
    <ContactBanner />
    <StudentPathway />
    <Footer />
    </div>
  );
}

