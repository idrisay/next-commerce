import { useCallApi } from "@/utils/api";
import ProductCard from "./ProductCard";
import AppContext from '../utils/context'
import { useContext } from 'react';

const Products = () => {
  const { products } = useContext(AppContext);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 m-2">
        {products.loading ? (
          <>Loading..</>
        ) : (
          products?.data.map((item, index) => <ProductCard key={index} product={item} />)
        )}
      </div>
    </div>
  );
};

export default Products;
