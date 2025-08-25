import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SecondFloor from "../assets/images/first_floor.png";
import FirstFloor from "../assets/images/ground_floor.png";
import ThirdFloor from "../assets/images/second_floor.png";
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
            image: FirstFloor
        },
        {
            id: 'mezzanine',
            title: 'MEZZANINE',
            subtitle: '',
            image: SecondFloor
        },
        {
            id: 'mezzanine2',
            title: 'MEZZANINE 2',
            subtitle: '',
            image: ThirdFloor
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
                <div className="flex justify-center items-start gap-8 px-8 pb-16 ">
                    <img src={FirstFloor} alt="Ground Floor" width="400px" />
                    <img src={SecondFloor} alt="Mezzanine" width="400px" />
                    <img src={ThirdFloor} alt="Mezzanine 2" width="400px" />
                </div>
            </div>

            {/* Mobile Version - Dropdown layout */}
            <div className="lg:hidden px-4 pb-16">
                {floors.map((floor) => (
                    <div key={floor.id} className="mb-4">
                        {/* Dropdown Header */}
                        <button
                            onClick={() => toggleDropdown(floor.id)}
                            className="w-full border border-white p-4 flex items-center justify-between"
                        >
                            <div className="text-left">
                                <div className="text-xl text-white">
                                    {floor.title}
                                </div>
                            </div>
                            <div className="text-white-400">
                                {openDropdown === floor.id ? <Minus size={24} /> : <Plus size={24} />}
                            </div>
                        </button>

                        {/* Dropdown Content */}
                        {openDropdown === floor.id && (
                            <div className="mt-2 rounded-lg p-4 ">
                                <img 
                                    src={floor.image} 
                                    alt={floor.title} 
                                    className="w-full h-auto rounded-lg "
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Google Maps Button */}
            <div className="text-center pb-8">
                <a 
                    href="https://www.google.com/maps/place/Quake+Arena/@17.462856,78.3458393,17z"
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
