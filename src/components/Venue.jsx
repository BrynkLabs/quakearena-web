import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import SecondFloor from "../assets/images/first_floor.svg";
import FirstFloor from "../assets/images/ground_floor.svg";
import ThirdFloor from "../assets/images/second_floor.svg";
import VenueMap from "../assets/images/venue_map.png";
import Map from "../assets/icons/maps.png";
import VenueSide from "../assets/icons/venue_side.svg";

const Venue = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (floor) => {
        setOpenDropdown(openDropdown === floor ? null : floor);
    };

    const floors = [
        {
            id: 'ground',
            title: 'GROUND FLOOR',
            subtitle: 'OPEN DANCE FLOOR',
            image: {FirstFloor}
        },
        {
            id: 'mezzanine',
            title: 'MEZZANINE',
            subtitle: '',
            image: {SecondFloor}
        },
        {
            id: 'mezzanine2',
            title: 'MEZZANINE 2',
            subtitle: '',
            image: {ThirdFloor}
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <div className="text-center py-8 relative">
                <div className="flex justify-between items-center px-8">
                    <img src={VenueSide} alt="" className="w-16 h-auto" />
                    <h1 className="text-4xl md:text-4xl font-bold text-white tracking-wider">VENUE MAP</h1>
                    <img 
                        src={VenueSide} 
                        alt="" 
                        className="w-16 h-auto transform scale-x-[-1]" 
                    />
                </div>
            </div>

            {/* Desktop Version - Side by side layout */}
            <div className="hidden lg:block">
                <div className="flex justify-center items-start gap-8 px-8 pb-16">
                    <img src={FirstFloor} alt="" />
                    <img src={SecondFloor} alt="" />
                    <img src={ThirdFloor} alt="" />
                </div>
            </div>

            {/* Mobile Version - Dropdown layout */}
            <div className="lg:hidden px-4 pb-16">
                {floors.map((floor) => (
                    <div key={floor.id} className="mb-4">
                        {/* Dropdown Header */}
                        <button
                            onClick={() => toggleDropdown(floor.id)}
                            className="w-full bg-gray-900/80 border border-cyan-400 rounded-lg p-4 flex items-center justify-between hover:bg-gray-800/80 transition-colors"
                        >
                            <div className="text-left">
                                <div className="text-xs text-cyan-400 mb-1">VENUE MAP</div>
                                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                    {floor.title}
                                </div>
                                {floor.subtitle && (
                                    <div className="text-sm text-gray-400 mt-1">{floor.subtitle}</div>
                                )}
                            </div>
                            <div className="text-cyan-400">
                                {openDropdown === floor.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                            </div>
                        </button>

                        {/* Dropdown Content */}
                        {openDropdown === floor.id && (
                            <div className="mt-2 border border-cyan-400 rounded-lg p-4 bg-gray-900/50">
                                {/* Stage */}
                                <div className="text-center mb-4">
                                    <div className="bg-purple-600 text-white px-4 py-2 rounded text-sm font-semibold inline-block">
                                        STAGE
                                    </div>
                                </div>
                                
                                {/* Image Placeholder */}
                                <div className="w-full h-80 bg-gray-800 border border-gray-600 rounded flex items-center justify-center">
                                    <div className="text-center text-gray-400">
                                        <div className="text-lg font-semibold">{floor.title}</div>
                                        <div className="text-sm">Map Image Placeholder</div>
                                        <div className="mt-2 text-xs">Replace with actual venue layout</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Google Maps Button */}
            <div className="text-center pb-8">
                <a 
                    href="https://www.google.com/maps/place/Quake+Arena/@17.462856,78.3458393,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb933c2cabd405:0x4aaa671088da3ab5!8m2!3d17.4628509!4d78.3484142!16s%2Fg%2F11y8n12tyy?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black font-medium text-sm px-6 py-2 inline-flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                    <img src={Map} alt="" width="15"/>
                    VIEW ON GOOGLE MAPS
                </a>
            </div>
        </div>
    );
};

export default Venue;