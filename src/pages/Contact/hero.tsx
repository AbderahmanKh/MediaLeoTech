import { Button } from "./ui/button";

const phoneNumber = "0612345678";
const whatsappLink = `https://wa.me/${phoneNumber}`;

export function HeroSection() {
 
  return (
    <>
    <div className="min-h-screen bg-gray-50">
    {/* Hero Section with Blurry Background */}
    <section className="relative overflow-hidden bg-white">
      {/* Blurry Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1048/1920/1080" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Get in <span className="text-orange-500">Touch</span> With Us
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 text-lg transition-all duration-300 transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Contact Us on WhatsApp
              </Button>
            </a>
          </div>
          <div className="hidden md:block relative h-full">
            <img 
              src="https://picsum.photos/id/1035/800/600" 
              alt="Smiling woman" 
              className="rounded-lg shadow-xl object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
}