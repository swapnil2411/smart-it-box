"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const GoogleWorkplaceAutomation = () => {

  const workplaceAutomationRef = useRef(null);
  const floatingTextRef = useRef(null);
  const imageRevealRef = useRef(null);
  const workAutomationChipRef = useRef(null);
  const automationTitleOne = useRef(null);
  const automationTitleTwo = useRef(null);
  const automationParaRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create a GSAP context for scoped animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: workplaceAutomationRef.current,
          start: '0% 90%',  // Animation starts when the section hits 50% of the viewport
          end: '100% 50%',  // Animation ends at the same point
          scrub: 2,  // Smooth scrubbing effect based on scroll speed
          markers: false,  // No markers for production
          toggleActions: 'play none none none', // Only play the animation once
        },
      }, "text_anim");

      // Floating text animation
      tl.from(floatingTextRef.current, {
        y: 300, // Start 100px down
        duration: 1, // Animation lasts 0.8 seconds
        ease: 'sine.out',  // Smooth easing
        stagger: 0.2,  // Staggered animation for each element inside the ref
      }, "text_anim");

      tl.to(workAutomationChipRef.current, {
        translateY: 0,
        opacity: 1,
        ease: 'sine.out',  // Smooth easing
      }, "text_anim")

      tl.to(automationTitleOne.current, {
        translateY: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        ease: 'sine.out',  // Smooth easing
      }, "text_anim")

      tl.to(automationTitleTwo.current, {
        translateY: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        ease: 'sine.out',  // Smooth easing
      }, "text_anim")

      tl.to(automationParaRef.current, {
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
          trigger: workplaceAutomationRef.current,
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
      t2.from(".automation_img", {
        scale: 1.3, // Start the image from scaleX 0
        // xPercent: -200,
        width: 0,
        transformOrigin: "right", // Scale from the right edge
        duration: 1.5,  // Animation duration
        ease: 'power2.out',  // Smooth easing
      }, '<'); // The '<' ensures it starts together with the container reveal

    }, workplaceAutomationRef); // Scope the animations to this section

    // Clean up on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <section className='workplace_automation' ref={workplaceAutomationRef}>
      <h2 className='floating_txt' ref={floatingTextRef}>Strength</h2>
      <div className='sec automation_wrapper'>
        <div className='automation_content'>
          <div className='sec_header'>
            <span className='chip' ref={workAutomationChipRef}>Automation</span>
            <h2 className='mb-0'>
              <span ref={automationTitleOne} className='automation_title'>Seamless <span className='text_yellow'>Google</span></span>
            </h2>
            <h2 className='mt-0'>
              <span ref={automationTitleTwo} className='automation_title'><span className='text_yellow'>Workspace</span> Integrations</span>
            </h2>
          </div>
          <div className='automation_para'>
            <p ref={automationParaRef}>
              Ensure that your tools work together effortlessly to create a unified, efficient system. By integrating Google Workspace applications like Gmail, Drive, Sheets, and Calendar, you can automate repetitive tasks, streamline communication, and enhance collaboration across teams. Whether it&apos;s syncing data between Sheets and Forms, automatically organizing files in Drive, or setting up workflows between Gmail and Calendar, these integrations help you maintain a smooth flow of information. With the power of Google Apps Script and third-party APIs, we customize solutions that fit your specific business needs, ensuring that all your critical apps work together seamlessly. This leads to improved efficiency, reduced manual effort, and a more productive work environment.
            </p>

            <Link href="/Contact" className='btn_green'>Get Started</Link>
          </div>
        </div>
        <div className='automation_img' ref={imageRevealRef}>
          <Image
            src="/images/automation_img.png"
            alt="Automation"
            width={602}
            height={737}
            style={{ width: "100%", maxWidth: "100%", height: "unset" }}
            priority
            className='automation_img'
          />
        </div>
      </div>
    </section>
  )
}

export default GoogleWorkplaceAutomation