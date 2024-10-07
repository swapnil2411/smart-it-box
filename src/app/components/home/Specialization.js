"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Specialization = () => {
  const specializationRef = useRef(null);
  const google_sheet_iconRef = useRef(null);
  const google_sheet_textRef = useRef(null);
  const google_iconRef = useRef(null)

  useEffect(() => {
    // Create a GSAP context for the component
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: specializationRef.current,
          start: 'top top',
          end: '+=3000',
          pin: true,
          scrub: true,
          markers: false, // Keep this for debugging, remove later
        },
      });

      // First animation: google_iconRef
      tl.to(google_iconRef.current, {
        width: "20.833vw",
        height: "20.833vw",
        duration: 3,
        opacity: 1,
        ease: 'power3.out',
      })
      .to(google_sheet_iconRef.current, {
        top: '10vh',
        left: '6vw',
        duration: 10,
        opacity: 1,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".google_slide_icon", {
        top: "40vh",
        left: "18.552vw",
        duration: 10,
        opacity: 1,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".google_drive_icon", {
        bottom: "15vh",
        left: "0vw",
        top: "unset",
        duration: 10,
        opacity: 1,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".google_script_icon", {
        top: "6vh",
        left: "50vw",
        duration: 10,
        opacity: 1,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".gmail_icon", {
        top: "unset",
        bottom: "0vh",
        left: "40vw",
        duration: 10,
        opacity: 1,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".keeps_icon", {
        top: "unset",
        bottom: "22vh",
        left: "unset",
        right: "20vw",
        duration: 10,
        opacity: 1,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".google_chat_icon", {
        top: "unset",
        bottom: "0",
        left: "unset",
        right: "0",
        duration: 10,
        opacity: 1,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".Google_Chat_2_icon", {
        top: "10vh",
        right: "-5vw",
        left: "unset",
        duration: 10,
        opacity: 1,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".docs_icon", {
        top: "25vh",
        right: "18vw",
        left: "unset",
        duration: 10,
        opacity: 1,
        ease: 'power3.out',
      }, "icon_anim")
      .to(google_sheet_textRef.current, {
        top: "18vh",
        left: "6.51vw",
        duration: 2,
        opacity: 0.3,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".google_two", {
        top: "45vh",
        left: "10vw",
        duration: 2,
        opacity: 0.3,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".google_three", {
        top: "unset",
        bottom: "10vh",
        left: "5vw",
        duration: 2,
        opacity: 0.3,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".google_four", {
        top: "unset",
        bottom: "15vh",
        left: "40vw",
        duration: 2,
        opacity: 0.3,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".google_five", {
        top: "15vh",
        left: "50vw",
        duration: 2,
        opacity: 0.3,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".google_six", {
        top: "25vh",
        right: "10vw",
        left: "unset",
        duration: 2,
        opacity: 0.3,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".google_seven", {
        top: "unset",
        bottom: "20vh",
        right: "16vw",
        left: "unset",
        duration: 2,
        opacity: 0.3,
        ease: 'power3.out',
      }, "icon_anim")
      .to(".google_eight", {
        top: "unset",
        bottom: "15vh",
        right: "0vw",
        left: "unset",
        duration: 2,
        opacity: 0.3,
        ease: 'power3.out',
      }, "icon_anim")
      
      // Final animation after all others
      .to(google_iconRef.current, {
        duration: 3,
        opacity: 0.18,
        ease: 'power3.out',
      })

      .to(".special_text", {
        opacity: 1,
        duration: 2,
        translateY: "0",
        ease: 'power3.out',
      })

      
    }, specializationRef); // Pass the container where the animations are applied

    // Clean up the animations when the component unmounts
    return () => ctx.revert();
  }, []);

  
  return (
    <section className='specialization_area' ref={specializationRef}>
      <div className='specialization_content'>
        <h2>
          <span className='special_text'>Unlock the Full Power of</span>
        </h2>
        <h2>
          <span className='special_text'><span className='text_yellow'>Google Workspace</span> with</span>
        </h2>
        <h2>
          <span className='special_text'><span className='text_yellow'>Smart IT Box</span> – Your Trusted</span>
        </h2>
          <h2>
            <span className='special_text'>Premier Partner for</span>
          </h2>
        <h2>
          <span className='special_text'>Next-Level Automation!</span>
        </h2>
      </div>
      <div className='specialization_icons'>
        <Image
          src="/images/search.png"
          alt="Google"
          width={512}
          height={512}
          style={{ width: "3vw", height: "3vw" }}
          className='google_icon'
          priority
          ref={google_iconRef}
        />

        <Image
          src="/images/sheets.png"
          alt="Google Sheet"
          width={512}
          height={512}
          style={{ width: "5.208vw", height: "unset" }}
          className='google_sheet_icon'
          priority
          ref={google_sheet_iconRef}
        />

        <Image
          src="/images/google-slide.png"
          alt="Google Slide"
          width={512}
          height={512}
          style={{ width: "7.813vw", height: "unset" }}
          className='google_slide_icon'
          priority
        />

        <Image
          src="/images/google-drive.png"
          alt="Google Drive"
          width={512}
          height={512}
          style={{ width: "5.208vw", height: "unset" }}
          className='google_drive_icon'
          priority
        />

        <Image
          src="/images/google-apps-script.png"
          alt="Google Apps Script"
          width={512}
          height={512}
          style={{ width: "5.208vw", height: "unset" }}
          className='google_script_icon'
          priority
        />

        <Image
          src="/images/gmail.png"
          alt="Gmail"
          width={512}
          height={512}
          style={{ width: "5.208vw", height: "unset" }}
          className='gmail_icon'
          priority
        />

        <Image
          src="/images/keeps.png"
          alt="Google Keeps"
          width={512}
          height={512}
          style={{ width: "5.208vw", height: "unset" }}
          className='keeps_icon'
          priority
        />

        <Image
          src="/images/google_chat.png"
          alt="Google Chat"
          width={512}
          height={512}
          style={{ width: "5.208vw", height: "unset" }}
          className='google_chat_icon'
          priority
        />

        <Image
          src="/images/Google_Chat_2.png"
          alt="Google Chat"
          width={512}
          height={512}
          style={{ width: "7.813vw", height: "unset" }}
          className='Google_Chat_2_icon'
          priority
        />

        <Image
          src="/images/docs.png"
          alt="Google Docs"
          width={512}
          height={512}
          style={{ width: "7.813vw", height: "unset" }}
          className='docs_icon'
          priority
        />

      </div>

      <div className='specialization_names'>
        <span className='google_one' ref={google_sheet_textRef}>Google Sheet</span>
        <span className='google_two'>Google Slide</span>
        <span className='google_three'>Google Drive</span>
        <span className='google_four'>Google Email</span>
        <span className='google_five'>Google App Script</span>
        <span className='google_six'>Google Docs</span>
        <span className='google_seven'>Google Keeps</span>
        <span className='google_eight'>Google Chat</span>
      </div>
    </section>
  )
}

export default Specialization