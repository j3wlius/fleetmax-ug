import React from "react";
import FadeInSection from "./FadeInSection";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About FleetMax
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your go-to partner for professional printing, graphic design, and
              car hire services. With years of experience, we deliver top-notch
              solutions that cater to businesses, organizations and individuals
              alike.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeInSection direction="left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#857aef] text-4xl mb-4">10+</div>
              <h3 className="text-xl font-semibold mb-2">Years of Expertise</h3>
              <p className="text-gray-600">
                Delivering exceptional service with quality and care
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#857aef] text-4xl mb-4">1,000+</div>
              <h3 className="text-xl font-semibold mb-2">Satisfied Clients</h3>
              <p className="text-gray-600">
                Trusted for custom prints, designs, and reliable car rentals
              </p>
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#857aef] text-4xl mb-4">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Here for you anytime, ensuring seamless experiences
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;
