import React from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS
import essentials from "./home-essentials.jpg";
import laptop from "./laptop-img.jpg";
import fashion from "./fashion-img.jpg";
import beauty from "./health-beauty.jpg";

const Hero = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Optional: Disable left/right arrows
    autoplaySpeed: 3000,
  };

  return (
    <section className="relative bg-gray-100">
      <Slider {...settings} className="h-[500px]">
        {/* Slide 1 */}
        <div className="relative">
          <img
            src={essentials}
            alt="Shop Deals"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50">
            <h1 className="text-4xl font-bold mb-4">Shop the Best Deals Today</h1>
            <p className="mb-6 text-lg">Exclusive discounts on top products!</p>
            <a
              href="/shop"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              style={{ backgroundColor: "#28A745" }}
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src={laptop}
            alt="New Arrivals"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50">
            <h1 className="text-4xl font-bold mb-4">New Arrivals Are Here</h1>
            <p className="mb-6 text-lg">Discover the latest in fashion and tech.</p>
            <a
              href="/shop"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              style={{ backgroundColor: "#28A745" }}
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src={fashion}
            alt="Home Essentials"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50">
            <h1 className="text-4xl font-bold mb-4">Upgrade Your Home</h1>
            <p className="mb-6 text-lg">Amazing deals on home essentials.</p>
            <a
              href="/shop"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              style={{ backgroundColor: "#28A745" }}
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative">
          <img
            src={beauty}
            alt="Health and Beauty"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50">
            <h1 className="text-4xl font-bold mb-4">Health & Beauty Essentials</h1>
            <p className="mb-6 text-lg">Look good, feel good, save big.</p>
            <a
              href="/shop"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              style={{ backgroundColor: "#28A745" }}
            >
              Shop Now
            </a>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
