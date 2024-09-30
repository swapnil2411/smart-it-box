"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Banner = () => {
  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const bannerBtnRef1 =useRef(null);
  const bannerBtnRef2 =useRef(null);
  useEffect(() => {
    // Use GSAP to animate the element
    gsap.to(textRef.current, { translateY: 0, duration: 1 });
    gsap.to(textRef1.current, { translateY: 0, duration: 1, delay: 0.5 });
    gsap.to(textRef2.current, { translateY: 0, duration: 1, delay: 1 });
    gsap.to(bannerBtnRef1.current, { opacity: 1, duration: 1.5, delay: 2 });
    gsap.to(bannerBtnRef2.current, { opacity: 1, duration: 1.5, delay: 2 });
  }, []);
  return (
    <section className='hero_section'>
      <Image
        src="/images/banner_img.png"
        width={1920}
        height={1080}
        priority
        style={{width: "100vw", height: "100vh", objectFit: "cover"}}
        className='banner_img'
      />

      <div className='banner_content'>
        <p>
          <span ref={textRef}>See The Digital Future of Your Business And Make Come True</span>
        </p>
        <h2>
          <span ref={textRef1}>Discover New Ideas</span> <br />
          <span ref={textRef2}>Build Your Business</span>
        </h2>
        <div className='banner_btn_grp'>
          <Link href="#" className='btn_green' ref={bannerBtnRef1}>Read More</Link>
          <Link href="#" className='btn_yellow' ref={bannerBtnRef2}>Watch Video</Link>
        </div>
      </div>
    </section>
  )
}

export default Banner