import Search from "./Search";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { useContext } from "react";
import AppContext from "@/utils/context";

const Navbar = () => {
  const { cart } = useContext(AppContext);
  return (
    <nav className="fixed h-[8vh] bg-gray-800 flex justify-around w-full z-20">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              className="mr-4 space-x-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              href="/products"
            >
              Products
            </Link>
            <Search />
            <Link href="/basket" className="relative">
              <SlBasket className="text-white text-2xl ml-4 hover:text-orange-700" />
              <span className="text-white bg-red-700 absolute px-1 text-xs -top-1 -right-1 rounded-full">
                {cart.length}
              </span>
            </Link>
            <Link href="/login" className="ml-4">
              <BsPersonCircle className="h-8 text-white text-xl hover:text-orange-700" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
