import React from "react";
import { Link } from "react-router-dom";
import tele from "./tele.jpg";
import fashion from "./fashion.jpg";
import health from "./health-beauty.jpg";

const FeaturedCategory = () => {
    const category = [
    {
      id: 1,
      name: "Electronics",
      image: tele,
      link: "/products?category=Electronics",
    },
    {
      id: 2,
      name: "Fashion",
      image: fashion,
      link: "/products?category=Home Essentials",
    },
    {
        id: 3,
        name: "Health and Beauty ",
        image: health,
        link: "/products?category=Home Essentials",
      },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {category.map((category) => (
            <Link
              to={category.link}
              key={category.id}
              className="group block overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Image */}
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategory;
