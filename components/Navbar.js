import AppContext from "../utils/context";
import { useContext } from "react";
import Link from "next/link";
import SearchProduct from "./SearchProduct";

const Navbar = () => {
  const { setSearchProducts, filteredProducts, searchProducts } =
    useContext(AppContext);

  return (
    <nav className="bg-gray-800 flex justify-around w-full fixed top-0 left-0 h-[8vh]">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 w-full">
        <div className="flex items-center h-16 w-full">
          <div className="flex items-center justify-between w-full ">
            <div className="">
              <img className="h-10 w-10" src="/shop.svg" alt="Logo" />
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
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
                <div className="flex relative">
                  <input
                    type="text"
                    className="rounded-md pl-2"
                    placeholder="Search"
                    onChange={(e) => setSearchProducts(e.target.value)}
                  />

                  {searchProducts.length && (
                    <div className="absolute top-8 rounded-md p-2 shadow-2xl right-0 bg-white max-w-md w-screen">
                      {filteredProducts.loading ? (
                        <p className="text-center">Loading</p>
                      ) : (
                        <SearchProduct
                          filteredProducts={filteredProducts.data}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
