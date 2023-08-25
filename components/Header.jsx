'use client'
import React from 'react'

const Header = () => {
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const [showCatMenu, setShowCatMenu] = React.useState(false);
    const [show, setShow] = React.useState("translte-y-0");
    const [lastScrollY, setLastScrollY]= React.useState(0);
  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center 
    justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
        Header
    </header>
  )
}

export default Header