
"use client";
export default function ContactBanner() {
  return (
    <div
      className="
        w-full flex flex-col justify-center items-center text-center relative 
        bg-center bg-no-repeat 
        
        /* Default (Mobile) */
        h-[200px] bg-[url('/images/contact/contact-hero-ipad.webp')] bg-contain mt-4
        
        /* Tablet (≥ 640px) */
        sm:h-[250px] sm:bg-[url('/images/contact/contact-hero-ipad.webp')] sm:bg-contain sm:mt-6
        
        /* Desktop (≥ 1024px) */
        lg:h-[300px] lg:bg-[url('/images/contact/contact-hero-desktop.webp')] lg:bg-cover lg:mt-10
      "
    >
    </div>
  );
}
