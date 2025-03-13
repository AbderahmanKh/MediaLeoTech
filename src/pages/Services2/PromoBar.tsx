import { useEffect, useRef } from 'react';

interface PromoBarProps {
  message: string;
  repeatCount?: number; // optional prop to control repetitions
}

const PromoBar = ({ message, repeatCount = 4 }: PromoBarProps) => {
  const repeatedMessages = Array.from({ length: repeatCount }, (_, index) => (
    <span key={index} className="mx-4">
      {message}
    </span>
  ));

  return (
    <div className="bg-orange-700 text-white py-2 overflow-hidden whitespace-nowrap relative">
      <div className="animate-marquee inline-block font-bold">
        {repeatedMessages}
      </div>
    </div>
  );
};

export default PromoBar;
