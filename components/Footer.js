import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 w-full h-[6vh] z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link
               href="#">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaFacebook />
              </Link>
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