import React from "react";
import FadeInSection from "./FadeInSection";
import carImg from "../assets/car-hire-img.jpg";
import brandImg from "../assets/brand-img.avif";
import graphicImg from "../assets/graphics-img.png";
import printingImg from "../assets/printing-img.jpg";

const Services = () => {
  const services = [
    {
      title: "Professional Printing",
      description:
        "Premium printing services for all your business, office and personal needs",
      image: printingImg,
    },
    {
      title: "Graphic Design",
      description:
        "Custom graphic design solutions to bring your ideas to life",
      image: graphicImg,
    },
    {
      title: "Branding Solutions",
      description: "Tailored branding services to help your business stand out",
      image: brandImg,
    },
    {
      title: "Car Hire",
      description:
        "Reliable vehicle rentals for personal, business, and event needs",
      image: carImg,
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of printing, design, and car hire
              solutions
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeInSection
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
