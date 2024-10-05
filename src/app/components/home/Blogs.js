"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const breakPoints = [
  { width: 600, itemsToShow: 1 },
  { width: 991, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

const Blogs = () => {

  const blogsRef = useRef(null);
  const floatingTextRef = useRef(null);
  const blogsChipRef = useRef(null);

  const blogsData = [
    {
      "id": 1,
      "title": "Google Sheet Shortcut Keys",
      "description": "Google Sheet Shortcut Keys For Window And Mac In today’s fast-paced world, time is of the essence. Every second saved counts towards productivity and success. One tool that has revolutionised the way we handle data and spreadsheets is Google Sheets. To make the most of this powerful tool, it’s essential…",
      "imageUrl": "google_sheet_shortcut_key",
      "formate": ".png"
    },
    {
      "id": 2,
      "title": "Beginner’s Guide to Google Sheet App Script",
      "description": "Introduction In today’s fast-paced digital era, efficiency is key. The Google Sheet App Script is a powerful tool that allows users to automate tasks and customize Google Sheets to suit their specific needs. Whether you’re a seasoned professional or just starting out, this beginner’s guide will walk you through the…",
      "imageUrl": "beginner_guide",
      "formate": ".png"
    },
    {
      "id": 3,
      "title": "WhatsApp Business API for Education",
      "description": "In today’s rapidly evolving digital landscape, communication is key, and WhatsApp has emerged as a powerful tool for businesses and institutions to connect with their audiences. This holds particularly true for the education sector, where the WhatsApp Business API has opened up a world of opportunities. From streamlining communication between…",
      "imageUrl": "whatsapp_api",
      "formate": ".png"
    },
    {
      "id": 4,
      "title": "Google Sheet Automation Experts in Delhi",
      "description": "In the heart of Delhi’s bustling business landscape, a game-changer is revolutionizing the way businesses operate – SMART ITBOX, your trusted Google Sheet automation expert. With a commitment to efficiency, accuracy, and innovation, SMART ITBOX is your go-to partner for unleashing the full potential of Google Sheets through strategic automation…",
      "imageUrl": "google_sheet_shortcut_key",
      "formate": ".png"
    }
  ]

  useEffect(() => {
    // Create a GSAP context for the component
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: blogsRef.current,
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
          y: 200,
          ease: "sine.out",  // Use string notation for ease
          stagger: {
            amount: 0.2,
          },
        }, "text_anim");

      tl.to(blogsChipRef.current, {
        translateY: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'sine.out',  // Smooth easing
      }, "text_anim")

      tl.to(".blogs_title", {
        translateY: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'sine.out',  // Smooth easing
      }, "text_anim")

      tl.from(".blogs_slider", {
        y: 200,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'sine.out',  // Smooth easing
        stagger: {
          amount: 0.2,
        },
      }, "text_anim")



    }, blogsRef); // Pass the container where the animations are applied

    // Clean up the animations when the component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <section className='our_blogs_area' ref={blogsRef}>
      <h2 className='floating_txt' ref={floatingTextRef}>Blogs</h2>
      <div className='sec our_blogs_wrapper'>
        <div className='sec_header'>
          <span className='chip' ref={blogsChipRef}>Blogs</span>
          <h2>
            <span className='blogs_title'><span className='text_yellow'>Our </span>Latest Blog</span>
          </h2>
        </div>

        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          {blogsData.map((item) => (
            <SwiperSlide className='blogs_column' key={item?.id}>
              <div className='blogs_box'>
                <div className='blog_thumbnail'>
                  <Image src={`/images/${item?.imageUrl}${item?.formate}`} width={421} height={250} />
                </div>
                <div className='blog_data'>
                  <h2>{item?.title}</h2>
                  <p>
                    {item?.description}
                  </p>
                  <Link href="" className='blogs_explore'>
                    <span>Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="white" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0" /></svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Blogs