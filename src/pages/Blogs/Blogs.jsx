import { Link, useLocation } from "react-router-dom";
import { blogsData } from "../../data/blogsData";

export default function Blog() {
  const { pathname } = useLocation();

  return (
    <section className="mx-5 min-h-screen pb-60 pt-10 md:container md:mx-auto md:pt-20">
      <h2 className="text-center text-4xl font-semibold md:text-5xl">
        Recent Blogs & Information
      </h2>
      <p className="mt-6 text-center text-xl font-medium text-gray-600">
        Get updated with the latest news and information from BoboSoho & BFINTIT
        Cosmopolitan
      </p>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pathname === "/"
          ? blogsData.slice(0, 6).map((data, i) => (
              <div key={i} className="rounded border">
                <Link to="/">
                  <img src={data.image} alt="" className="rounded-t border-b" />
                </Link>
                <div className="px-4 py-6 text-gray-600">
                  <Link to="/" className="text-xl font-semibold text-black">
                    {data.title}
                  </Link>
                  <p className="mb-4 mt-1">{data.date}</p>
                  <p>{data.description}</p>
                  <Link
                    to="/"
                    className="mt-4 inline-block text-electricViolet"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))
          : blogsData.map((data, i) => (
              <div key={i} className="rounded border">
                <Link to="/">
                  <img src={data.image} alt="" className="rounded-t border-b" />
                </Link>
                <div className="px-4 py-6 text-gray-600">
                  <Link to="/" className="text-xl font-semibold text-black">
                    {data.title}
                  </Link>
                  <p className="mb-4 mt-1">{data.date}</p>
                  <p>{data.description}</p>
                  <Link
                    to="/"
                    className="mt-4 inline-block text-electricViolet"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
}
