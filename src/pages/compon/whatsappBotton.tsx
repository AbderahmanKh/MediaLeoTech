import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message = "" }: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Prepare WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center",
        "bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg",
        "transition-all duration-300 ease-in-out transform",
        isHovered ? "scale-110" : "scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative p-4">
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
        
        {/* Tooltip on hover */}
        <span className={cn(
          "absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1",
          "bg-gray-800 text-white text-xs rounded whitespace-nowrap",
          "transition-opacity duration-200",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          Chat with us
        </span>
      </div>
    </a>
  );
}