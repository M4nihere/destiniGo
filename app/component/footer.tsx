"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Left: Logo & Social Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image src="/images/logo/destinigo logo_footer.webp" alt="Company Logo" width={180} height={70} className="mb-5 mt-4" />
          
          <div className="flex space-x-6 justify-center md:justify-start">
            <Link href="https://www.instagram.com/destinigo_india?igsh=czV0bXExczh2dTB1" target="_blank">
              <FaInstagram className="text-3xl transition-transform hover:-translate-y-2 hover:text-pink-500 cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/company/destinigo-consultants/" target="_blank">
              <FaLinkedin className="text-3xl transition-transform hover:-translate-y-2 hover:text-blue-500 cursor-pointer" />
            </Link>
            <Link href="https://www.youtube.com/@destinigoedu" target="_blank">
              <FaYoutube className="text-3xl transition-transform hover:-translate-y-2 hover:text-red-500 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Middle: Top Countries for Study */}
<div className="text-center md:text-left">
  <h3 className="text-2xl font-semibold mb-5">Top Countries for Study</h3>
  <ul className="space-y-3 text-lg">
    {[
      "Australia",
      "Canada",
      "Europe",
      "New Zealand",
      "Singapore",
      "UK",
      "USA",
    ].map((country) => {
      const href = `/countries/${country.toLowerCase().replace(/\s+/g, "-")}`;
      return (
        <li key={country}>
          <Link href={href} className="hover:text-blue-400 transition-all">
            {country}
          </Link>
        </li>
      );
    })}
  </ul>
</div>


        {/* Right: Contact Information */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-5">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start space-x-4 text-lg mb-4">
            <FaPhone className="text-blue-400 text-3xl min-w-[32px] transform rotate-90" />
            <Link href="tel:+919116000488" className="hover:text-blue-400 transition-all">
              +91-9116000488
            </Link>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-4 text-lg mb-4">
            <FaEnvelope className="text-blue-400 text-3xl min-w-[32px]" />
            <Link href="mailto:info@destinigoedu.com" className="hover:text-blue-400 transition-all">
              info@destinigoedu.com
            </Link>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-4 text-lg ">
            <FaMapMarkerAlt className="text-blue-400 text-3xl min-w-[32px] mt-[-40px]" />
            <span className="max-w-xs md:max-w-md">
              10-B, 3rd Floor, Shyam Sagar Building, Gopalpura Bypass Road, Opp. Frankfinn Institute, Jaipur-302018, Rajasthan, India.
            </span>
          </p>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center text-white mt-8 text-lg">
        © {new Date().getFullYear()} - All rights reserved by DestiniGo <br />Developed by CatalystCanvas
      </div>
    </footer>
  );
};

export default Footer;