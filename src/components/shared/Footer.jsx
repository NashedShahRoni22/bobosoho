import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pages } from "../../data/pages";
import { products } from "../../data/products";
import logo from "../../assets/bobosoho.jpg";

export default function Footer() {
  const [hostingProducts, setHostingProducts] = useState([]);

  useEffect(() => {
    const fetchHostingProducts = async () => {
      const res = await fetch(
        "https://hpanel.bfinit.com/api/product/categories",
      );
      const data = await res.json();
      setHostingProducts(data.data);
    };

    fetchHostingProducts();
  }, []);

  return (
    <footer>
      {/* email joining section */}
      <section className="bg-electricViolet py-10 text-center text-white md:px-5 md:py-20">
        <div className="md:container md:mx-auto">
          <h2 className="text-2xl font-semibold tracking-wider lg:text-3xl">
            Join BFINIT Cosmopolitan
          </h2>
          <p className="mt-2 text-lg tracking-wide">
            Enjoy up to 2 Months Free with Your Subscription!
          </p>
          <div className="mx-auto mt-8 flex w-3/4 items-center justify-center text-black md:w-2/5">
            <input
              className="w-full rounded-l px-4 py-2.5 shadow outline-none"
              type="email"
              placeholder="Enter your Email"
            />
            <button
              type="submit"
              className="rounded-r bg-[#6a93fc] px-4 py-2.5 text-white shadow transition-all duration-200 ease-in-out hover:bg-blue-500"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* footer section */}
      <section className="bg-primary text-white md:px-5">
        <div className="mx-5 grid grid-cols-1 gap-8 py-10 md:container md:mx-auto md:grid-cols-2 md:py-28 lg:grid-cols-4">
          <div className="">
            <Link to={"/"}>
              <img
                className="w-44"
                src={logo}
                alt="bobosoho logo"
                loading="lazy"
              />
            </Link>
            <p className="mt-3 text-2xl">By BFINIT Cosmopolitan</p>
            <p className="mb-6 mt-3">
              Securely connecting you with seamless email and chat for personal
              and business communication.
            </p>
            <a
              className="underline"
              href="mailto:support@bobosohomail.com"
              target="_blanck"
            >
              support@bobosohomail.com
            </a>
          </div>
          {/* hosting products */}
          <div>
            <h1 className="font-semibold">Hosting Products</h1>
            <div className="ml-2 mt-2 flex flex-col gap-2">
              {hostingProducts &&
                hostingProducts.length > 0 &&
                hostingProducts.map((product, i) => (
                  <Link
                    key={i}
                    to={`https://bfinit.com/hosting-products/${product.id}`}
                    target="_blanck"
                    className="flex gap-2.5"
                  >
                    {product.name}
                  </Link>
                ))}
            </div>
          </div>
          {/* other products */}
          <div>
            <h1 className="font-semibold">Other Products</h1>
            <div className="ml-2 mt-2 flex flex-col gap-2">
              {products.map((product, i) => (
                <Link to={product.link} key={i} className="flex gap-2.5">
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
          {/* pages */}
          <div>
            <h1 className="font-semibold">Quick Links to BFINIT</h1>
            <div className="ml-2 mt-2 flex flex-col gap-2">
              {pages.map((product, i) => (
                <Link to={product.link} key={i} className="flex gap-2.5">
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
