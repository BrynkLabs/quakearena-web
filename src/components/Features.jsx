import Bg from "../assets/videos/quake_video.mp4";
import Feature from "../assets/videos/feature.mp4";
const Features = () => {
    const features = [
      {
        title: "SPACE & AMBIENCE",
        description: "A well designed space with a futuristic vibe and picture perfect aesthetic. A space that elevates the senses & where audiences get together, let loose and listen to their favourite artists."
      },
      {
        title: "EXPERIENCE & ETHICS",
        description: "A consistent high quality and safe experience from the first touchpoint to the last. Strong values that emit a solid business ethic and support for causes is a huge plus."
      },
      {
        title: "FOOD & BEVERAGE",
        description: "A well thought out curated menu for food & beverage that keeps flavor, presentation & freshness at the core. Consistency is key. 20 hero products, tailor made to capture the market."
      },
      {
        title: "PRODUCTION",
        description: "State of the art design, ginormous LED installations, world class sound system. A multi- sensory AV Experience awaits."
      }
    ];
  
    return (
      <div>
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Video Background Placeholder */}
          <div className="absolute inset-0 bg-black">
            <video 
              src={Bg} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
  
          {/* Content */}
          <div className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {features.map((feature, index) => (
                  <div key={index} className="text-white space-y-6">
                    {/* Dash */}
                    <div className="w-12 h-1 bg-white"></div>
                    
                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight tracking-wide">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-tight text-base lg:text-lg font-light">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
        </div>
  
        {/* Event Space Section - Plain Black Background */}
        <div className="bg-black py-10">
  <div className="container mx-auto px-4">
    <div className="bg-white p-6 md:p-8 lg:p-10 max-w-4xl mx-auto rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        <video 
          src={Feature} 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover rounded-md"
        />

        {/* Right side - Content */}
        <div className="space-y-4">
          <div className="w-10 h-1 bg-black"></div>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-snug">
            50,000 SQ.FT OF<br />
            VERSATILE EVENT<br />
            SPACE
          </h2>
          <p className="text-black text-base lg:text-lg leading-relaxed">
            Providing an authentic industrial setting for live performances 
            and concerts, as well as for exhibitions, experiential events, 
            product launches, conferences, and filming.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    );
};

export default Features;