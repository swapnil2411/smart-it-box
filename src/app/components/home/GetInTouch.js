"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {

  const getInTouchRef = useRef(null);

  useEffect(() => {
    // Create a GSAP context for the component
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: getInTouchRef.current,
          start: '0% 50%',
          end: '100% 50%',
          pin: false,
          markers: false, // Keep this for debugging, remove later
          onEnter: () => getInTouchRef.current.classList.add("active"),
          toggleActions: "play none none none",
          ease: 'power3.out',
          duration: 1,
          stagger: {
            amount: 0.2
          }
        },
      });
    }, getInTouchRef); // Pass the container where the animations are applied

    // Clean up the animations when the component unmounts
    return () => ctx.revert();
  }, []);
  return (
    <section className='get_in_touch_area' ref={getInTouchRef}>
      <div className='get_in_touch_wrapper'>
        <h2>
          Have questions or <br />
          ready to start your project? 
        </h2>
        <p>
          We’re here to help. Whether you need expert advice, custom solutions, <br />
          or just want to learn more, our team is just a message away.
        </p>
        <Link href="/Contact" className='btn_green'>Get In Touch</Link>
      </div>
    </section>
  )
}

export default GetInTouch