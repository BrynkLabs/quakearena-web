import React, { useEffect, useState, useRef } from "react";
import Feature from "../assets/videos/about.mp4";

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

  return (
    <section
      ref={sectionRef}
      className="relative h-[170vh] w-full overflow-hidden text-white"
    >
      {/* Background Video - full screen, seamless */}
      <div className="sticky top-0 w-full h-screen ">

      <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src={Feature}
          autoPlay
          loop
          muted
          playsInline
        />
        
        {/* Title */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center z-20">
          <h2 className="text-lg md:text-xl lg:text-3xl font-semibold tracking-wide">
            A WILD DREAM{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AND BEYOND
            </span>
          </h2>
        </div>

        {/* ABOUT text */}
        <div className="absolute inset-0 flex items-start justify-center z-10 mt-32">
          <h1
            className="text-4xl md:text-6xl lg:text-8xl font-extrabold leading-tight text-center transition-colors duration-200"
            style={{
              color: textColor,
              transform: `translateY(${scrollProgress * 100}vh)`,
            }}
          >
            ABOUT <br /> QUAKE <br /> ARENA
          </h1>
        </div>

        {/* Cards with video inside */}
        <div className="absolute inset-0 z-20">
          {/* Card 1 */}
          <div
            className="absolute rounded-2xl shadow-2xl overflow-hidden border border-white/10 w-72 h-80"
            style={{
              top: "10%",
              left: "5%",
              transform: `translateY(${scrollProgress * 50}px)`,
              opacity: Math.max(0.3, 1 - scrollProgress * 0.7),
            }}
          >
            {/* Video Background */}
            <video
              className="absolute inset-0 w-full h-full object-cover bg-black/50"
              src={Feature}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="relative h-full p-6 flex flex-col ">
              <h3 className="text-4xl font-bold mb-2">4,500+</h3>
              <p className="text-lg text-gray-200">Venue Capacity</p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="absolute rounded-2xl shadow-2xl overflow-hidden border border-white/10 w-72 h-80"
            style={{
              top: "70%",
              left: "50%",
              transform: `translateX(-50%) translateY(${-scrollProgress * 30}px)`,
              opacity: Math.max(0.3, 1 - scrollProgress * 0.7),
            }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={Feature}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="relative h-full p-6 flex flex-col justify-end bg-black/50">
              <h3 className="text-4xl font-bold mb-2">200+</h3>
              <p className="text-lg text-gray-200">Backstage Capacity</p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="absolute rounded-2xl shadow-2xl overflow-hidden border border-white/10 w-72 h-80"
            style={{
              top: "120%",
              right: "5%",
              transform: `translateY(${scrollProgress * 40}px)`,
              opacity: Math.max(0.3, 1 - scrollProgress * 0.7),
            }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={Feature}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="relative h-full p-6 flex flex-col justify-end bg-black/50">
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-lg text-gray-200">Tables</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
