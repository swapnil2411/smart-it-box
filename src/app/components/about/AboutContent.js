"use client"
import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {
    const aboutUsContentRef = useRef(null);
    const aboutChipRef = useRef(null);
    const aboutTitleOneRef = useRef(null);
    const aboutTitleTwoRef = useRef(null);
    const aboutParaRef = useRef(null);
    const imageRevealRef = useRef(null);

  useEffect(() => {
    

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutUsContentRef.current,
          start: '0% 80%',  // Animation starts when the section hits 50% of the viewport
          end: '100% 50%',  // Animation ends at the same point
          scrub: true,
          markers: false, // Remove markers after debugging
        },
      });

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

      // Set initial visibility of the image container
      tl.set(imageRevealRef.current, {
        autoAlpha: 1, // Initially invisible
      });

      // Image container reveal animation
      tl.from(imageRevealRef.current, {
        //autoAlpha: 1, // Fade in
        xPercent: 200,  // Move the container from the right
        duration: 2.5,  // Animation duration
        ease: 'power2.out',  // Smooth easing
      }, 'text_anim');

      // Image scaling animation
      tl.from(".about_img", {
        scale: 1.3, // Start the image from scaleX 0
        // xPercent: -200,
        width: 0,
        transformOrigin: "right", // Scale from the right edge
        duration: 1.5,  // Animation duration
        ease: 'power2.out',  // Smooth easing
      }, 'text_anim'); // The '<' ensures it starts together with the container reveal

    }, aboutUsContentRef);

    // Clean up the animations when the component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <section className='about_us_content' ref={aboutUsContentRef}>
        <div className='sec about_content_wrapper'>
          <div className='about_content_left_area'>
            <div className='sec_header'>
              <span className='chip' ref={aboutChipRef}>About Us</span>
              <h2 className='mb-0'>
              <span className='text_yellow about_brief_title' ref={aboutTitleOneRef}>Transforming Ideas</span>
            </h2>
            <h2 className='mt-0'>
              <span className='about_brief_title' ref={aboutTitleTwoRef}>into Impactful Solutions</span>
            </h2>
              
            </div>
            <div className='about_content_para'>
              <p ref={aboutParaRef}>
                At Smart ITBOX, we believe in pushing the boundaries of technology to craft intelligent, future-ready solutions that elevate businesses to the next level. Founded on the principles of innovation and excellence, we combine over 7 years of expertise in Google Workspace automation, digital marketing, and app development to meet the ever-evolving needs of today’s digital landscape. We are more than just a service provider – we’re a partner in your journey to success, committed to delivering strategies that make an impact and inspire growth.

                Our holistic approach ensures that we cater to the unique challenges of each client, offering personalized solutions that simplify processes, enhance productivity, and drive long-term results. Whether you’re a startup aiming to scale or an enterprise looking to optimize, Smart ITBOX is your go-to partner for unlocking digital potential and achieving sustainable growth.
              </p>
            </div>
          </div>
          <div className='about_content_right_area' ref={imageRevealRef}>
            <img src="/images/about_us_main_img.jpg" alt="about_us_main" />
          </div>
        </div>
      </section>
  )
}

export default AboutContent