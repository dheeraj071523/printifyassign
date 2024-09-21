import React from "react";

const testimonials = [
  {
    name: "Robert A.",
    feedback:
      "Printify has helped me scale my business and reach more customers!",
  },
  {
    name: "Quintan B.",
    feedback:
      "Working with Printify has been a seamless and rewarding experience.",
  },
  {
    name: "Nikki M.",
    feedback:
      "Great service, excellent product quality, and fantastic customer support!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Trusted by over 8M sellers around the world
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-lg text-gray-600 mb-4">
                {testimonial.feedback}
              </p>
              <h3 className="text-xl font-bold text-gray-800">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
