"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/component/Header"
import Footer from "@/app/component/footer"
import ContactBanner from "@/app/component/contact/contact_hero"
import ContactForm from "@/app/component/contact/ContactForm"
// import ContactFormm from "@/app/component/contact/contactformm"
import ContactSection from "@/app/component/contact/contact_bottom"


const contact_page = () => {
  return (
    <div>
      <Header />
      <ContactBanner />
      <ContactForm />
      {/* <ContactFormm /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default contact_page;



