import React from "react";
import { IonIcon } from "@ionic/react";
import "@ionic/react/css/core.css"; // Ensure Ionicons styles are included

const services = [
  { title: "Web Development", icon: "code-slash-outline", description: "Crafting responsive and intuitive websites tailored to your unique needs using cutting-edge technologies." },
  { title: "UI/UX Design", icon: "browsers-outline", description: "Creating visually appealing and user-centric designs that enhance user experiences and engagement." },
  { title: "Custom CMS Solutions", icon: "archive-outline", description: "Building reusable and efficient CMS APIs to simplify website management and scalability." },
  { title: "Mobile App Dev't", icon: "phone-portrait-outline", description: "Designing and developing user-friendly mobile applications for iOS and Android, ensuring seamless performance and user satisfaction." },
  { title: "E-commerce Development", icon: "bag-check-outline", description: "Creating robust platforms to elevate your online business presence." },
  { title: "API Integration", icon: "swap-horizontal-outline", description: "Seamlessly connecting systems to enhance functionality and performance." }
];

const Do: React.FC = () => {
  return (
          <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] m-auto md:px-0 px-4 md:my-10 bg-gray-100 rounded-3xl shadow-lg overflow-hidden">
        <section className="w-full h-full flex flex-col justify-center md:py-20 py-10 md:px-20 px-2">
          <div className="w-fit">
            <h2 className="text-2xl font-bold text-gray-900 pb-2">What I Do</h2>
            <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
              <hr className="border-[3px] border-green-400 w-[20%]" />
            </div>
          </div>

          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
            {services.map((service, index) => (
              <div key={index} className="flex sm:gap-4 gap-2">
                <span>
                  <IonIcon className="sm:text-5xl text-3xl text-green-400" name={service.icon} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
  );
};

export default Do;
