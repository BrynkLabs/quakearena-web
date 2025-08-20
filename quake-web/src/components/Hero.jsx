import { useState, useRef, useEffect } from 'react';
import { Menu } from 'lucide-react';
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

// ParallaxScroll Component
const ParallaxScroll = ({ images, className }) => {
    const gridRef = useRef(null);
  
    // Calculate parts for 4 columns
    const fourth = Math.ceil(images.length / 4);
  
    const firstPart = images.slice(0, fourth);
    const secondPart = images.slice(fourth, 2 * fourth);
    const thirdPart = images.slice(2 * fourth, 3 * fourth);
    const fourthPart = images.slice(3 * fourth);
  
    // Create multiple copies for seamless infinite scroll
    const firstPartLoop = [...firstPart, ...firstPart, ...firstPart];
    const secondPartLoop = [...secondPart, ...secondPart, ...secondPart];
    const thirdPartLoop = [...thirdPart, ...thirdPart, ...thirdPart];
    const fourthPartLoop = [...fourthPart, ...fourthPart, ...fourthPart];
  
    return (
      <>
        <style jsx>{`
          @keyframes moveUpSmooth {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-33.333%);
            }
          }
          
          @keyframes moveDownSmooth {
            0% {
              transform: translateY(-33.333%);
            }
            100% {
              transform: translateY(0);
            }
          }
          
          .scroll-container {
            will-change: transform;
          }
        `}</style>
        
        <div
          className={`h-screen items-start overflow-hidden w-full ${className || ''}`}
          ref={gridRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start max-w-7xl mx-auto gap-6 py-10 px-10">
            
            {/* First Part - Moving Up */}
            <div className="scroll-container" style={{
              animation: `moveUpSmooth ${firstPart.length * 2}s linear infinite`
            }}>
              <div className="grid gap-6">
                {firstPartLoop.map((el, idx) => (
                  <div key={"grid-1" + idx}>
                    <img
                      src={el}
                      className="h-96 w-full object-cover object-left-top rounded-lg"
                      height="400"
                      width="400"
                      alt="thumbnail" />
                  </div>
                ))}
              </div>
            </div>
  
            {/* Second Part - Moving Down */}
            <div className="scroll-container" style={{
              animation: `moveDownSmooth ${secondPart.length * 2}s linear infinite`
            }}>
              <div className="grid gap-6">
                {secondPartLoop.map((el, idx) => (
                  <div key={"grid-2" + idx}>
                    <img
                      src={el}
                      className="h-96 w-full object-cover object-left-top rounded-lg"
                      height="400"
                      width="400"
                      alt="thumbnail" />
                  </div>
                ))}
              </div>
            </div>
  
            {/* Third Part - Moving Up */}
            <div className="scroll-container" style={{
              animation: `moveUpSmooth ${thirdPart.length * 2}s linear infinite`
            }}>
              <div className="grid gap-6">
                {thirdPartLoop.map((el, idx) => (
                  <div key={"grid-3" + idx}>
                    <img
                      src={el}
                      className="h-96 w-full object-cover object-left-top rounded-lg"
                      height="400"
                      width="400"
                      alt="thumbnail" />
                  </div>
                ))}
              </div>
            </div>
  
            {/* Fourth Part - Moving Down */}
            <div className="scroll-container" style={{
              animation: `moveDownSmooth ${fourthPart.length * 2}s linear infinite`
            }}>
              <div className="grid gap-6">
                {fourthPartLoop.map((el, idx) => (
                  <div key={"grid-4" + idx}>
                    <img
                      src={el}
                      className="h-96 w-full object-cover object-left-top rounded-lg"
                      height="400"
                      width="400"
                      alt="thumbnail" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  

const QuakeArena = () => {
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
          0% { transform: translateY(100px); }
          100% { transform: translateY(-100px); }
        }
        
        @keyframes moveDown {
          0% { transform: translateY(-100px); }
          100% { transform: translateY(100px); }
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
      
      <div className="relative min-h-screen bg-black overflow-hidden">
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
              <div className="text-white font-bold text-xl tracking-wider">
                <img src={Logo} alt="" />
              </div>
              <button className="text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-all duration-300">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>

        {/* Main content with highest z-index */}
        <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-6">
          {/* Logo/Icon */}
          <div 
            className={`mb-8 transition-all duration-800 ${isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}
            style={{
              animation: isAnimated ? 'zoomOut 0.8s ease-out' : 'none'
            }}
          >
            <div className="flex items-center justify-center mb-4 shadow-2xl">
              <img src={QuakeIcon} alt="" width="60" height="60" />
            </div>
          </div>

          {/* Main heading with enhanced visibility */}
          <h1 
            className={`text-white text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-8 drop-shadow-2xl text-shadow-lg transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-125'}`}
            style={{
              textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0, 0, 0, 0.6)',
              animation: isAnimated ? 'zoomOutUp 0.8s ease-out 0.2s both' : 'none'
            }}
          >
            INDIA'S MOST FORWARD<br />
            THINKING AND <span className="text-blue-400 drop-shadow-xl">50,000</span> <span className="text-cyan-400 drop-shadow-xl">SQ</span> <span className="text-red-500 drop-shadow-xl">FT</span><br />
            IMMERSIVE EXPERIENCE EVENT<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">ARENA</span>
          </h1>

          {/* CTA Buttons */}
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
          </div>

          {/* Add these keyframe animations to your CSS */}
          <style jsx>{`
            @keyframes zoomOut {
              from {
                opacity: 0;
                transform: scale(1.5);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes zoomOutUp {
              from {
                opacity: 0;
                transform: translateY(12px) scale(1.25);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default QuakeArena;