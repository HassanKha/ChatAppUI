import "@/styles/globals.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
