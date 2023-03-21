import React from "react";

const SearchProduct = ({ filteredProducts }) => {
  console.log(filteredProducts);
  return (
    <div>
      <p className="text-right text-gray-500">
        Product number of serach: {filteredProducts.length}
      </p>
      <div className="grid grid-cols-3">
        {filteredProducts.slice(0,6)?.map((product) => (
          <div key={product._id} className="border-2 m-1">
            <h2>{product.title.slice(0,20)}...</h2>
            <img src={product.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchProduct;
