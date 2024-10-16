import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/bobosoho.jpg'
import { Link } from "react-router-dom";

const navigation = [
  { name: 'About', href: '/about', current: false },
  { name: 'Private Emailing', href: '/private', current: false },
  { name: 'Business Emailing', href: '#', current: false },
  { name: 'Security', href: '#', current: false },
  { name: 'Privacy policy', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Login', href: 'https://www.bobosohomail.com/', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className=" font-custom lg:sticky top-0 z-50 w-full shadow-lg shadow-black-500/50  bg-white border-b-2">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to={"/"} className="flex items-center">
          <img src={logo} className="h-[40px] md:h-[60px]" alt="logo" />
        </Link>

        {/* Desktop Menu (shown on larger screens) */}
        <ul className="hidden lg:flex space-x-6 text-black">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  item.current ? 'font-bold text-black' : 'hover:text-gray-300',
                  'text-black font-bold text-lg'
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Tablet and Mobile */}
        <div className="lg:hidden">
          {!navOpen ? (
            <Bars3Icon
              onClick={handleNavToggle}
              className="h-6 w-6 text-black cursor-pointer"
            />
          ) : (
            <XMarkIcon
              onClick={handleNavToggle}
              className="h-6 w-6 text-black cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile and Tablet Menu */}
      <div
        className={`lg:hidden bg-black absolute w-full transition-all duration-700 ease-in-out ${
          navOpen ? 'top-[70px]' : '-top-full'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  item.current ? 'font-bold text-gray-200' : 'hover:text-gray-300',
                  'text-white'
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
