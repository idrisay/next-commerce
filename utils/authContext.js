import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
let accessToken;

if (typeof window !== "undefined") {
  accessToken = localStorage.getItem("access_token");
}

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}/auth/check-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ access_token: accessToken }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        getUserCart(data.id)
      })
      .catch((error) => console.error(error));
  }, []);


  const getUserCart = (userId) => {
    fetch(`${process.env.BACKEND_URL}/products/cart/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('cart', JSON.stringify(data.cart.products) )
      })
      .catch((error) => console.error(error));
  }

  

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
