import React from 'react'
import { FaHome   } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import contact from '../assets/contact.png'
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className='mx-20 md:container md:mx-auto  '>
       <div className='flex flex-col lg:flex-row'>
       <div className=' lg:w-1/2'>
            <h1 className=' text-blue-500 text-5xl py-5 font-semibold'>Contact</h1>
            <p className='text-2xl font-medium'>To make requests for further information, contact us via our social channels.</p>

            <div className='flex items-center gap-5 my-5'>
                <div className='p-5 bg-gray-100 rounded-xl'>
                    <FaHome className='text-4xl md:text-2xl'/>
                </div>
                <div className='flex flex-col gap-2'>
                <h5 className="font-semibold text-2xl">Address</h5>
                <p>8 rue de Dublin, 34200, Sète, France</p>
                </div>
            </div>

            <div className='flex items-center gap-5 my-7'>
                <div className='p-5 bg-gray-100 rounded-xl'>
                    <FaPhone className='text-4xl md:text-2xl'/>
                </div>
                <div className='flex flex-col gap-2'>
                <h5 className="font-semibold text-2xl">Phone</h5>
                <p>+0033666100010</p>
                </div>
            </div>

            <div className='flex items-center gap-5 my-5'>
                <div className='p-5 bg-gray-100 rounded-xl'>
                    <MdMarkEmailRead className='text-4xl md:text-2xl'/>
                </div>
                <div className='flex flex-col gap-2'>
                <h5 className="font-semibold text-2xl">Email</h5>
                <p>support@bobosohomail.com</p>
                <p>bfin@bobosohomail.com</p>
                </div>
            </div>
        </div>
        <div className=' lg:w-1/2'>
            <img src={contact} alt="" />
        </div>
       </div>
        <ContactForm/>
    </section>
  )
}

export default Contact
