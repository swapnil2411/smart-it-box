"use client"
import React from 'react'
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CertificateList = () => {
    const certificateAreaRef = useRef(null);
  const certificateChipRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: certificateAreaRef.current,
          start: '0% 90%',  // Animation starts when the section hits 50% of the viewport
          end: '100% 50%',  // Animation ends at the same point
          scrub: true,
          markers: false, // Remove markers after debugging
        },
      });

      tl.to(certificateChipRef.current, {
        translateY: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'sine.out',  // Smooth easing
      }, "text_anim")

      tl.to(".certificate_title", {
        translateY: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'sine.out',  // Smooth easing
      }, "text_anim")

      tl.from('.certificate_column_0', {
        delay: 0.1,
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: "sine.out",  // Use string notation for ease
        stagger: {
          amount: 0.2,
        },
      }, "text_anim")

      tl.from('.certificate_column_1', {
        delay: 0.2,
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: "sine.out",  // Use string notation for ease
        stagger: {
          amount: 0.2,
        },
      }, "text_anim")

      tl.from('.certificate_column_2', {
        delay: 0.3,
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: "sine.out",  // Use string notation for ease
        stagger: {
          amount: 0.2,
        },
      }, "text_anim")

      tl.from('.certificate_column_3', {
        delay: 0.4,
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: "sine.out",  // Use string notation for ease
        stagger: {
          amount: 0.2,
        },
      }, "text_anim")

      tl.from('.certificate_column_4', {
        delay: 0.5,
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: "sine.out",  // Use string notation for ease
        stagger: {
          amount: 0.2,
        },
      }, "text_anim")

      tl.from('.certificate_column_5', {
        delay: 0.6,
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: "sine.out",  // Use string notation for ease
        stagger: {
          amount: 0.2,
        },
      }, "text_anim")

      tl.from('.certificate_column_6', {
        delay: 0.7,
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: "sine.out",  // Use string notation for ease
        stagger: {
          amount: 0.2,
        },
      }, "text_anim")
     

    }, certificateAreaRef);

    // Clean up the animations when the component unmounts
    return () => ctx.revert();
  }, []);
  const certificateData = [
    {
      id: 1,
      imgUrl: "certificate-01",
      formate: ".JPG"
    },
    {
      id: 2,
      imgUrl: "certificate-02",
      formate: ".JPEG"
    },
    {
      id: 3,
      imgUrl: "certificate-03",
      formate: ".JPG"
    },
    {
      id: 4,
      imgUrl: "certificate-04",
      formate: ".JPG"
    },
    {
      id: 5,
      imgUrl: "certificate-05",
      formate: ".JPG"
    },
    {
      id: 6,
      imgUrl: "certificate-06",
      formate: ".JPG"
    },
    {
      id: 7,
      imgUrl: "certificate-07",
      formate: ".JPEG"
    }
  ]
  return (
    <section className='certificate_area' ref={certificateAreaRef}>
      {/* <div className='page_banner'>
        <h2>Certificate</h2>
      </div> */}
      <div className='sec certificate_wrapper'>
        <div className='sec_header'>
          <span className='chip' ref={certificateChipRef}>Certificate</span>
          <h2>
            <span className='certificate_title'><span className='text_yellow'>Our</span> Certificates</span>
          </h2>
        </div>

        <div className='certifiacate_list'>
          {
            certificateData?.map((certificate, idx) => {
              return (
                <div className={`certificate_column certificate_column_${idx}`} key={certificate?.id}>
                  <div className='certificate_box'>
                    <Image
                      src={`/images/${certificate?.imgUrl}${certificate?.formate}`}
                      alt={`/images/${certificate?.imgUrl}`}
                      width={535}
                      height={660}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* <div className='cerificate_start_area'>

      </div> */}
    </section>
  )
}

export default CertificateList