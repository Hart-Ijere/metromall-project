import React from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS
import { Link } from "react-router-dom"; // Use Link from React Router

import essentials from "./home-essentials.jpg";
import laptop from "./laptop-img.jpg";
import fashion from "./fashion-img.jpg";
import beauty from "./health-beauty.jpg";
import tele from "./tele.jpg";
import health from "./health-beauty.jpg";
import sofa from "./sofa.jpg";
import skincare from "./skin-care.jpg";
import smartwatch from "./smart-watch.jpg";
import headphone from "./headphone.jpg";

const Home = () => {
  // Slick Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
  };

  // Featured Categories
  const categories = [
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
      link: "/products?category=Fashion",
    },
    {
      id: 3,
      name: "Health and Beauty",
      image: health,
      link: "/products?category=Health+and+Beauty",
    },
  ];

  // Featured Products
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 199,
      image: headphone,
      link: "/products/1",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 149,
      image: smartwatch,
      link: "/products/2",
    },
    {
      id: 3,
      name: "Modern Sofa",
      price: 499,
      image: sofa,
      link: "/products/3",
    },
    {
      id: 4,
      name: "Skincare Kit",
      price: 89,
      image: skincare,
      link: "/products/4",
    },
  ];

  return (
    <>
      {/* Hero Section: Carousel */}
      <section className="relative bg-gray-100">
        <Slider {...settings} className="h-[560px]">
          {/* Slide 1 */}
          <div className="relative">
            <img
              src={essentials}
              alt="Shop Deals"
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50">
              <h1 className="text-4xl font-bold mb-4">Shop the Best Deals Today</h1>
              <p className="mb-6 text-lg">Exclusive discounts on top products!</p>
              <Link
                to="/productList"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative">
            <img
              src={laptop}
              alt="New Arrivals"
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50">
              <h1 className="text-4xl font-bold mb-4">New Arrivals Are Here</h1>
              <p className="mb-6 text-lg">Discover the latest in fashion and tech.</p>
              <Link
                to="/productList"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative">
            <img
              src={fashion}
              alt="Home Essentials"
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50">
              <h1 className="text-4xl font-bold mb-4">Upgrade Your Home</h1>
              <p className="mb-6 text-lg">Amazing deals on home essentials.</p>
              <Link
                to="/productList"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="relative">
            <img
              src={beauty}
              alt="Health and Beauty"
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50">
              <h1 className="text-4xl font-bold mb-4">Health & Beauty Essentials</h1>
              <p className="mb-6 text-lg">Look good, feel good, save big.</p>
              <Link
                to="/productList"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </Slider>
      </section>

      {/* Featured Categories Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                to={category.link}
                key={category.id}
                className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <h3 className="text-lg font-bold text-center mt-4">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg">
                <Link to={product.link}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                </Link>
                <h3 className="text-lg font-bold text-center mt-4">{product.name}</h3>
                <p className="text-center text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
