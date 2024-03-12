import React, { useState } from "react";
import FadeInSection from "./FadeInSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwzryge", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  const getButtonText = () => {
    switch (status) {
      case "sending":
        return "Sending...";
      case "success":
        return "Message Sent!";
      case "error":
        return "Error! Try Again";
      default:
        return "Send Message";
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We would love to hear from you! Feel free to reach out with any
              inquiries.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeInSection direction="left">
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xpwzryge"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-b border-black focus:outline-none focus:border-[#857aef]"
                  style={{ borderBottomColor: "#000" }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-b border-black focus:outline-none focus:border-[#857aef]"
                  style={{ borderBottomColor: "#000" }}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-b border-black focus:outline-none focus:border-[#857aef]"
                  style={{ borderBottomColor: "#000" }}
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-b border-black focus:outline-none focus:border-[#857aef]"
                  style={{ borderBottomColor: "#000" }}
                >
                  <option value="Printing">Printing</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Branding Solutions">Branding Solutions</option>
                  <option value="Car Hire">Car Hire</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md shadow-sm focus:outline-none resize-none py-2 px-2 focus:border-[#857aef]"
                  style={{ border: "1px solid rgba(0, 0, 0, 0.5)" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full px-6 py-3 rounded-full font-semibold transition-colors ${
                  status === "success"
                    ? "bg-green-500 hover:bg-green-600"
                    : status === "error"
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-[#82D173] hover:bg-[#82D150]"
                } text-white`}
              >
                {getButtonText()}
              </button>
            </form>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                <p className="text-gray-600">
                  P.O. Box: 10967, Kampala, Uganda
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-600">
                  Email:{" "}
                  <a href="mailto:info@fleetmax.ug" className="text-[#82D173] font-bold">
                    info@fleetmax.ug
                  </a>
                  <br />
                  Main Office: +(256) 200 907 061
                  <br />
                  Customer Support: +(256) 757 891 160
                  <br />
                  Sales Department: +(256) 752 807 060
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9am - 5pm
                  <br />
                  Saturday: 10am - 2pm
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
