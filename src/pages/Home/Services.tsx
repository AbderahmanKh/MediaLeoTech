import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Services() {
  return (
    <section className=" py-8" style={{ background: '#f5f5f5' }}>
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
        <div className="flex flex-wrap -mx-4">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 shadow-md rounded-md">
                <i className={`fas ${feature.icon} text-4xl text-orange-500 mb-4`}></i>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Secure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "fa-lock",
  },
  {
    title: "Global",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "fa-globe-americas",
  },
  {
    title: "Collaborative",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "fa-users",
  },
];
