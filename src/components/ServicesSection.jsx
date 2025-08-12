import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Inline icons to avoid external dependency
const Plus = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

const Minus = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
  </svg>
);

const services = [
  {
    title: "Flutter App Development",
    description:
      "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience? ",
    linkText: "Let's get started today!",
    linkUrl: "#"
  },
  { title: "UI/UX Design" },
  { title: "Customization & Integration" },
  { title: "Testing & Quality Assurance" },
  { title: "Maintenance & Support" },
  { title: "Consulting & Training" },
  { title: "Migration & Upgrades" }
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-zinc-900 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-center text-4xl font-bold font-serif">
          Our Dynamic Services Suite!
        </h2>
        <p className="text-center text-lg mt-2">
          Embrace Innovation: Let&apos;s Create Together!
        </p>
        <p className="text-center text-gray-400 mt-2 max-w-2xl mx-auto">
          Step into innovation! Explore our range of services and let&apos;s
          create something extraordinary together. Your vision, our expertise.
          Let&apos;s begin!
        </p>

        {/* Content */}
        <div className="mt-10 sm:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Accordion */}
          <div className="flex-1 space-y-6">
            {services.map((service, idx) => (
              <div key={idx}>
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span
                    className={`text-xl font-serif ${
                      openIndex === idx ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {service.title}
                  </span>
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === idx && service.description && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-gray-400"
                    >
                      <p className="mb-2">{service.description}
                        <a
                          href={service.linkUrl}
                          className="text-cyan-500 hover:underline"
                        >
                          {service.linkText}
                        </a>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src="https://media.istockphoto.com/id/1349722626/photo/close-up-of-a-males-hand-paying-bill-with-credit-card-contactless-payment-on-smartphone-in-a.jpg?s=2048x2048&w=is&k=20&c=nbRPnNJK0Zpp410vXH3HsJ8k0nCZpjzkL1Ov8pNmbUM=" // replace with actual image path
              alt="Services Visual"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
