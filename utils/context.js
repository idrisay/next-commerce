import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState({data: [], loading: false, error: false});
  const [searchProducts, setSearchProducts] = useState("");
  const [filteredProducts, setFilteredProducts] = useState({data: [], loading: false, error: false});

  useEffect(() => {
    setFilteredProducts({data: [], loading : true, error: false});
    if (searchProducts) {
      fetch(`${process.env.BACKEND_URL}products/search?query=${searchProducts}`)
        .then((resp) => resp.json())
        .then((res) => {
          setFilteredProducts({data: res, loading : false, error: false});
        }).catch((error) => {
          setFilteredProducts({data: [], loading : false, error: error});
        })
      } else {
      setFilteredProducts({data: [], loading : false, error: false});
    }
  }, [searchProducts]);

  useEffect(() => {
    setProducts({data: [], loading : true, error: false});
    fetch(`${process.env.BACKEND_URL}products`)
      .then((resp) => resp.json())
      .then((res) => {
        setProducts({data: res, loading : false, error: false});
      }).catch((error) => {
        setProducts({data: [], loading : false, error: error});
      })
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        searchProducts,
        setSearchProducts,
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
