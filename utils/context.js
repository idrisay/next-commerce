import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState({
    data: [],
    loading: false,
    error: false,
  });
  const [filteredProducts, setFilteredProducts] = useState({
    data: [],
    loading: false,
    error: false,
  });
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    setProducts({ ...products, loading: true });
    fetch(`${process.env.BACKEND_URL}/products`)
      .then((resp) => resp.json())
      .then((res) => {
        setProducts({ ...products, data: res, loading: false });
        console.log({res})
      })
      .catch((error) => {
        setProducts({ ...products, data: [], loading: false, error });
      });
  }, []);

  useEffect(() => {
    setFilteredProducts({ ...filteredProducts, loading: true });
    fetch(`${process.env.BACKEND_URL}/products/search?query=${searchKeyword}`)
      .then((resp) => resp.json())
      .then((res) => {
        setFilteredProducts({ ...filteredProducts, loading: false, data: res });
      })
      .catch((error) => {
        setFilteredProducts({
          ...filteredProducts,
          loading: false,
          data: [],
          error: error,
        });
      });
  }, [searchKeyword]);

  // /products/search?query=ay

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        searchKeyword,
        setSearchKeyword,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider };
export default AppContext;
