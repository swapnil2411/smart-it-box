"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutBrief = () => {
  const aboutBriefRef = useRef(null);
  const floatingTextRef = useRef(null);
  const aboutChipRef = useRef(null);
  const aboutTitleOneRef = useRef(null);
  const aboutTitleTwoRef = useRef(null);
  const aboutParaRef = useRef(null);
  const imageRevealRef = useRef(null);

  useEffect(() => {
    // Create a GSAP context for the component
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutBriefRef.current,
          start: '0% 100%',  // Animation starts when the section hits 50% of the viewport
          end: '100% 50%',  // Animation ends at the same point
          scrub: 2,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      // Floating text animation
      tl.addLabel("start")
        .from(floatingTextRef.current, {
          delay: -0.6,
          duration: 0.8,
          y: 100,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim");

        tl.to(aboutChipRef.current, {
          translateY: 0,
          opacity: 1,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")
  
        tl.to(aboutTitleOneRef.current, {
          translateY: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")
  
        tl.to(aboutTitleTwoRef.current, {
          translateY: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.5,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")
  
        tl.to(aboutParaRef.current, {
          opacity: 1,
          duration: 0.5,
          delay: 1,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")

        tl.to(".btn_green", {
          translateY: 0,
          opacity: 1,
          duration: 1,
          delay: 1.5,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")

        // Image reveal animation timeline
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: aboutBriefRef.current,
          start: '0% 50%',  // Animation starts when the section hits 50% of the viewport
          end: '100% 50%',  // Animation ends at the same point
          scrub: 1,  // Smooth scrubbing effect
          markers: false,  // Disable markers for production
        },
      });

      // Set initial visibility of the image container
      t2.set(imageRevealRef.current, {
        autoAlpha: 1, // Initially invisible
      });

      // Image container reveal animation
      t2.from(imageRevealRef.current, {
        //autoAlpha: 1, // Fade in
        xPercent: 200,  // Move the container from the right
        duration: 2.5,  // Animation duration
        ease: 'power2.out',  // Smooth easing
      }, '<');

      // Image scaling animation
      t2.from(".about_img", {
        scale: 1.3, // Start the image from scaleX 0
        // xPercent: -200,
        width: 0,
        transformOrigin: "right", // Scale from the right edge
        duration: 1.5,  // Animation duration
        ease: 'power2.out',  // Smooth easing
      }, '<'); // The '<' ensures it starts together with the container reveal
      
    }, aboutBriefRef); // Pass the container where the animations are applied

    // Clean up the animations when the component unmounts
    return () => ctx.revert();
  }, []);
  
  return (
    <section className='about_us_breif' ref={aboutBriefRef}>
      <h2 className='floating_txt' ref={floatingTextRef}>About</h2>
      <div className='sec about_wrapper'>
        <div className='about_breif_left_content'>
          <div className='sec_header'>
            <span className='chip' ref={aboutChipRef}>About</span>
            <h2 className='mb-0'>
              <span className='text_yellow about_brief_title' ref={aboutTitleOneRef}>Better Agency Means</span>
            </h2>
            <h2 className='mt-0'>
              <span className='about_brief_title' ref={aboutTitleTwoRef}>Better User Consultations</span>
            </h2>
          </div>
          <div className='automation_para'>
            <p ref={aboutParaRef}>
              Experience the power of better agency solutions for superior user consultations. Elevate your business with our expert services, providing seamless interactions and customized strategies. Unleash the potential of user engagement, satisfaction, and growth through our innovative agency approach. With a commitment to excellence, we ensure that better agency means a better experience for you and your users. Consult with us for unparalleled insights and strategies that transform your business into a user-centric powerhouse.
            </p>

            <Link href="/About" className='btn_green'>Read More</Link>
          </div>
        </div>
        <div className='about_breif_img' ref={imageRevealRef}>
          <Image
            src="/images/about_img.png"
            alt="Overview About Us"
            width={602}
            height={737}
            style={{ width: "100%", maxWidth: "100%", height: "unset" }}
            priority
            className='about_img'
          />
        </div>
      </div>
    </section>
  )
}

export default AboutBrief;
