import React from "react";

const features = [
  {
    title: "Higher Profits",
    description:
      "Earn more with every sale. Choose the best products at the best prices.",
    icon: "💰", // You can replace with actual images or icons later
  },
  {
    title: "Robust Scaling",
    description:
      "Tap into a global network of suppliers for fast shipping anywhere.",
    icon: "🌍",
  },
  {
    title: "Best Selection",
    description: "Get access to a vast selection of customizable products.",
    icon: "🎨",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
