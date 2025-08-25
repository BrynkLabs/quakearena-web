import React, { useEffect, useState, useRef } from "react";
import Feature from "../assets/videos/about.mp4";
import bg from "../assets/videos/video.mp4"; 

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const scrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            const progress = Math.max(
              0,
              Math.min(1, -sectionTop / (sectionHeight - windowHeight))
            );
            setScrollProgress(progress);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = `rgb(${255 - Math.floor(scrollProgress * 255)}, ${
    255 - Math.floor(scrollProgress * 255)
  }, ${255 - Math.floor(scrollProgress * 255)})`;
  console.log(`Text Color: ${textColor}`);
  
  const isDark = (255 - Math.floor(scrollProgress * 255)) <= 20;

  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .spiral-text-and {
          background: linear-gradient(79.14deg, #000000 0%, #FFFFFF 17.54%, #FFFFFF 49.12%, #1117FF 63.16%, #3FFFFF 75.44%, #FF0908 83.33%, #FFFF1F 92.98%, #000000 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 2s ease-in-out infinite;
          display: inline-block;
        }

        .spiral-text-beyond {
          background: linear-gradient(79.14deg, #000000 0%, #FFFFFF 17.54%, #FFFFFF 49.12%, #1117FF 63.16%, #3FFFFF 75.44%, #FF0908 83.33%, #FFFF1F 92.98%, #000000 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 2s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
      
      <section
        ref={sectionRef}
        className="relative h-[172vh] w-full overflow-hidden text-white px-6 md:px-24"
      >
          <div className="absolute top-0 left-0 w-full h-[175vh] bg-black/85 -z-5 " />
          {/* bottom-[-70px] */}
          <video
            className="absolute top-0 pb-6 left-0 w-full h-[172vh] object-cover -z-10 "
            src={Feature}
            autoPlay
            loop
            muted
            playsInline
          />

        {/* Background Video - full screen, seamless */}
        <div className="sticky top-0 w-full h-screen ">

          {/* Title */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center z-20">
            <h2 className="text-lg md:text-xl lg:text-3xl font-semibold tracking-wide">
              A WILD DREAM{" "}
              <span className="spiral-text-and">AND</span>{" "}
              <span className="spiral-text-beyond">BEYOND</span>
            </h2>
          </div>

          {/* ABOUT text */}
          <div className="absolute inset-0 flex items-start justify-center z-10 mt-32">
          <h1
            className={`text-6xl  lg:text-6xl font-extrabold leading-tight text-center transition-colors duration-200`}
            style={{
              color: textColor, // keep the fill
              transform: `translateY(${scrollProgress * 100}vh)`,
              WebkitTextStroke: isDark ? "2px white" : "0px transparent", // add white border when dark
              paintOrder: "stroke fill", // ensures stroke is behind the fill
            }}
          >
            ABOUT <br /> QUAKE <br /> ARENA
          </h1>
        </div>

          {/* Cards with video inside */}
          <div className="absolute inset-0 z-20">
            {/* Card 1 */}
            <div
              className="absolute rounded-2xl shadow-2xl overflow-hidden border border-white/10 w-44 h-60 md:w-72 md:h-80"
              style={{
                top: window.innerWidth < 768 ? "50%" : "10%", // Mobile: 40%, Desktop: 10%
                left: window.innerWidth < 768 ? "" : "5%"   // Mobile: 10%, Desktop: 5%
              }}
            >
              {/* Video Background */}
              <video
                className="absolute inset-0 w-full h-full object-cover "
                src={bg}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="relative h-full p-4 md:p-6 flex flex-col justify-end bg-black/50 ">
                <h3 className="text-2xl md:text-4xl font-bold mb-2">4,500+</h3>
                <p className="text-sm md:text-lg text-gray-200">Venue Capacity</p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="absolute rounded-2xl shadow-2xl overflow-hidden border border-white/10 w-44 h-60 md:w-72 md:h-80"
              style={{
                top: window.innerWidth < 768 ? "90%" : "70%", // Mobile: 80%, Desktop: 70%
                left: window.innerWidth < 768 ? "30%" : "40%" // Mobile: 50%, Desktop: 40%
              }}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={bg}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="relative h-full p-4 md:p-6 flex flex-col justify-end bg-black/50">
                <h3 className="text-2xl md:text-4xl font-bold mb-2">200+</h3>
                <p className="text-sm md:text-lg text-gray-200">Backstage Capacity</p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="absolute rounded-2xl shadow-2xl overflow-hidden border border-white/10 w-44 h-60 md:w-72 md:h-80"
              style={{
                top: window.innerWidth < 768 ? "130%" : "120%",
                right: window.innerWidth < 768 ? "0%" : "5%" // Mobile: 10%, Desktop: 5%
              }}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={bg}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="relative h-full p-4 md:p-6 flex flex-col justify-end bg-black/50">
                <h3 className="text-2xl md:text-4xl font-bold mb-2">100+</h3>
                <p className="text-sm md:text-lg text-gray-200">Tables</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;