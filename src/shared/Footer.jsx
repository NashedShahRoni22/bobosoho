import logo from "../assets/bobosoho.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  const hostingProducts = [
    {
      name: "Fully Managed Dedicated Server",
      link: "/fully-managed-dedicated-server",
    },
    {
      name: "Fully Managed Virtual Dedicated Server",
      link: "/fully-managed-virtual-dedicated-server",
    },
    {
      name: "Self Managed Dedicated Server",
      link: "/self-managed-dedicated-server",
    },
    {
      name: "Fully Managed Pure Website Hosting",
      link: "fully-managed-pure-web-hosting",
    },
    {
      name: "Self Managed Pure Website Hosting",
      link: "/self-managed-pure-web-hosting",
    },
  ];

  const Products = [
    {
      name: "Bitss Cyber Security",
      link: "https://bitss.fr/",
    },
    {
      name: "Pensaki Blackboard",
      link: "https://pensaki.org/",
    },
    {
      name: "Omada HR Payroll",
      link: "https://omada-clasico.org/",
    },
    {
      name: "Ifgaap Acounting & Invoicing",
      link: "https://ifgaap.org/",
    },
    {
      name: "Ifgaap Acounting & Invoicing",
      link: "https://ifgaap.org/",
    },
    {
      name: "BFINIT Saas Software",
      link: "https://officetools.bobosoho.com/special-software/",
    },
    {
      name: "BFINIT White Label",
      link: "https://bfin.company/software/white_label/",
    },
    {
      name: "Sosay Social Media",
      link: "https://sosay.org/",
    },
  ];

  const Pages = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Career",
      link: "/career",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
  ];

  return (
    <footer>
      {/* email joining section */}
      <section className="py-10 bg-primary text-white text-center md:py-20">
        <div className="md:mx-auto md:container">
          <h2 className="text-2xl lg:text-5xl font-semibold tracking-wider">
            Join BFINIT Cosmopolitan
          </h2>
          <p className="mt-2 text-lg tracking-wide">
            Enjoy up to 2 Months Free with Your Subscription!
          </p>
          <div className="mx-auto mt-8 text-black flex items-center justify-center w-3/4 md:w-2/5">
            <input
              className="w-full rounded-l px-4 py-2.5 outline-none shadow"
              type="email"
              placeholder="Enter your Email"
            />
            <button
              type="submit"
              className="rounded-r bg-[#6a93fc] px-4 py-2.5 text-white transition-all ease-in-out duration-200 shadow hover:bg-blue-500"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* footer section */}
      <section className="bg-[#001a20] text-white">
        <div className="py-10 mx-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:py-28 md:mx-auto md:container">
          <div className="">
            <Link to={"/"}>
              <img className="w-44" src={logo} alt="bobosoho logo" />
            </Link>
            <p className="mt-3 text-2xl">By BFINIT Cosmopolitan</p>
            <p className="mt-3 mb-6">
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
            <div className="flex flex-col gap-2 ml-2 mt-2">
              {hostingProducts.map((product, i) => (
                <Link to={product.link} key={i} className="flex gap-2.5">
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
          {/* other products */}
          <div>
            <h1 className="font-semibold">Other Products</h1>
            <div className="flex flex-col gap-2 ml-2 mt-2">
              {Products.map((product, i) => (
                <Link to={product.link} key={i} className="flex gap-2.5">
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
          {/* pages */}
          <div>
            <h1 className="font-semibold">Quick Links to BFINIT</h1>
            <div className="flex flex-col gap-2 ml-2 mt-2">
              {Pages.map((product, i) => (
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
