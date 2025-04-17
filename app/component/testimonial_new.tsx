"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";



const testimonials = [
  {
    img: "/images/testimonials/palak.webp",
    text: "highly recommend this institute. Really helpful and great guide, helped me through ielts training to visa interview practice as well as through University process. Thank you DestiniGo for helping me to get enrolled in Arizona State University (Tempe), USA.",
    name: "Palak",
    rating: 5,
  },
  {
    img: "/images/testimonials/rahil.webp",
    text: "I applied for a Canadian study permit this year,2022. IRCC was facing a significant backlog. It was because of Destinigo's help and continuous hand holding, that I got my visa and was able to join my University (UofT) on time. Ruchi and Manish were always available, even for the smallest of matters and at odd hours, to guide me and suggest ways to handle specific matters and follow-up on a regular basis. My sincerest thanks to them and wish them the best in their endeavours",
    name: "Rahil Chadha",
    rating: 5,
  },
  {
    img: "/images/testimonials/ekansh.webp",
    text: "Destinigo provides amazing consultancy services for studying abroad and it ensures that you're on the right track. Ruchi ma'am and sir takes care of everything personally and at the end, outstanding results are produced.I personally have a really good experience and I guess it's the best place to start your journey for studying abroad,",
    name: "Ekansh Bansal",
    rating: 5,
  },
  {
    img: "/images/testimonials/saksham.webp",
    text: "I had a wonderful experience. The faculty was too good and they helped me throughout my admission process. IELTS classes were really beneficial. I will definitely recommend y'all to go ahead with Destinigo.",
    name: "Saksham Singh",
    rating: 5,
  },
  {
    img: "/images/testimonials/vishal.webp",
    text: "I had a wonderful experience with DestiniGo. The university admission and visa formalities were completed in a short time without any charge. I got my study visa for France within 3 days. I strongly recommend DG to those who wish to study abroad.",
    name: "Vishal Sharma",
    rating: 5,
  },
  {
    img: "/images/testimonials/ankit.webp",
    text: "I highly recommend destinigo consultant because ruchi mam and manish sir both are really hard working and supportive. I have done IELTS coaching from there and got my desired bands. I got admission in University of east london only because ruchi mam guided me through the whole process and helped me in the ups and downs. Even I was the one who annoyed ruchi mam so much but still she was very kind to me and ensured my admission. Thank you so much for whatever you did for me and I'll definitely meet you soon mam ,",
    name: "Ankit Gurjar",
    rating: 5,
  },
  {
    img: "/images/testimonials/suresh.webp",
    text: "I applied for a study visa through Destinigo Overseas Consultant. My whole experience was amazing, and I'm so glad to say that I cleared the IELTS exam in my first attempt. All thanks to Ruchi Mam and Manish sir for their support and motivation.",
    name: "Suresh Kumawat",
    rating: 5,
  },
  // {
  //   img: "/images/testimonials/3.webp",
  //   text: "Great effort by her for securing the seat in USA in Arizona state university and getting us the scholarship indeed a great help to us . I really appreciate for all the hard work she has done during the admissions process for my son . Thank u and wishing you all the very best",
  //   name: "Raj Kanwar",
  //   rating: 4,
  // },
  // {
  //   img: "/images/testimonials/4.webp",
  //   text: "Destinigo Consultants has provided me with personal attention and was the reason I scored an outstanding 7.5 bands in my ielts exam. I am very thankful to Ruchi ma'am and Sir for their time so that I would be able to score such amazing results on my first try ! Definitely recommend for students who want to excel the ielts exam on the first try 😊",
  //   name: "Nirja Kajale",
  //   rating: 5,
  // },
];

const useTestimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handlePrev = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonialIndex]);

  return { testimonialIndex, handlePrev, handleNext };
};

const Testimonials = () => {
  const { testimonialIndex, handlePrev, handleNext } = useTestimonials();

  return renderTestimonials(testimonialIndex, handlePrev, handleNext);
};

const renderTestimonials = (
  testimonialIndex: number,
  handlePrev: () => void,
  handleNext: () => void
) => (
  <section 
  className="py-24 px-6 text-center flex flex-col justify-center items-center min-h-screen relative bg-blue-200">
    {/* Heading Moved Up for Better Spacing */}
    <h2 className="text-5xl font-bold text-white mb-20 mt-[-140px]">
      What Our Students Say
    </h2>

    <div className="relative w-[90%] max-w-xl">
      {/* Left Navigation Button */}
      <button
  onClick={handlePrev}
  className="absolute lg:left-[-200px] left-[-100px] top-1/2 transform -translate-y-1/2 bg-gray-600 p-4 rounded-full text-white shadow-lg hover:bg-gray-800 transition hidden sm:block"
>
  <ChevronLeft size={32} />
</button>


      <div className="relative bg-white rounded-lg shadow-xl p-8 text-center w-full">
        {/* Gold Starred Tag */}
        <div className="absolute top-[-12px] right-[-12px] bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          ⭐ Starred
        </div>

        {/* User Image - Pops Out More */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <img
  src={testimonials[testimonialIndex].img}
  alt="User"
  className="w-28 h-28 rounded-full shadow-lg bg-white ring-8 ring-blue-200"
/>

        </div>

        {/* Testimonial Content */}
        <div className="mt-16">
          <p className="text-gray-700 text-lg">
            “{testimonials[testimonialIndex].text}”
          </p>
          <div className="mt-4 text-xl font-semibold text-black">
            {testimonials[testimonialIndex].name}
          </div>

          {/* Star Ratings */}
          <div className="mt-2 flex justify-center">
            {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-2xl">★</span>
            ))}
          </div>
        </div>

        {/* Speech Bubble Arrow */}
        {/* <div className="absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div> */}
      </div>

      {/* Sharper Shadow Effect */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-85px] w-80 h-8 bg-black opacity-10 blur-sm rounded-full"></div>

      {/* Right Navigation Button */}
      <button
  onClick={handleNext}
  className="absolute lg:right-[-200px] right-[-100px] top-1/2 transform -translate-y-1/2 bg-gray-600 p-4 rounded-full text-white shadow-lg hover:bg-gray-800 transition hidden sm:block"
>
  <ChevronRight size={32} />
</button>
    </div>
  </section>
);

export default Testimonials;
