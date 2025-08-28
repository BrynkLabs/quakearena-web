import { useState, useRef, useEffect } from "react";
import { Phone, MapPin } from "lucide-react";
import QuakeIcon from "../assets/icons/quake.svg";
import Crystal from "../assets/icons/quake_crystal.svg";
import img1 from "../assets/home_images/1.jpg";
import img2 from "../assets/home_images/2.jpg";
import img3 from "../assets/home_images/3.jpg";
import img5 from "../assets/home_images/5.jpg";
import img4 from "../assets/home_images/4.jpg";
import img6 from "../assets/home_images/6.jpg";
import img7 from "../assets/home_images/7.jpg";
import img8 from "../assets/home_images/8.jpg";
import img9 from "../assets/home_images/9.jpg";
import img10 from "../assets/home_images/10.jpg";
import img11 from "../assets/home_images/11.png";
import img12 from "../assets/home_images/12.png";
import img13 from "../assets/home_images/13.png";
import img14 from "../assets/home_images/14.png";
import img15 from "../assets/home_images/15.png";
import img16 from "../assets/home_images/16.png";
import img17 from "../assets/home_images/17.png";

import Logo from "../assets/images/logo.svg";
import quakeBg from "../assets/icons/quake_bg.png";
import ParallaxScroll from "./ui/ParallaxScroll";
import Marquee from "react-fast-marquee";
import Vertical from "../assets/icons/vertical.svg";
import Horizontal from "../assets/icons/horizontal.svg";
import Waves from "../assets/icons/waves.svg";



const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const images = [img1, img5, img14, img4, img2, img3, img6, img7, img8, img9, img10, img11, img12, img13,  img15, img16, img17, img12 , img2];

  return (
    <>
      <style jsx>{`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes subtleVibration {
    0%   { transform: translate(0, 0) rotate(0deg); }
    25%  { transform: translate(2px, -2px) rotate(-0.4deg); }
    50%  { transform: translate(-2px, 2px) rotate(0.4deg); }
    75%  { transform: translate(2px, 2px) rotate(-0.4deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }

  .vibrate-slow {
    animation: subtleVibration 4s infinite ease-in-out;
  }
`}</style>


      <div className="relative h-screen bg-black overflow-hidden">
        {/* Decorative quakeBg images */}
<img
  src={Horizontal}
  alt="quake left top 30px"
  className="absolute left-0 top-[150px] z-30 vibrate-slow"
  width={100}
/>
<img
  src={Waves}
  alt="quake left bottom 0"
  className="absolute left-0 bottom-[0px] z-30 vibrate-slow"
  width={50}
/>
<img
  src={Vertical}
  alt="quake right middle"
  className="absolute right-0 top-1/2 -translate-y-1/2 z-30 vibrate-slow"
  width={120}
/>

        {/* Background Parallax */}
        <div className="absolute inset-0 z-0">
          <ParallaxScroll images={images} />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

        {/* Navbar */}
        <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl mx-auto px-2">
  <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-full px-8 py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="text-white font-bold tracking-wider">
        <img
          src={Logo}
          alt="Logo"
          className="w-24 sm:w-20 md:w-24 lg:w-28" // 👈 smaller on mobile
        />
      </div>

      {/* Phone + Map */}
      <div className="flex gap-4">
        <a
          href="tel:+918558885511"
          className="relative w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white overflow-hidden hover:bg-opacity-20 transition-all duration-300"
        >
          <Phone size={18} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
        </a>
        <a
          href="https://www.google.com/maps/place/Quake+Arena/@17.462856,78.3458393,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white overflow-hidden hover:bg-opacity-20 transition-all duration-300"
        >
          <MapPin size={18} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
        </a>
      </div>
    </div>
  </div>
</nav>


        {/* Hero Content */}
        <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-6">
          {/* Icon */}
          <div
            className={`relative z-20 mb-8 transition-all duration-800 ${
              isAnimated ? "opacity-100 scale-100" : "opacity-0 scale-150"
            }`}
            style={{
              animation: isAnimated ? "zoomOut 0.8s ease-out" : "none",
            }}
          >
            <div className="flex items-center justify-center shadow-2xl">
              <img src={QuakeIcon} alt="quake icon" width="70" height="70" />
            </div>
          </div>

          {/* Heading */}
          <div className="relative inline-block px-6 py-4">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-4 z-10">
              <div className="w-[700px] h-[400px] rounded-full bg-black opacity-90 blur-2xl"></div>
            </div>

            <h1
              className={`relative text-white z-30 text-3xl sm:text-[25px] tracking-wider md:text-3xl lg:text-5xl font-bold mb-8 transition-all duration-1000 ${
                isAnimated
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-125"
              }`}
              style={{
                animation: isAnimated ? "zoomOutUp 0.8s ease-out 0.2s both" : "none",
              }}
            >
              INDIA'S MOST {" "}
              <br className="block md:hidden" /> 
              FORWARD{" "}
              <br className="hidden md:block mt-4" /> 
              THINKING
              <br className="block md:hidden" />  AND{" "}
              <span
                className="inline-block text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(79.14deg, #9C9FF9 , #3FFFFF 75.44%, #FF0908 83.33%, #FFFF1F 92.98%, #000000 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                50,000 SQ FT{" "}
                <br className="block md:hidden" /> 
              </span>
              <br className="hidden md:block mt-4" /> 
              IMMERSIVE
              <br className="block md:hidden" />  EXPERIENCE EVENT {" "}
              <br className="block md:hidden" /> 
              <br className="hidden md:block mt-4" /> 
              <span className="text-white text-3xl md:text-3xl lg:text-5xl">ARENA</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <Marquee
        className="absolute bottom-0 left-0 w-full bg-black text-white py-3 px-6 z-20"
        autoFill={true}
        speed={100}
      >
        <div className="flex items-center space-x-2 mx-6">
          <img src={QuakeIcon} alt="" width="30" height="30" />
          <h1 className="relative text-white text-lg md:text-xl lg:text-3xl font-bold">
            THE QUAKE NEVER STOPS
          </h1>
        </div>
      </Marquee>
    </>
  );
};

export default Hero;
