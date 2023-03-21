import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 fixed bottom-0 left-0 z-20 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm">&copy; {year} Next Commerce Main</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;