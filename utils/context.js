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
  const [cart, setCart] = useState([])

  const addCart = (product, userId) => {
    if(userId){
      // userId, productId, quantity 
      fetch(`${process.env.BACKEND_URL}/products/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId: product._id, quantity: 1 }),
      })
        .then((response) => response.json())
        .then((data) => {
          setCart(data.cart.products)
          localStorage.setItem('cart', JSON.stringify(data.cart.products) )
        })
        .catch((error) => console.error(error));
    }else{
      setCart([...cart, product])
      localStorage.setItem('cart', JSON.stringify([...cart, product]) )
    }
  }

  useEffect(() => {
    let localStorageCart =  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    setCart(localStorageCart)
  }, [])
  

  useEffect(() => {
    setProducts({ ...products, loading: true });
    fetch(`${process.env.BACKEND_URL}/products`)
      .then((resp) => resp.json())
      .then((res) => {
        setProducts({ ...products, data: res, loading: false });
   
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
        cart,
        setCart,
        addCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider };
export default AppContext;
