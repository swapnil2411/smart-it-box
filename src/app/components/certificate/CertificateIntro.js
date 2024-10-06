"use client"
import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CertificateIntro = () => {
  
const aboutIntroRef = useRef(null);
useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutIntroRef.current,
          start: 'top top',
          end: '200% top',
          scrub: true,
          pin: true,
          markers: false, // Remove markers after debugging
        },
      });

      tl.to(".line-01", {
        height: "100vh",
        duration: 1,
        ease: 'sine.out',  // Smooth easing
      })

      tl.to(".web_dev_icons .html_img", {
        opacity: 1,
        duration: 0.5,
        ease: 'sine.out',  // Smooth easing
      })

      tl.to(".web_dev_icons .css_img", {
        opacity: 1,
        duration: 0.5,
        ease: 'sine.out',  // Smooth easing
      })

      tl.to(".line-02", {
        height: "100vh",
        duration: 1,
        ease: 'sine.out',  // Smooth easing
      })

      tl.to(".web_dev_icons .js_img", {
        opacity: 1,
        duration: 0.5,
        ease: 'sine.out',  // Smooth easing
      })

      tl.to(".web_dev_icons .jquery_img", {
        opacity: 1,
        duration: 0.5,
        ease: 'sine.out',  // Smooth easing
      })

      tl.to(".line-03", {
        height: "100vh",
        duration: 1,
        ease: 'sine.out',  // Smooth easing
      })

      tl.to(".web_dev_icons .node_img", {
        opacity: 1,
        duration: 0.5,
        ease: 'sine.out',  // Smooth easing
      })

      tl.to(".web_dev_icons .react_img", {
        opacity: 1,
        duration: 0.5,
        ease: 'sine.out',  // Smooth easing
      })

      tl.to(".line-04", {
        height: "100vh",
        duration: 1,
        ease: 'sine.out',  // Smooth easing
      })

      tl.to(".web_dev_icons .python_img", {
        opacity: 1,
        duration: 0.5,
        ease: 'sine.out',  // Smooth easing
      })

      tl.to(".web_dev_icons .figma_img", {
        opacity: 1,
        duration: 0.5,
        ease: 'sine.out',  // Smooth easing
      })

    }, aboutIntroRef);

   

    // Clean up the animations when the component unmounts
    return () => ctx.revert();
  }, []);
  return (
    <section className='about_intro_section' ref={aboutIntroRef}>
        <div className='marquee_txt'>
          <div className='first_marquee'>
            <h2><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span><span>Seamless G Suite Integration</span></h2>
          </div>
          <div className='second_marquee'>
            <h2><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span><span>Accredited Technology Services</span></h2>
          </div>
        </div>
        <div className='main_img_middle'>
          <img src='/images/certificate_main_img.png' alt='about_img' className='about_us_img' />
        </div>

        <div className='line line-01'></div>
        <div className='line line-02'></div>
        <div className='line line-03'></div>
        <div className='line line-04'></div>

        <div className='web_dev_icons'>
          <div className='html_img'>
            <img src='/images/certificate_01.png' alt='HTML' />
          </div>
          <div className='css_img'>
            <img src='/images/certificate_02.png' alt='HTML' />
          </div>
          <div className='js_img'>
            <img src='/images/certificate_03.png' alt='HTML' />
          </div>
          <div className='jquery_img'>
            <img src='/images/certificate_04.png' alt='HTML' className='html-img' />
          </div>
          <div className='node_img'>
            <img src='/images/certificate_05.png' alt='HTML' className='html-img' />
          </div>
          <div className='react_img'>
            <img src='/images/certificate_06.png' alt='HTML' className='html-img' />
          </div>
          <div className='python_img'>
            <img src='/images/certificate_07.png' alt='HTML' className='html-img' />
          </div>
          <div className='figma_img'>
            <img src='/images/certificate_08.png' alt='HTML' className='html-img' />
          </div>
        </div>
      </section>
  )
}

export default CertificateIntro