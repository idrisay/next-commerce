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
        console.log(data)
        if(data.loggedIn){
          setUser(data);
          getUserCart(data.id)
        }
      })
      .catch((error) => console.error(error));
  }, []);


  const getUserCart = async (userId) => {
    const response = await fetch(`${process.env.BACKEND_URL}/products/cart/${userId}`);
    const data = await response.json();
    localStorage.setItem('cart', JSON.stringify(data.cart.products))
    return data;
  }
  

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        getUserCart
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
