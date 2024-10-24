import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight, BiChevronUp } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/bobosoho.jpg";

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
    <nav className="sticky top-[-2px] border-b border-blue-50 bg-white z-50 shadow">
      <section className="py-3 mx-5 md:container md:mx-auto flex justify-between items-center">
        {/* logo here  */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-10" alt="bobosoho logo" />
        </Link>
        {/* desktop view  */}
        <ul className="hidden lg:flex lg:gap-6 lg:items-center">
          {MenuItems.map((mi, i) => (
            <li key={i}>
              {mi.child ? (
                <div className="relative group">
                  <span className="flex items-center gap-1 cursor-pointer">
                    {mi.name}
                    <BiChevronDown className="text-2xl" />
                  </span>
                  <div className="absolute bg-white left-0 p-5 shadow rounded min-w-[250px] px-5 hidden group-hover:flex flex-col gap-2">
                    {mi.child.map((mc, i) => (
                      <Link
                        to={mc.link}
                        key={i}
                        className="flex gap-1.5 text-gray-600 transition-all ease-in-out duration-200 hover:text-black"
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
            className="rounded bg-primary px-4 py-2 text-white shadow"
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
          <div className="lg:hidden p-5 md:px-14 flex flex-col gap-4 absolute top-16 left-0 shadow-sm bg-white min-w-full transition-all ease-in-out duration-700 pt-10 h-[60vh]">
            {MenuItems.map((mi, i) => (
              <div key={i}>
                {mi.child ? (
                  <div>
                    <div className="text-[18px] flex justify-between items-center">
                      {mi.name}

                      {showChild !== i ? (
                        <button
                          onClick={() => setShowChild(i)}
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          <BiChevronDown className="text-3xl" />
                        </button>
                      ) : (
                        <button
                          onClick={() => setShowChild("")}
                          className="flex items-center gap-1 cursor-pointer"
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
                            className="text-[18px] flex gap-1.5"
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
                    className="text-[18px] flex justify-between items-center"
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
