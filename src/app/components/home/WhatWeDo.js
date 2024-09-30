"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {

  const whatWeDoRef = useRef(null);
  const floatingTextRef = useRef(null);
  const serviceChipRef = useRef(null);
  const whatWeDoTitleOneRef = useRef(null);
  const whatWeDoSubTitle = useRef(null);

  let serviceData = [
    {
      id: 1,
      thumbnail: "sheets",
      formate: ".png",
      title: "Google Sheet Automate",
      description: "SMART ITBOX offers Google Sheet Automation, a powerful solution to streamline your data management processes. Automate repetitive tasks, synchronize data seamlessly, and enhance productivity with customized scripts and tools tailored to your specific needs. Simplify your workflow and save time with our efficient Google Sheet Automation services.",
      externalLink: "#"
    },
    {
      id: 2,
      thumbnail: "whatsapp",
      formate: ".png",
      title: "What’s App API",
      description: "SMART ITBOX provides WhatsApp API integration, enabling seamless communication with your customers directly through WhatsApp. Automate messages, manage customer interactions, and enhance your service delivery with our robust API solutions. Connect effortlessly and ensure efficient, real-time communication with SMART ITBOX's WhatsApp API services.",
      externalLink: "#"
    },
    {
      id: 3,
      thumbnail: "google-apps-script",
      formate: ".png",
      title: "Email Integration",
      description: "SMART ITBOX offers comprehensive Email Integration services to streamline your communication workflows. Integrate your email systems with other applications, automate routine email tasks, and improve collaboration. Enhance your business efficiency and ensure seamless, organized email management with SMART ITBOX's Email Integration solutions.",
      externalLink: "#"
    },
    {
      id: 4,
      thumbnail: "campaign",
      formate: ".png",
      title: "Digital Marketing",
      description: "SMART ITBOX delivers expert Digital Marketing services designed to boost your online presence. From SEO and content marketing to social media management and PPC campaigns, our tailored strategies help you reach your target audience, increase engagement, and drive conversions. Elevate your brand with SMART ITBOX's comprehensive Digital Marketing solutions.",
      externalLink: "#"
    },
    {
      id: 5,
      thumbnail: "web-design",
      formate: ".png",
      title: "UI/UX Design",
      description: "SMART ITBOX offers exceptional UI/UX Design services to create intuitive and engaging digital experiences. Our expert designers focus on user-centered design principles to ensure your applications and websites are visually appealing, easy to navigate, and optimized for user satisfaction. Enhance user interaction and drive engagement with SMART ITBOX's professional UI/UX Design solutions.",
      externalLink: "#"
    },
    {
      id: 6,
      thumbnail: "app-development",
      formate: ".png",
      title: "Web Development",
      description: "SMART ITBOX provides top-tier Web Development services to bring your online vision to life. Our skilled developers create custom, responsive, and high-performance websites tailored to your business needs. From front-end design to back-end functionality, we ensure a seamless and robust web presence. Elevate your brand with SMART ITBOX's comprehensive Web Development solutions.",
      externalLink: "#"
    },
    {
      id: 7,
      thumbnail: "development",
      formate: ".png",
      title: "App Development",
      description: "SMART ITBOX offers premier App Development services to turn your ideas into functional, user-friendly mobile applications. Our expert developers specialize in creating customized apps for both iOS and Android platforms, ensuring high performance and a seamless user experience. Innovate and engage your audience with SMART ITBOX's cutting-edge App Development solutions.",
      externalLink: "#"
    },
    {
      id: 8,
      thumbnail: "content-writing",
      formate: ".png",
      title: "Content Writing",
      description: "SMART ITBOX provides expert Content Writing services to enhance your digital presence. Our skilled writers craft compelling and SEO-friendly content tailored to your audience, ensuring it resonates with your brand's voice and objectives. From website content to blog posts and marketing materials, trust SMART ITBOX to deliver engaging and impactful content that drives results.",
      externalLink: "#"
    },
    {
      id: 9,
      thumbnail: "backend",
      formate: ".png",
      title: "Software Development",
      description: "SMART ITBOX offers comprehensive Software Development services to transform your ideas into robust, scalable solutions. From initial concept to final deployment, our expert team delivers customized software tailored to your business needs. Whether it's enterprise applications, CRM systems, or specialized software solutions, SMART ITBOX ensures efficiency, reliability, and innovation in every project.",
      externalLink: "#"
    }
  ]

  useEffect(() => {
    // Create a GSAP context for the component
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: whatWeDoRef.current,
          start: '0% 100%',  // Animation starts when the section hits 50% of the viewport
          end: '100% 50%',  // Animation ends at the same point
          scrub: 1,
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

        tl.to(serviceChipRef.current, {
          translateY: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")
  
        tl.to(whatWeDoTitleOneRef.current, {
          translateY: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")

        tl.to(whatWeDoSubTitle.current, {
          translateY: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")

        tl.from('.service_col_0', {
          delay: 0.1,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.service_col_1', {
          delay: 0.2,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.service_col_2', {
          delay: 0.3,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.service_col_3', {
          delay: 0.4,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.service_col_4', {
          delay: 0.5,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.service_col_5', {
          delay: 0.6,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.service_col_6', {
          delay: 0.7,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.service_col_7', {
          delay: 0.8,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.service_col_8', {
          delay: 0.9,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")
  
      //   tl.to(aboutParaRef.current, {
      //     opacity: 1,
      //     duration: 0.5,
      //     delay: 1,
      //     ease: 'sine.out',  // Smooth easing
      //   }, "text_anim")

      //   tl.to(".btn_green", {
      //     translateY: 0,
      //     opacity: 1,
      //     duration: 1,
      //     delay: 1.5,
      //     ease: 'sine.out',  // Smooth easing
      //   }, "text_anim")

      //   // Image reveal animation timeline
      // const t2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: aboutBriefRef.current,
      //     start: '0% 50%',  // Animation starts when the section hits 50% of the viewport
      //     end: '100% 50%',  // Animation ends at the same point
      //     scrub: 1,  // Smooth scrubbing effect
      //     markers: false,  // Disable markers for production
      //   },
      // });

      // // Set initial visibility of the image container
      // t2.set(imageRevealRef.current, {
      //   autoAlpha: 1, // Initially invisible
      // });

      // // Image container reveal animation
      // t2.from(imageRevealRef.current, {
      //   //autoAlpha: 1, // Fade in
      //   xPercent: 200,  // Move the container from the right
      //   duration: 2.5,  // Animation duration
      //   ease: 'power2.out',  // Smooth easing
      // }, '<');

      // // Image scaling animation
      // t2.from(".about_img", {
      //   scale: 1.3, // Start the image from scaleX 0
      //   // xPercent: -200,
      //   width: 0,
      //   transformOrigin: "right", // Scale from the right edge
      //   duration: 1.5,  // Animation duration
      //   ease: 'power2.out',  // Smooth easing
      // }, '<'); // The '<' ensures it starts together with the container reveal
      
    }, whatWeDoRef); // Pass the container where the animations are applied

    // Clean up the animations when the component unmounts
    return () => ctx.revert();
  }, []);
  return (
    <section className='what_we_do_area' ref={whatWeDoRef}>
      <h2 className='floating_txt'  ref={floatingTextRef}>Services</h2>
      <div className='sec what_we_do_wrapper'>
        <div className='sec_header'>
          <span className='chip' ref={serviceChipRef}>Services</span>
          <h2 className='what_we_do_title'>
            <span ref={whatWeDoTitleOneRef} className='what_we_do_title'><span className='text_yellow'>What</span> We Do</span>
          </h2>
          <h4 className='sub_title'>
            <span ref={whatWeDoSubTitle}>Crafting customized digital strategies across diverse performance channels.</span>
          </h4>
        </div>

        <div className='service_flex_wrapper'>

          {
            serviceData?.map((service, idx) => {
              return (
                <div className={`service_column service_col_${idx}`} key={service?.id}>
                  <div className='service_box'>
                    <div className='service_icon'>
                      <Image
                        src={`/images/${service?.thumbnail}${service.formate}`}
                        width={256}
                        height={256}
                        style={{ width: "3.125vw", height: "3.125vw" }}
                        priority
                      />
                    </div>
                    <div className='service_content'>
                      <h2>{service?.title}</h2>
                      <p>{service?.description}</p>
                      <Link href={service?.externalLink} className='service_explore'>
                        <span>Explore</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="white" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"/></svg></Link>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
      <Image
        src="/images/bg_vector_01.png"
        width={1920}
        height={1080}
        style={{width: "100%", height: "70vw"}}
        className='service_bg'
      />
    </section>
  )
}

export default WhatWeDo