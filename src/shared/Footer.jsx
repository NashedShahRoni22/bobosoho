import React from 'react'
import logo from '../assets/bobosoho.jpg'
import { Link } from 'react-router-dom';

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
  ]

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
      name: "Sosay Social Media",
      link: "https://sosay.org/",
    },
  ];

  const Pages = [
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Private Emailing",
      link: "/private",
    },
    {
      name: "Business Emailing",
      link: "/bussiness",
    },
    {
      name: "Security",
      link: "/security",
    },
  ];
  return (
    <footer className="bg-[#007C7C]  text-white p-10 md:p-20">
      <section className='grid lg:grid-cols-2'>
      {/* Left section */}
      <div>
        <Link to={"/"} >
          <img style={{mixBlendMode:"color-burn"}} className='w-[400px]' src={logo} alt="" />
        </Link>
        <h1 style={{lineHeight:"50px"}} className='text-4xl font-bold py-5'>
        Bobosoho: Connecting People Through <br /> Secure Emailing
        </h1>
        <p className='text-[20px] font-medium py-5'>Bringing people together in a <strong className=' underline'> secure environment, we respect your privacy</strong> by offering seamless private email and chat sharing for personal, family, friends, and business communication.</p>
        <h1 className='text-4xl font-bold py-5'>Bobosoho by Bfinit join Bfinit Cosmopolitan </h1>
        <input className='py-3 px-5 mr-4 rounded-xl' type="email" placeholder='Enter your email' />
        <button className='bg-blue-500 px-8 py-3 rounded-xl' >Subscribe </button>
      </div>

      {/* Links */}
      
      <div>
        <h1 className='text-center text-4xl sm:mt-10 underline'>Bobosoho by Bfinit.</h1>
      <div className='grid lg:grid-cols-3 mt-5'>     
        <div className='sm:my-8 '>
          <h1 className="font-semibold text-2xl">Hosting Products</h1>
          <div className="flex flex-col gap-2 ml-2 mt-5">
              {hostingProducts.map((product, i) => (
                <Link to={product.link} key={i} className="flex gap-2.5">
                  {product.name}
                </Link>
              ))}
            </div>
        </div>
        <div className='sm:my-8 mt-5'>
        <h1 className="font-semibold text-2xl">Products</h1>
          <div className="flex flex-col gap-2 ml-2 mt-5">
              {Products.map((product, i) => (
                <Link to={product.link} key={i} className="flex gap-2.5">
                  {product.name}
                </Link>
              ))}
            </div>
        </div>
        <div className='sm:my-8 mt-5'>
        <h1 className="font-semibold text-2xl">Pages</h1>
        <div className="flex flex-col gap-2 ml-2 mt-5">
        {Pages.map((product, i) => (
                <Link to={product.link} key={i} className="flex gap-2.5">
                  {product.name}
                </Link>
              ))}
        </div>
        </div>
      </div>
      </div>
    </section>
    </footer>
  )
}
