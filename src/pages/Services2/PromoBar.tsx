import React, { useState, useEffect } from "react";
import { FaPercent } from "react-icons/fa";

const PromoBar: React.FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    const handleReducedMotion = (
      event: MediaQueryList | MediaQueryListEvent
    ) => {
      setIsPaused(event.matches);
    };

    const mediaQuery: MediaQueryList = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    mediaQuery.addEventListener("change", handleReducedMotion);
    handleReducedMotion(mediaQuery);

    return () =>
      mediaQuery.removeEventListener("change", handleReducedMotion);
  }, []);

  const handleClick = () => {
    window.location.href = "/sale";
  };

  return (
    <div
      role="banner"
      aria-label="Promotional banner showing 50% off sale"
      onClick={handleClick}
      className="bg-gradient-to-r from-red-600 to-orange-500 cursor-pointer overflow-hidden relative group"
    >
      {/* Scrolling container */}
      <div className="flex whitespace-nowrap overflow-hidden">
        {/* Inner scrolling content */}
        <div
          className={`flex items-center whitespace-nowrap animate-marquee ${
            isPaused ? "paused" : ""
          }`}
        >
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="flex items-center mx-4 text-white text-lg md:text-xl font-bold uppercase tracking-wider min-w-max"
            >
              <FaPercent className="mr-2 animate-bounce" />
              50% OFF - ASK NOW
              <span className="mx-8">★</span>
            </div>
          ))}
        </div>
        {/* Duplicate content for seamless effect */}
        <div
          className={`flex items-center whitespace-nowrap animate-marquee ${
            isPaused ? "paused" : ""
          }`}
          aria-hidden="true"
        >
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="flex items-center mx-4 text-white text-lg md:text-xl font-bold uppercase tracking-wider min-w-max"
            >
              <FaPercent className="mr-2 animate-bounce" />
              50% OFF - ASK NOW
              <span className="mx-8">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient fade on edges */}
      <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-red-600 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-orange-500 to-transparent pointer-events-none" />

      <style >{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
          min-width: 200%;
        }
        .paused {
          animation-play-state: paused;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PromoBar;
