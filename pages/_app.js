import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ContextProvider } from "../utils/context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>
    </>
  );
}
