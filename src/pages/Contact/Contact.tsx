import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, Clock } from "lucide-react";
import { TiktokIcon } from "./ui/Tiktokicon";
import { HeroSection } from "./hero";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Get in <span className="text-orange-500">Touch</span> With Us
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Contact Us on WhatsApp
              </Button>
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
      </section> */}
      <HeroSection />

      {/* Social Media Bar */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-8 text-black">Follow Our Social Media</h2>
            <div className="flex justify-center space-x-10 md:space-x-16">
              <a 
                href="#" 
                className="text-black hover:text-blue-500 transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-full p-2"
                aria-label="Facebook"
              >
                <Facebook size={36} className="social-icon" />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-pink-400 transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-full p-2"
                aria-label="Instagram"
              >
                <Instagram size={36} className="social-icon" />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-blue-400 transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-full p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={36} className="social-icon" />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-purple-700 transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-full p-2"
                aria-label="TikTok"
              >
                <TiktokIcon size={36} className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-orange-500">Company</span> Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Details</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">123 Business Avenue, Suite 500<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">contact@yourcompany.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.221175486784!2d-9.550937623884298!3d30.401466101565994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7002afbea89%3A0x395063ddfa0c0660!2sMedia%20Leo%20Tech!5e0!3m2!1sen!2sma!4v1742011109517!5m2!1sen!2sma" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">

              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;