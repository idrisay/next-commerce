import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductDetails from "@/components/ProductDetails";
import AppContext from "../../utils/context";
import { useContext } from "react";

const product = () => {
  const router = useRouter();
  const { id } = router.query;
  const { products } = useContext(AppContext);

  let product = products?.data.find(x => x._id === id);
  console.log('id',product)
  
  if(product?.loading){
    return (
      <div>
        <p>Loading..</p>
      </div>
    )
  }

  return (
    <Suspense fallback={<div>Loading cities...</div>}>
      <ProductDetails product={product ? product : []} />
    </Suspense>
  );
};

export default product;
