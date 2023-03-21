import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductDetails from "@/components/ProductDetails";

const product = () => {
  const router = useRouter();
  const { id } = router.query;
  

  return (
    <div>
      {/* <ProductDetails product={data} /> */}
    </div>
  );
};

export default product;
