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
      <div className="max-w-4xl mx-auto text-center">
        {/* Quake Arena Logo */}
        <div className="mb-8">
          <div className="inline-block">
            <img src={Quake} alt="" width="200" height="200" />
          </div>
        </div>

        {/* White line separator */}
        <div className="w-14 h-3 bg-white mx-auto mb-12"></div>

        {/* Brynk Labs Logo */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2">
            <img src={Brynklabs} alt="" width="200" height="200" />
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          {/* WhatsApp */}
          <a 
            href={instagramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center "
            aria-label="WhatsApp"
          >
            <img src={Whatsapp} alt="" width="30" height="30" />
          </a>
          
          {/* Instagram */}
          <a 
            href={instagramLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-8 h-8 text-black" />
          </a>
          
          {/* X (Twitter) */}
          <a 
            href={instagramLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="X (Twitter)"
          >
            <img src={X} alt="" width="30" height="30" />

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
