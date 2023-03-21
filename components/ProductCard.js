import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  
  return (
    <div class="py-6">
      <div class=" min-h-[250px] flex w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          class="w-1/3 bg-cover"
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        ></div>
        <div class="w-2/3 py-4 pl-8 flex flex-col justify-between">
          <h1 class="text-gray-900 font-bold text-2xl">Backpack</h1>
          <p class="mt-2 text-gray-600 text-sm">
            {product?.description?.length > 100 ? (
              <span>{product?.description?.slice(0, 100)}...</span>
            ) : (
              <span>{product?.description?.slice(0, 100)}</span>
            )}
          </p>

          <div class="flex item-center justify-between mt-3">
            <h1 class="text-gray-700 font-bold text-xl">$220</h1>

            <div class="flex item-center mt-2">
              <svg
                class="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                class="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                class="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                class="w-5 h-5 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                class="w-5 h-5 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
