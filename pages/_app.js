import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ContextProvider } from "../utils/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "@/utils/authContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <AuthContextProvider>
          <Navbar />
          <div className="pt-[8vh] min-h-[94vh]">
            <Component {...pageProps} />
            <ToastContainer />
          </div>
          <Footer />
        </AuthContextProvider>
      </ContextProvider>
    </>
  );
}
