import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight, BiChevronUp } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/bobosoho.jpg";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showChild, setShowChild] = useState("");
  // Function to handle scroll event
  const handleScroll = () => {
    setShowNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MenuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Features",
      child: [
        {
          name: "Private Emailing",
          link: "/private",
        },
        {
          name: "Business Emailing",
          link: "/business",
        },
      ],
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="sticky top-[-2px] z-50 bg-primary text-white shadow md:px-5">
      <section className="mx-5 flex items-center justify-between py-3 md:container md:mx-auto">
        {/* logo here  */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-10" alt="bobosoho logo" />
        </Link>
        {/* desktop view  */}
        <ul className="hidden lg:flex lg:items-center lg:gap-6">
          {MenuItems.map((mi, i) => (
            <li key={i}>
              {mi.child ? (
                <div className="group relative">
                  <span className="flex cursor-pointer items-center gap-1">
                    {mi.name}
                    <BiChevronDown className="text-2xl" />
                  </span>
                  <div className="absolute left-0 hidden min-w-[250px] flex-col gap-2 rounded bg-white p-5 px-5 shadow group-hover:flex">
                    {mi.child.map((mc, i) => (
                      <Link
                        to={mc.link}
                        key={i}
                        className="flex gap-1.5 text-gray-600 transition-all duration-200 ease-in-out hover:text-black"
                      >
                        {/* <BiChevronRight className="text-2xl" /> */}
                        <span className="flex-1">{mc.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={mi.link} key={i}>
                  {mi.name}
                </Link>
              )}
            </li>
          ))}
          <Link
            to="/login"
            className="rounded-full bg-electricViolet px-6 py-2 text-white shadow"
          >
            Log In
          </Link>
        </ul>
        {/* mobile view  */}
        {showNav ? (
          <button className="lg:hidden" onClick={() => setShowNav(!showNav)}>
            <CgClose className="text-2xl" />
          </button>
        ) : (
          <button className="lg:hidden" onClick={() => setShowNav(!showNav)}>
            <FaBars className="text-xl" />
          </button>
        )}
        {showNav && (
          <div className="absolute left-0 top-16 flex h-[60vh] min-w-full flex-col gap-4 bg-primary p-5 pt-10 text-white shadow-sm transition-all duration-700 ease-in-out md:px-14 lg:hidden">
            {MenuItems.map((mi, i) => (
              <div key={i}>
                {mi.child ? (
                  <div>
                    <div className="flex items-center justify-between text-[18px]">
                      {mi.name}

                      {showChild !== i ? (
                        <button
                          onClick={() => setShowChild(i)}
                          className="flex cursor-pointer items-center gap-1"
                        >
                          <BiChevronDown className="text-3xl" />
                        </button>
                      ) : (
                        <button
                          onClick={() => setShowChild("")}
                          className="flex cursor-pointer items-center gap-1"
                        >
                          <BiChevronUp className="text-3xl" />
                        </button>
                      )}
                    </div>

                    {showChild === i && (
                      <div className="ml-4 mt-4 flex flex-col gap-4">
                        {mi.child.map((mc, i) => (
                          <Link
                            to={mc.link}
                            key={i}
                            onClick={() => setShowNav(!showNav)}
                            className="flex gap-1.5 text-[18px]"
                          >
                            <BiChevronRight className="text-2xl" />
                            {mc.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={mi.link}
                    key={i}
                    onClick={() => setShowNav(!showNav)}
                    className="flex items-center justify-between text-[18px]"
                  >
                    {mi.name}
                    {/* <MdArrowOutward /> */}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </nav>
  );
}
