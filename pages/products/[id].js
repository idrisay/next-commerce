import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductDetails from "@/components/ProductDetails";
import { useCallApi } from "@/utils/api";
import axios from "axios";

const product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});

  useEffect(() => {
    // const { data, error, loading } = useCallApi(
    //   `${process.env.BACKEND_URL}/products/${id}`
    // );
    if (id) {
      axios.get(`${process.env.BACKEND_URL}/products/${id}`).then((res) => {
        console.log("ress", res.data);
        setData(res.data);
      });
    }
  }, [id]);

  return (
    <div>
      <ProductDetails product={data} />
    </div>
  );
};

export default product;
