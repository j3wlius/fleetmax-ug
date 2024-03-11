import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import FadeInSection from "./FadeInSection";
import imageOne from "../assets/img-1.webp";
import imageTwo from "../assets/img-2.jpg";
import imageThree from "../assets/img-3.avif";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: imageOne,
      title: "Premium Car Collection",
    },
    {
      image: imageTwo,
      title: "Luxury Fleet",
    },
    {
      image: imageThree,
      title: "Professional Service",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen">
      {/* Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection direction="down">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Print. Design. Drive. All in One Place.
            </h1>
          </FadeInSection>
          <FadeInSection>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              From high-quality prints and custom designs to convenient car hire
              services, we offer everything you need under one roof. Whether
              you're promoting your business or planning your next trip, our
              professional team is here to make it easy, efficient, and
              affordable.
            </p>
          </FadeInSection>
          <FadeInSection direction="up">
            <div className="space-x-4">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="inline-block bg-[#C42021] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#82D173] transition-colors cursor-pointer"
              >
                View Our Services
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#C42021] transition-colors cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-[#C42021]" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
