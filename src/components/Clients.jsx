import React from "react";
import FadeInSection from "./FadeInSection";
import cbmLogo from "../assets/cbm-logo.jpg";
import mestilLogo from "../assets/mestil-logo.jpg";
import sheratonLogo from "../assets/sheraton-hotels-and-resorts-logo.svg";
import moeLogo from "../assets/moe-logo.png";
import unccLogo from "../assets/uncc-logo.jpg";
import fourPointsLogo from "../assets/four-points-by-sheraton-vector-logo.png";
import jackieImg from '../assets/jackie-img.jpeg'
import paulImg from '../assets/paul-ocama.jpeg'

const Clients = () => {
  const testimonials = [
    {
      name: "Jackie Kwesiga",
      role: "CBM Uganda Country Director",
      content:
        "Fleetmax was instrumental in helping us create impactful brochures and banners for our 7th CBR/CBID Africa Conference. Their design team understood our mission and brought it to life beautifully. The quality of their prints and the quick delivery were impressive!",
      image: jackieImg,
    },
    {
      name: "Paul Ocama",
      role: "Marketing Manager, Mestil Hotel",
      content:
        "Fleetmax provided us with high-quality printed materials and stunning designs for our hotel’s marketing campaigns. Their attention to detail and understanding of our brand made all the difference. We’ve received fantastic feedback from guests, and we couldn't be happier with the results!",
      image: paulImg
    },
  ];

  const clientLogos = [
    cbmLogo,
    mestilLogo,
    fourPointsLogo,
    unccLogo,
    sheratonLogo,
    moeLogo,
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading businesses and individuals
            </p>
          </div>
        </FadeInSection>

        {/* Client Logos Carousel */}
        <FadeInSection>
          <div className="mb-16 relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                >
                  <img
                    src={logo}
                    alt="Client Logo"
                    className="max-w-full max-h-full"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                >
                  <img
                    src={logo}
                    alt="Client Logo"
                    className="max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInSection
              key={index}
              direction={index === 0 ? "left" : "right"}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
