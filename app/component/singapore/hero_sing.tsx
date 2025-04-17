"use client";
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="relative h-[500px] w-full flex items-center justify-center text-center bg-cover bg-center" 
         style={{ backgroundImage: "url('/images/countries/singapore/singapore_banner.webp')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white p-4">
        <h1 className="text-5xl font-bold mb-4">Study in Singapore</h1>
        <p className="text-lg max-w-2xl mx-auto">
        Singapore offers excellence in education with global career prospects
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
