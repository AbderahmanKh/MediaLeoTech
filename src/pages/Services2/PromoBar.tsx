import { useEffect, useRef } from 'react';

interface PromoBarProps {
  message: string;
}

const PromoBar = ({ message }: PromoBarProps) => {
  return (
    <div className="bg-orange-700 text-white py-2 overflow-hidden whitespace-nowrap relative">
      <div className="animate-marquee inline-block font-bold">
        <span className="mx-4">{message}</span>
        <span className="mx-4">{message}</span>
        <span className="mx-4">{message}</span>
        <span className="mx-4">{message}</span>
      </div>
    </div>
  );
};

export default PromoBar;