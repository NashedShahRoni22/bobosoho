import Banner from "../components/Banner";
import Features from "../components/Features";
import Blogs from "./Blogs/Blogs";

export default function Home() {
  return (
    <main className="md:px-5">
      <Banner />
      <Features />
      <Blogs />
    </main>
  );
}
