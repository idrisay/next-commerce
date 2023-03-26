import AppContext from "@/utils/context";
import Link from "next/link";
import { useContext, useState } from "react";

const Search = () => {
  const {

    searchKeyword,
    setSearchKeyword,
    filteredProducts,
 
  } = useContext(AppContext);

  return (
    <div className="relative">
      <input
        type="text"
        value={searchKeyword}
        placeholder="Search..."
        onChange={(e) => setSearchKeyword(e.target.value)}
        className="bg-gray-800 border-[1px] outline-0 border-white rounded-md text-white w-32 px-2"
      />
      {searchKeyword.length > 0 && (
        <div className="bg-white absolute border-2 top-8 right-0 max-w-md w-screen">
          {filteredProducts.loading ? (
            <>Loading</>
          ) : filteredProducts.data.length == 0 ? (
            <p>Not Found</p>
          ) : (
            <div className="grid grid-cols-3">
              {filteredProducts?.data.slice(0, 5).map((product, index) => (
                <Link onClick={() => setSearchKeyword('')} href={`/products/${product._id}`} key={index} className="border-2 m-1 rounded-md">
                  <h2 className="text-center">{product.title.slice(0,20)}...</h2>
                  <img src={product.image} alt="" />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
