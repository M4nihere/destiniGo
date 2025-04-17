"use client";

import Image from "next/image";
import Link from "next/link";

const ContactBanner = () => {
  return (
    <div className="bg-blue-600 text-white py-10 px-6 md:px-12 rounded-none shadow-lg flex flex-col md:flex-row items-center justify-between w-full mx-auto my-4">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/images/hero/4.webp" // Ensure this path is correct
          alt="Get in Touch"
          width={350}
          height={250}
          className="object-cover"
        />
      </div>

      {/* Right Side: Text & Button */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-3xl font-bold mb-3">Let's Connect </h2>
        <p className="text-lg mb-5">
          Have questions or need assistance? Reach out to us.
        </p>
        <Link href="/contact">
          <button className="bg-white text-blue-600 hover:text-white hover:bg-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md transition-all">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactBanner;
