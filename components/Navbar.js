const Navbar = () => {
    return (
      <nav className="bg-gray-800 flex justify-around w-full">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/">
                    <i className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </i>
                  </a>
                  <a href="/products">
                    <i className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Products
                    </i>
                  </a>
                  <a href="/about">
                    <i className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </i>
                  </a>
                  <a href="/contact">
                    <i className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Contact
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;