import React from "react";

const Card: React.FC = () => {
  return (
    <div className="flex flex-col sm:p-16 md:p-24 justify-center" style={{ background: '#f5f5f5' }}>
      {/* Themes: blue, purple, and teal */}
      <div data-theme="teal" className="mx-auto max-w-6xl">
        <h2 className="sr-only">Featured case study</h2>
        <section className="font-sans text-black">
          <div className="lg:flex lg:items-center fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right">
            {/* Image Section */}
            <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
              <div className="h-full">
                <article className="h-full">
                  <div className="h-full">
                    <img
                      className="h-full object-cover"
                      src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"
                      width="733"
                      height="412"
                      alt=""
                    />
                  </div>
                </article>
              </div>
            </div>
            {/* Content Section */}
            <div className="p-6 bg-gray-100">
              <div className="leading-relaxed">
                <h2 className="leading-tight text-4xl font-bold">
                  Media Leo Tech : Experience Transformation
                </h2>
                <p className="mt-4">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Sed laborum soluta modi nobis laudantium ducimus, 
                 impedit autem debitis sunt totam odio et deleniti voluptatem!.
                </p>
                <p className="mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Tempora et esse laudantium a laborum fuga!
                  </p>
                <p>
                  <a
                    className="mt-4 inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    href="https://inviqa.com/cxcon-experience-transformation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore this event
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
