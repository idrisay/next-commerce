import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';



const Login = () => {
	const router = useRouter()
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
		if(data.message == "Login successful"){
      localStorage.setItem("access_token",data.token)
			toast.success("Login successfully");
      router.reload(window.location.pathname)
			router.push("/")
		}else {
			toast.error(data.message);
		}
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-[86vh] bg-gray-100  flex flex-col justify-center">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Login Form with Floating Labels
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    type="email"
                    required
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    required
                    minLength="5"
                    onChange={handleChange}
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative flex justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-2 py-1"
                  >
                    Submit
                  </button>
                  <Link href="/register">Register</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
