'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const ImpactSection = () => {
  const universities = [
    { name: 'Harvard University', image: '/images/top_colleges/about/harward.webp' },
    { name: 'Stanford University', image: '/images/top_colleges/about/stanford.webp' },
    { name: 'The University of Adelaide', image: '/images/top_colleges/about/adelaide.webp' },
    { name: 'University of Oxford', image: '/images/top_colleges/about/oxford.webp' },
    { name: 'University of Alberta', image: '/images/top_colleges/about/alberta.webp' },
    { name: 'University of Edinburgh', image: '/images/top_colleges/about/edinburgh.webp' },
    { name: 'James Cook University', image: '/images/top_colleges/about/james-cook.webp' },
    { name: 'National University of Singapore (NUS)', image: '/images/top_colleges/about/nus.webp' },
    { name: 'Purdue University', image: '/images/top_colleges/about/purdue.webp' },
    { name: 'New York University (NYU)', image: '/images/top_colleges/about/nyu.webp' },
];


  const controls = useAnimation();
  const [xPosition, setXPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [movementDistance, setMovementDistance] = useState('-47%');
  const [animationSpeed, setAnimationSpeed] = useState(15);
  
  useEffect(() => {
    const updateMovement = () => {
      if (window.innerWidth < 768) {
        setMovementDistance('-85%'); // Move fully in smaller screens
        setAnimationSpeed(20); // Increase speed for mobile
      } else if (window.innerWidth < 1024) {
        setMovementDistance('-70%'); // Adjust for tablets
        setAnimationSpeed(20); // Faster than desktop
      } else {
        setMovementDistance('-40%'); // Default for larger screens
        setAnimationSpeed(15);
      }
    };
  
    updateMovement();
    window.addEventListener('resize', updateMovement);
  
    return () => window.removeEventListener('resize', updateMovement);
  }, []);
  
  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [xPosition, movementDistance],
        transition: { repeat: Infinity, duration: animationSpeed, ease: 'linear' },
      });
    }
  }, [isPaused, xPosition, movementDistance, animationSpeed]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-16 bg-gray-100 text-center overflow-hidden">
      <h2 className="text-5xl font-bold text-blue-600 pb-6">Top Universities</h2>

      <div
        className="relative w-full overflow-hidden mt-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex gap-14 w-max"
          animate={controls}
          initial={{ x: '0%' }}
          onUpdate={(latest) => {
            if (typeof latest.x === 'number') setXPosition(latest.x);
          }}
        >
          {universities.map((uni, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center w-48 "
              whileHover={{ scale: 1.2, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl w-full h-[180px] flex justify-center relative overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    layout="fill" // Makes it fill the parent container
                    objectFit="cover" // Ensures it covers without white space
                    className="rounded-2xl"
                  />
                </motion.div>
              </div>

              <motion.div
                className="mt-2 p-2 bg-blue-600 text-white rounded-xl text-xl font-semibold w-full text-center mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {uni.name}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
