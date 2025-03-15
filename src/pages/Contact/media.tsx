import { Facebook, Instagram, Linkedin } from "lucide-react";
import { TiktokIcon } from "./ui/Tiktokicon";

export default function SocialMediaBar() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Follow Our Social Media</h2>
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              <Facebook size={32} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              <Instagram size={32} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              <TiktokIcon size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
