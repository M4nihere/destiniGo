"use client";
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="relative h-[500px] w-full flex items-center justify-center text-center bg-cover bg-center" 
         style={{ backgroundImage: "url('/images/countries/uk/uk_banner.webp')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white p-4">
        <h1 className="text-5xl font-bold mb-4">Study in UK</h1>
        <p className="text-lg max-w-2xl mx-auto">
        Study in the UK and gain a prestigious degree recognized worldwide
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
