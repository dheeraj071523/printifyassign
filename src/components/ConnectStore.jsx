import React from "react";

const platforms = ["API", "Etsy", "Wix", "Shopify"]; // You can use images/icons here later

const ConnectStore = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Connect your store
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Seamlessly integrate with major e-commerce platforms.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">{platform}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectStore;
