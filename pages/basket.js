import React, { useContext, useState } from "react";
import AppContext from "@/utils/context";

import { RiDeleteBin5Line } from "react-icons/ri";

function Index() {
  const { cart, products } = useContext(AppContext);

  const productIds = cart.map((item) => item.productId);

  const productsInCart = productIds.map((id) => {
    return products.data.find((product) => product._id === id);
  });

  const total = productsInCart.reduce((acc, cur) => acc + cur?.price, 0);

  const handleRemove = (prod_id) => {
    console.log(prod_id)
  }

  return (
    <div className="flex bg-slate-200 h-full">
      <div className="w-2/3 overflow-auto h-[86vh] p-4">
        {productsInCart?.map((product, index) => (
          <div key={index}>
            <div className="relative flex m-4 items-center">
              <div className="w-1/3 flex justify-center">
                <img src={`${product?.image}`} alt="" className="w-40" />
              </div>
              <div className="w-2/3 flex flex-col space-y-4">
                <h2>{product?.title}</h2>
                <p>${product?.price}</p>
                <p className="text-sm text-gray-400">{product?.description}</p>
              </div>
              <div className="absolute right-0 bottom-0">
                <RiDeleteBin5Line onClick={() => handleRemove(product?._id)} className="text-red-500 text-xl cursor-pointer" />
              </div>
            </div>
            <hr className="h-px my-2 bg-black border-0" />
          </div>
        ))}
      </div>
      <div className=" static h-[86vh] bg-red-100 w-1/3 ">
        <div className="sticky top-[8vh] py-5 h-full flex flex-col justify-end items-end p-4">
          <h2 className="">
            Total ${!isNaN(total?.toFixed(2)) && total?.toFixed(2)}
          </h2>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Index;
