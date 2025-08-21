import { useState, useRef, useEffect } from "react";
import { Phone, MapPin } from "lucide-react";
import QuakeIcon from "../assets/icons/quake.svg";
import Crystal from "../assets/icons/quake_crystal.svg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.webp";
import img5 from "../assets/images/img5.jpeg";
import img4 from "../assets/images/img4.jpg";
import img6 from "../assets/images/img6.jpeg";
import Logo from "../assets/images/logo.png";
import quakeBg from "../assets/icons/quake_bg.png";
import ParallaxScroll from "./ui/ParallaxScroll";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  // Fixed: Use useEffect instead of useState with callback
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const images = [
    img1,
    img5,
    img4,
    img2,
    img3,
    img6,
    img1,
    img2,
    img5,
    img4,
    img6,
    img3,
  ];

  return (
    <>
      <style jsx>{`
        @keyframes moveUp {
          0% {
            transform: translateY(100px);
          }
          100% {
            transform: translateY(-100px);
          }
        }

        @keyframes moveDown {
          0% {
            transform: translateY(-100px);
          }
          100% {
            transform: translateY(100px);
          }
        }

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

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div className="relative h-screen bg-black overflow-hidden">
        {/* Background Parallax with very low z-index */}
        <div className="absolute inset-0 z-0">
          <ParallaxScroll images={images} />
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

        {/* Frosted Navbar */}
        

        <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl mx-auto px-2">
  <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-full px-8 py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="text-white font-bold text-xl tracking-wider">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Phone + Map Buttons with Shine */}
      <div className="flex gap-4">
        <a
          href="tel:+919346315817"
          className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white overflow-hidden hover:bg-opacity-20 transition-all duration-300"
        >
          <Phone size={20} />
          {/* Shine overlay */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
        </a>

        <a
          href="https://www.google.com/maps/place/Quake+Arena/@17.462856,78.3458393,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb933c2cabd405:0x4aaa671088da3ab5!8m2!3d17.4628509!4d78.3484142!16s%2Fg%2F11y8n12tyy?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white overflow-hidden hover:bg-opacity-20 transition-all duration-300"
        >
          <MapPin size={20} />
          {/* Shine overlay */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
        </a>
      </div>
    </div>
  </div>
</nav>


        {/* Main content with highest z-index */}
        <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-6">
          {/* Logo/Icon */}
          <div
            className={`mb-8 transition-all duration-800 ${
              isAnimated ? "opacity-100 scale-100" : "opacity-0 scale-150"
            }`}
            style={{
              animation: isAnimated ? "zoomOut 0.8s ease-out" : "none",
            }}
          >
            <div className="flex items-center justify-center  shadow-2xl">
              <img src={QuakeIcon} alt="" width="70" height="70" />
            </div>
          </div>

          {/* Main heading with circular black blob background */}
          <div className="relative inline-block px-6 py-4">
            {/* Dark shadow backdrop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-4">
              <div className="w-[700px] h-[250px] rounded-full bg-black opacity-90 blur-2xl"></div>
            </div>

            <h1
  className={`relative text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-8 leading-relaxed transition-all duration-1000 ${
    isAnimated
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 translate-y-12 scale-125"
  }`}
  style={{
    animation: isAnimated
      ? "zoomOutUp 0.8s ease-out 0.2s both"
      : "none",
  }}
>
  INDIA'S MOST FORWARD
  <br />
  THINKING AND{" "}
  <span
  className="inline-block text-transparent bg-clip-text"
  style={{
    backgroundImage:
      "linear-gradient(79.14deg, #9C9FF9 , #3FFFFF 75.44%, #FF0908 83.33%, #FFFF1F 92.98%, #000000 100%)",
    WebkitBackgroundClip: "text",   
    WebkitTextFillColor: "transparent", 
  }}
>
  50,000 SQ FT
</span>


  <br />
  IMMERSIVE EXPERIENCE EVENT
  <br />
  <span className="text-white text-2xl md:text-3xl lg:text-5xl">
    ARENA
  </span>
</h1>

          </div>

          {/* CTA Buttons
          <div 
            className={`flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-110'}`}
            style={{
              animation: isAnimated ? 'zoomOutUp 0.8s ease-out 0.4s both' : 'none'
            }}
          >
            <button className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 text-white px-6 py-2 font-medium hover:bg-opacity-20 hover:scale-105 transition-all duration-300 shadow-xl">
              ABOUT QUAKE
            </button>
            <button
              style={{ backgroundImage: `url(${quakeBg})` }}
              className="bg-contain bg-center text-white px-6 py-2 font-medium"
            >
              BOOK TICKETS
            </button>
          </div> */}
        </div>

      </div>
      <Marquee className="absolute bottom-0 left-0 w-full bg-black text-white py-3 px-6 z-20" autoFill={true} speed={100}>
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
