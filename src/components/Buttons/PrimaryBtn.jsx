import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default function PrimaryBtn({ link, bgFill, children }) {
  return (
    <Link
      to={link}
      className={`group inline-flex items-center rounded-full border px-4 py-2 font-semibold md:px-5 lg:text-xl ${bgFill && "border-transparent bg-gradient-to-r from-electricViolet to-[#9055ff] text-white"} ${!bgFill && "border-electricViolet from-electricViolet to-[#9055ff] hover:border-transparent hover:bg-gradient-to-r hover:text-white"}`}
    >
      <span className="flex items-center px-3">
        <span className="transition-transform duration-300 group-hover:-translate-x-2">
          {children}
        </span>
      </span>
      <FaArrowRight className="-ml-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  );
}
