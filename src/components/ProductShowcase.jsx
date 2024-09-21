import React from "react";
//import productImage from "../assets/product-image.png"; // Placeholder for products

let url1 = "https://picsum.photos/500";
let url2 = "https://picsum.photos/700";
let url3 = "https://picsum.photos/800";
const products = [
  {
    name: "Custom T-Shirts",
    image: url1,
  },
  {
    name: "Custom Mugs",
    image: url2,
  },
  {
    name: "Custom Hats",
    image: url3,
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Easily add your design to a wide range of products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
