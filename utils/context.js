import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}products/search?query=${searchProducts}`)
    .then((resp) => resp.json())
    .then((res) => {
      setProducts(res);
    });
  }, [searchProducts])
  

  return (
    <AppContext.Provider
      value={{ products, setProducts, searchProducts, setSearchProducts }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider };
export default AppContext;
