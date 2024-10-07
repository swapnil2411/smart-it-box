"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Industries = () => {

  const industryAreaRef = useRef(null);
  const floatingTextRef = useRef(null);
  const industriesChipRef = useRef(null);

  const industryData = [
    {
      id: 1,
      title: "Banking",
      imgUrl: "mobile-banking"
    },
    {
      id: 2,
      title: "Insurance",
      imgUrl: "payment"
    },
    {
      id: 3,
      title: "Retail",
      imgUrl: "market"
    },
    {
      id: 4,
      title: "Education",
      imgUrl: "education"
    },
    {
      id: 5,
      title: "Healthcare",
      imgUrl: "healthcare"
    },
    {
      id: 6,
      title: "Energy & Utilities",
      imgUrl: "recycle"
    },
    {
      id: 7,
      title: "Logistics",
      imgUrl: "distribution"
    },
    {
      id: 8,
      title: "Manufacturing",
      imgUrl: "conveyor-belt"
    },
    {
      id: 9,
      title: "Tour & Travel",
      imgUrl: "world-tour"
    },
    {
      id: 10,
      title: "Gym & Fitness",
      imgUrl: "weights"
    },
    {
      id: 11,
      title: "Restaurants",
      imgUrl: "food-tray"
    },
    {
      id: 12,
      title: "Startups",
      imgUrl: "consultant"
    }
  ]

  useEffect(() => {
    // Create a GSAP context for the component
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: industryAreaRef.current,
          start: '0% 90%',  // Animation starts when the section hits 50% of the viewport
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
          y: 200,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim");

        tl.to(industriesChipRef.current, {
          translateY: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")
  
        tl.to(".induxtriesTitleOne", {
          translateY: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")

        tl.to(".induxtriesTitleTwo", {
          translateY: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'sine.out',  // Smooth easing
        }, "text_anim")

        tl.from('.industry_col_0', {
          delay: 0.1,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.industry_col_1', {
          delay: 0.2,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.industry_col_2', {
          delay: 0.3,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.industry_col_3', {
          delay: 0.4,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.industry_col_4', {
          delay: 0.5,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.industry_col_5', {
          delay: 0.6,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.industry_col_6', {
          delay: 0.7,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.industry_col_7', {
          delay: 0.8,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.industry_col_8', {
          delay: 0.9,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.industry_col_9', {
          delay: 1,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.industry_col_10', {
          delay: 1.1,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")

        tl.from('.industry_col_11', {
          delay: 1.2,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim")
      
      
    }, industryAreaRef); // Pass the container where the animations are applied

    // Clean up the animations when the component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <section className='industries_area' ref={industryAreaRef}>
      <h2 className='floating_txt' ref={floatingTextRef}>Multi-Industry</h2>
      <div className='sec industries_wrapper'>
        <div className='sec_header'>
          <span className='chip' ref={industriesChipRef}>Industries</span>
          <h2 className='mb-0'>
            <span className='induxtriesTitle induxtriesTitleOne'><span className='text_yellow'>MULTI-INDUSTRY EXPERTISE FOR</span></span>
          </h2>
          <h2 className='mt-0'>
            <span className='induxtriesTitle induxtriesTitleTwo'>DIFFERENT BUSINESS DOMAINS</span>
          </h2>
        </div>

        <div className='industries_flex'>
          {
            industryData?.map((industry, idx) => {
              return (
                <div className={`industry_column industry_col_${idx}`} key={industry?.id}>
                  <div className='industry_box'>
                    <div className='industry_icon'>
                      <Image
                        src={`/images/${industry?.imgUrl}.png`}
                        width={60}
                        height={60}
                        style={{ width: "3.125vw", height: "3.125vw" }}
                      />
                    </div>
                    <div className='industry_title'>
                      <h3>{industry?.title}</h3>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Industries