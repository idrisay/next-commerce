import { useCallApi } from "@/utils/api";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data, error, loading } = useCallApi(
    `${process.env.BACKEND_URL}/products`
  );


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">
        {loading ? (
          <>Loading..</>
        ) : (
          data?.map((item, index) => <ProductCard key={index} product={item} />)
        )}
      </div>
    </div>
  );
};

export default Products;
