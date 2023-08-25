'use client'
import React from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [showCatMenu, setShowCatMenu] = React.useState(false);
  const [show, setShow] = React.useState("translte-y-0");
  const [lastScrollY, setLastScrollY] = React.useState(0);
  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center 
    justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      <Wrapper>
        <Link href={"/"}>
          <img src="/logo.svg" className='w-[40px] md:w-[60px]' />
        </Link>
      </Wrapper>
    </header>
  )
}

export default Header