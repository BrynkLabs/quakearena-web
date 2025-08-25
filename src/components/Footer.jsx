import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import Brynklabs from "../assets/icons/brynklabs_logo.svg"; 
import Quake from "../assets/images/logo.png";
import Whatsapp from "../assets/icons/whatsapp.svg";
import X from "../assets/icons/x.svg";


const Footer = () => {
  const instagramLink = "https://www.instagram.com/quakearenaindia/?hl=en";

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Quake Arena Logo */}
        <div className="mb-8">
          <div className="inline-block">
            <img 
              src={Quake} 
              alt="Quake Arena Logo" 
              className="w-40 sm:w-48 md:w-56 lg:w-52 h-auto mx-auto"
            />
          </div>
        </div>

        {/* White line separator */}
        <div className="w-14 h-3 bg-white mx-auto mb-12"></div>

        {/* Brynk Labs Logo */}
        <div className="mb-8">
          <a className="flex items-center justify-center" href='https://brynklabs.com/' target="_blank" rel="noopener noreferrer">
            <img 
              src={Brynklabs} 
              alt="Brynk Labs Logo" 
              className="w-32 sm:w-40 md:w-48 lg:w-44 h-auto"
            />
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          {/* WhatsApp */}
          <a 
            href={instagramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
            aria-label="WhatsApp"
          >
            <img src={Whatsapp} alt="WhatsApp" className="w-6 sm:w-7 md:w-7 h-auto" />
          </a>
          
          {/* Instagram */}
          <a 
            href={instagramLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 sm:w-7 md:w-7 text-black" />
          </a>
          
          {/* X (Twitter) */}
          <a 
            href={instagramLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="X (Twitter)"
          >
            <img src={X} alt="Twitter (X)" className="w-6 sm:w-7 md:w-7 h-auto" />
          </a>
        </div>

        {/* Copyright and Contact Info */}
        <div className="space-y-3">
          <div className="text-gray-400 text-sm">
            © 2025 QUAKE ARENA
          </div>
          <div className="text-gray-400 text-sm">
            For any queries, call +91 9078814462
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
