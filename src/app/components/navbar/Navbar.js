"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const hambugerClick = () => {
    setIsMenuOpen(true)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <header>
      <div className='header_wrapper'>
        <nav>
          <div className='logo_wrapper'>
            <Link href="/">
              <Image src="/images/logo.png"
                alt="Smart IT Box"
                width={300}
                height={70}
                priority
                style={{ width: '15.625vw', height: '3.646vw' }}
              />
            </Link>
          </div>
          <div className={isMenuOpen ? 'right_area_nav mobile_nav_active' : 'right_area_nav'}>
            <div className='close_nav' onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
            </div>
            <div className='menu_wrapper'>
              <ul>
                <li>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/About" prefetch={true}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/Certificate" prefetch={true}>
                    Certificate
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    What&apos;sApp Api
                  </Link>
                </li>
              </ul>
            </div>
            <div className='search_area'>
              <input type='text' name='' id='' placeholder='Search Here...' />
              <div className='search_btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" /></svg>
              </div>
            </div>
            <div className='nav_footer'>
            <p>2024 © Design & Develop by SMARTITBOX</p>
            </div>
          </div>

          <div className='hamburger' onClick={hambugerClick}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3.16669" y="3.1665" width="25.6667" height="25.6667" rx="0.5" stroke="#12212E" />
              <rect x="5.83331" y="5.8335" width="20.3333" height="20.3333" rx="0.5" stroke="#12212E" />
              <rect x="8.5" y="8.5" width="15" height="15" rx="0.5" stroke="#12212E" />
              <rect x="11.1667" y="11.1665" width="9.66667" height="9.66667" rx="0.5" stroke="#12212E" />
              <rect x="13.8333" y="13.8335" width="4.33333" height="4.33333" rx="0.5" stroke="#12212E" />
              <rect x="0.5" y="0.5" width="31" height="31" rx="0.5" stroke="#12212E" />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar