import React from "react";
import { useRouter } from "next/router";
import ProductDetails from "@/components/ProductDetails";

const product = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default product;
