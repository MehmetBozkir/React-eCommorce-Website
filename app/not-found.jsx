import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import ErrorPage from "./Component/ErrorPage";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <ErrorPage/>
      <Footer />
    </div>
  );
}
