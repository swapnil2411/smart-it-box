"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ClientsSlide = () => {

  const clientAreaRef = useRef(null);
  const floatingTextRef = useRef(null);
  const clientsChipRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: clientAreaRef.current,
          start: 'top top',
          end: '+=5000',
          pin: true,
          scrub: true,
          markers: false, // Remove markers after debugging
        },
      });

      // Floating text animation
      tl.addLabel("start")
        .from(floatingTextRef.current, {
          delay: -1,
          duration: 0.8,
          y: 200,
          ease: "sine.out",
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")
        .to([clientsChipRef.current, ".clients_title", ".sub_title span", ".btn_green"], {
          translateY: 0,
          opacity: 1,
          duration: 3,
          ease: 'sine.out',
          stagger: 0.2,  // Staggering animations for smoother flow
        }, "text_anim");

      // Client slides animation
      // tl.from([".client_slide_one", ".client_slide_two"], {
      //   marginTop: (i) => i === 0 ? "-500%" : "100%", // Different margins for the slides
      //   duration: 5,
      //   ease: 'sine.out',
      //   stagger: 0.2,  // Stagger the slides animation
      // }, "client_slide");

      const isMobile = window.matchMedia("(max-width: 991px)").matches;

      tl.from([".client_slide_one", ".client_slide_two"], {
        [isMobile ? 'translateX' : 'marginTop']: (i) => 
          i === 0 ? (isMobile ? "-3700px" : "-500%") : (isMobile ? "150px" : "100%"),
        duration: 20,
        ease: 'sine.out',
        stagger: 0.2,
      }, "client_slide");

    }, clientAreaRef);

    // Clean up the animations when the component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <section className='client_area' ref={clientAreaRef}>
      <h2 className='floating_txt' ref={floatingTextRef}>Clientele</h2>
      <div className='sec clients_slide_wrapper'>
        <div className='client_left_area'>
          <div className='clients_content'>
            <div className='sec_header'>
              <span className='chip' ref={clientsChipRef}>Clients</span>
              <h2>
                <span className='clients_title'><span className='text_yellow'>Our</span> Valued Clients</span>
              </h2>
              <h4 className='sub_title'>
                <span>Driving technology for leading brands</span>
              </h4>
              <Link href="" className='btn_green'>Explore</Link>
            </div>
          </div>
        </div>
        <div className='client_right_area'>
          <div className='client_slide_one'>
            <div className='client_img_box'>
              <Image src="/images/Clients/1.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/2.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/3.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/4.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/5.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/6.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/7.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/8.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/1.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/2.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/3.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/4.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/5.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/6.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/7.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/8.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/1.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/2.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/3.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/4.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/5.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/6.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/7.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/8.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
          </div>
          <div className='client_slide_two'>
            <div className='client_img_box'>
              <Image src="/images/Clients/9.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/10.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/11.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/12.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/13.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/14.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/15.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/16.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/9.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/10.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/11.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/12.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/13.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/14.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/15.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/16.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/9.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/10.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/11.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/12.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/13.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/14.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/15.jpg" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
            <div className='client_img_box'>
              <Image src="/images/Clients/16.png" width={286} height={143} style={{ width: "7.813vw", height: "6vw" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSlide