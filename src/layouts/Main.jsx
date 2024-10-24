import Navbar from "../shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../shared/Footer";
import ContactInfo from "../shared/ContactInfo";

export default function Main() {
  return (
    <main className="font-poppins">
      <ScrollRestoration />
      <ContactInfo />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
