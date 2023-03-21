import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  //   const { data, error, loading } = useCallApi(
  //     `${process.env.BACKEND_URL}/products`
  //   );

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}products`)
      .then((resp) => resp.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <AppContext.Provider value={{ products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider };
export default AppContext;
