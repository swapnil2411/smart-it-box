"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const WhyChooseUs = () => {
  const whyChooseUsRef = useRef(null);
  const floatingTextRef = useRef(null);
  const whyChooseUsChipRef = useRef(null);
  const whyChooseUsParaRef = useRef(null);

  useEffect(() => {
    // Create a GSAP context for the component
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: whyChooseUsRef.current,
          start: '0% 100%',  // Animation starts when the section hits 50% of the viewport
          end: '150% 50%',  // Animation ends at the same point
          scrub: 2,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      // Floating text animation
      tl.addLabel("start")
        .from(floatingTextRef.current, {
          delay: -0.6,
          duration: 5,
          y: 100,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim");

        tl.to(whyChooseUsChipRef.current, {
          translateY: 0,
          duration: 3,
          opacity: 1,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")
  
        tl.to(".whyChooseUsTitle", {
          translateY: 0,
          opacity: 1,
          duration: 5,
          delay: 0.2,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")

        tl.to(whyChooseUsParaRef.current, {
          opacity: 1,
          duration: 5,
          delay: 1,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")

        tl.from('.main_img', {
          opacity: 0,
          scale: 0.5,
          duration: 0.5,
          delay: 1,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")
        

        tl.from('.upper_asterick', {
          opacity: 0,
          rotate: "360deg",
          duration: 5,
          delay: 1,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")

        tl.from('.lower_asterick', {
          opacity: 0,
          rotate: "360deg",
          duration: 5,
          delay: 1,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")
  
        tl.from(".thought_sym", {
          translateY: "2vw",
          translateX: "-2vw",
          opacity: 0,
          delay: 1.2,
          duration: 1,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")

        tl.to(".btn_green", {
          translateY: 0,
          opacity: 1,
          duration: 4,
          delay: 1.5,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")

        
        

        
      
    }, whyChooseUsRef); // Pass the container where the animations are applied

    // Clean up the animations when the component unmounts
    return () => ctx.revert();
  }, []);
  return (
    <section className='why_choose_us_area' ref={whyChooseUsRef}>
      <h2 className='floating_txt' ref={floatingTextRef}>Expertise</h2>
      <div className='sec why_choose_us_wrapper'>
        <div className='why_choose_left_area'>
          <div className='sec_header'>
            <span className='chip' ref={whyChooseUsChipRef}>Why Choose Us</span>
            <h2 className='mb-0'>
              <span className='whyChooseUsTitle'>Don’t settle for <span className='text_yellow'>good</span></span>
            </h2>
            <h2 className='mb-0 mt-0'>
              <span className='whyChooseUsTitle'>when <span className='text_yellow'>greatness</span> is</span>
            </h2>
            <h2 className='mt-0'>
              <span className='whyChooseUsTitle'>within reach.</span>
            </h2>
          </div>
          <div className='why_choose_para'>
            <p ref={whyChooseUsParaRef}>
              For over 7 years, we have been a trusted digital solutions provider, delivering high-quality services that have earned us several prestigious recognitions within the IT-Software industry. We specialize in a wide range of offerings, including Google Sheets integration, as well as cutting-edge mobile and web app development.
              <br />
              <br />
              In the fast-paced world of digital innovation, settling for &quot;good&quot; can limit the potential for real, transformative growth. As a digital agency, we believe that true success comes from pushing boundaries, challenging the status quo, and striving for greatness in every 
            </p>

            <Link href="/About" className='btn_green'>READ MORE</Link>
          </div>
        </div>
        <div className='why_choose_image_area'>
          <div className='upper_asterick'>
            <Image
              src="/images/green_asterick.png"
              alt="asterick"
              width={80}
              height={80}
              style={{width: "4.167vw", height: "4.167vw"}}
            />
          </div>
          <div className='lower_asterick'>
          <Image
              src="/images/yellow_asterick.png"
              alt="asterick"
              width={80}
              height={80}
              style={{width: "4.167vw", height: "4.167vw"}}
            />
          </div>
          <div className='main_img'>
            <Image
              src="/images/why_choose_img.png"
              width={552}
              height={823}
              priority
              style={{width: "100%", height: "auto"}}
            />
          </div>
          <div className='thought_sym'>
            <Image
              src="/images/why_choose_service_thought.png"
              width={512}
              height={512}
              style={{width: "7.292vw", height: "7.292vw"}}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs