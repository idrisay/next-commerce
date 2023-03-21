import AppContext from "../utils/context";
import { useContext } from "react";
import Link from "next/link";

const Navbar = () => {
  const { products, setSearchProducts } = useContext(AppContext);

  return (
    <nav className="bg-gray-800 flex justify-around w-full">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 w-full">
        <div className="flex items-center h-16 w-full">
          <div className="flex items-center justify-between w-full ">
            <div className="">
              <img className="h-10 w-10" src="/shop.svg" alt="Logo" />
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="flex relative">
                  <input
                    type="text"
                    className="rounded-md pl-2"
                    placeholder="Search"
                    onChange={(e) => setSearchProducts(e.target.value)}
                  />
                  <p className="absolute top-0 right-2 text-gray-500">{products.length}</p>
                </div>
                <Link href="/">
                  <i className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </i>
                </Link>
                <Link href="/products">
                  <i className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Products
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
