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
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-black">
          {/* Replace this div with your video element */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
            <div className="text-gray-500 text-xl">Video Background Placeholder</div>
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
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
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Optional: Curved bottom border like in the image */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-20 text-black fill-current"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>
    );
  };
  
  export default Features;