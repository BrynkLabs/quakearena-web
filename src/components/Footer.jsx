import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import Brynklabs from "../assets/icons/brynklabs_logo.svg"; 
import Quake from "../assets/images/logo.png";

const Footer = () => {
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
            href="#" 
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-black" />
          </a>
          
          {/* Instagram */}
          <a 
            href="#" 
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-black" />
          </a>
          
          {/* X (Twitter) */}
          <a 
            href="#" 
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
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