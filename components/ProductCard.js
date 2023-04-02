import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {

  return (
    <div className="w-full max-w-sm mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
      <div>
        <Link href={`/products/${product._id}`}>
          <img
            className="p-8 rounded-t-lg"
            src={product?.image}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5">
          <Link href={`/products/${product._id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
          </Link>
          {/* <div className="my-4">
            <p className="text-white">{product.description}</p>
          </div> */}
        </div>
      </div>
      <div className="flex items-center justify-between px-4 pb-4">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${product.price}
        </span>
        {/* <Link
          href="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </Link> */}
      </div>
    </div>
  );
};

export default ProductCard;
