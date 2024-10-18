import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import ContactInfo from '../shared/ContactInfo'

export default function Main() {
  return (
    <main>
        <ContactInfo/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </main>
  )
}
