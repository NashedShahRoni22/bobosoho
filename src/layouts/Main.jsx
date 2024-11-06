import Navbar from "../components/shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/shared/Footer";
import ContactInfo from "../components/shared/ContactInfo";

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
