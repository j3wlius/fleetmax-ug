import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src={logo}
              alt="fleetmax logo"
              className="h-24 mb-2 brightness-0 invert"
            />
            <p className="text-gray-400">
              Creative solutions and quality you can trust. Partner with us for
              all your printing and branding needs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "about", "services", "clients", "contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item}
                      spy={true}
                      smooth={true}
                      offset={-64}
                      duration={500}
                      className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Professional Printing</li>
              <li>Graphic Design</li>
              <li>Branding Solutions</li>
              <li>Car Hire</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm flex items-center sm:justify-center md:justify-between lg:justify-between w-full">
            <span>
              &copy; {new Date().getFullYear()} FleetMax. All rights reserved.
            </span>
            <span>
              Designed by{" "}
              <a
                href="https://jewlius.me"
                target="_blank"
                className="text-[#82D173] hover:underline"
              >
                Julio Tamex
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
