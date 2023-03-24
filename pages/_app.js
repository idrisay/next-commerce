import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ContextProvider } from "../utils/context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <div className="pt-[8vh] min-h-[94vh]">
        <Component {...pageProps} />
        </div>
        <Footer />
      </ContextProvider>
    </>
  );
}
