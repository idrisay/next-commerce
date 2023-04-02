import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import AppContext from "@/utils/context";
import Link from "next/link";
import ProductDetails from "@/components/ProductDetails";

const product = () => {
  const router = useRouter();
  const { id } = router.query;
  const { products } = useContext(AppContext);

  let productDetails;

  if (id) {
    productDetails = products?.data.find((item) => item._id === id);

  }

  return (
    <div>
      {products?.loading ? (
        <p>Loading</p>
      ) : productDetails ? (
        <ProductDetails product={productDetails} />
      ) : (
        <>NotFound</>
      )}
    </div>
  );
};

export default product;
