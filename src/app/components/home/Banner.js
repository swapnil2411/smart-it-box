"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import BannerVector from "../../../../public/images/vector_name.png"
import BannerImg from "../../../../public/images/banner_img.png"
import ProductOne from "../../../../public/images/product_01.png"
import ProductTwo from "../../../../public/images/product_02.png"
import ProductThree from "../../../../public/images/product_03.png"
import ProductFour from "../../../../public/images/product_04.png"
import ProductFive from "../../../../public/images/product_05.png"
import ProductSix from "../../../../public/images/product_06.png"
import ProductSeven from "../../../../public/images/product_07.png"
import ProductEight from "../../../../public/images/product_08.png"
import ProductNine from "../../../../public/images/product_09.png"
import ProductTen from "../../../../public/images/product_10.png"

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const bannerBtnRef1 =useRef(null);
  const bannerBtnRef2 =useRef(null);
  const bannerScrollRef = useRef(null);
  useEffect(() => {
    // Use GSAP to animate the element
    gsap.to(textRef.current, { translateY: 0, duration: 1 });
    gsap.to(textRef1.current, { translateY: 0, duration: 1, delay: 0.5 });
    gsap.to(textRef2.current, { translateY: 0, duration: 1, delay: 1 });
    gsap.to(bannerBtnRef1.current, { opacity: 1, duration: 1.5, delay: 2 });
    gsap.to(bannerBtnRef2.current, { opacity: 1, duration: 1.5, delay: 2 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerScrollRef.current,
          start: 'top top',
          end: '+=3000',
          pin: true,
          scrub: true,
          markers: false, // Keep this for debugging, remove later
        },
      });

      // tl.to(".products_name", {
      //   right: "0%",
      //   duration: 10,
      // })

      tl.to(".products_img img:nth-child(1)", {
        top: "92vh",
        left: "7vw",
        duration: 3,
        opacity: 1,
        width: "auto",
        ease: 'power3.out',
      }, 'product_img_anim')
      .to(".products_img img:nth-child(2)", {
        top: "10vh",
        left: "8vw",
        duration: 3,
        opacity: 1,
        width: "auto",
        ease: 'power3.out',
      }, 'product_img_anim') // Offset to start slightly earlier
  
      .to(".products_img img:nth-child(3)", {
        top: "20vh",
        left: "35vw",
        duration: 3,
        opacity: 1,
        width: "auto",
        ease: 'power3.out',
      }, 'product_img_anim')
  
      .to(".products_img img:nth-child(4)", {
        top: "45vh",
        left: "1vw",
        duration: 3,
        opacity: 1,
        width: "auto",
        ease: 'power3.out',
      }, 'product_img_anim')
  
      .to(".products_img img:nth-child(5)", {
        top: "93vh",
        left: "60vw",
        duration: 3,
        opacity: 1,
        width: "auto",
        ease: 'power3.out',
      }, 'product_img_anim')
  
      .to(".products_img img:nth-child(6)", {
        top: "65vh",
        left: "70vw",
        duration: 3,
        opacity: 1,
        width: "auto",
        ease: 'power3.out',
      }, 'product_img_anim')
  
      .to(".products_img img:nth-child(7)", {
        top: "70vh",
        left: "45vw",
        duration: 3,
        opacity: 1,
        width: "auto",
        ease: 'power3.out',
      }, 'product_img_anim')
  
      .to(".products_img img:nth-child(8)", {
        top: "90vh",
        left: "90vw",
        duration: 3,
        opacity: 1,
        width: "auto",
        ease: 'power3.out',
      }, 'product_img_anim')
  
      .to(".products_img img:nth-child(9)", {
        top: "38vh",
        left: "80vw",
        duration: 3,
        opacity: 1,
        width: "auto",
        ease: 'power3.out',
      }, 'product_img_anim')
  
      .to(".products_img img:nth-child(10)", {
        top: "12vh",
        left: "92vw",
        duration: 3,
        opacity: 1,
        width: "auto",
        ease: 'power3.out',
      }, 'product_img_anim');

      
    }, bannerScrollRef); // Pass the container where the animations are applied

    // Clean up the animations when the component unmounts
    return () => ctx.revert();
  }, []);
  return (
    <section className='hero_section' ref={bannerScrollRef}>
      <Image
        src={BannerImg}
        width={1920}
        height={1080}
        priority
        style={{width: "100vw", height: "100vh", objectFit: "cover"}}
        className='banner_img'
      />

      <div className='banner_content'>
        <p>
          <span ref={textRef}>See The Digital Future of Your Business And Make Come True</span>
        </p>
        <h2>
          <span ref={textRef1}>Discover New Ideas</span> <br />
          <span ref={textRef2}>Build Your Business</span>
        </h2>
        <div className='banner_btn_grp'>
          <Link href="/About" className='btn_green' ref={bannerBtnRef1}>Read More</Link>
          <Link href="https://www.youtube.com/embed/0GF4Ypb3xPc?feature=oembed?playlist=0GF4Ypb3xPc&mute=0&autoplay=0&loop=no&controls=0&start=0&end=" className='btn_yellow' ref={bannerBtnRef2}>Watch Video</Link>
        </div>
      </div>
      <div className="products_reveal">
        <div className="banner_products_vector">
        <Image src={BannerVector} 
            height={200}
            width={200}
            style={{width: "unset", height: "unset"}}
            alt='product_one'
            priority
          />
        </div>

        {/* <div className="products_name">
          <span>IMS</span>
          <span>PMS</span>
          <span>FMS</span>
          <span>PO</span>
          <span>GRN</span>
          <span>ISSUANCE</span>
          <span>ORDER COLLECTION</span>
          <span>BOM</span>
          <span>FULL KITTING</span>
          <span>PRODUCTION</span>
          <span>PACKING LIST</span>
          <span>SALER ORDER</span>
          <span>TAX INVOICE</span>
          <span>SALES LEAD</span>
          <span>SALES FOLLOW-UP</span>
          <span>SALES NURTURE</span>
          <span>QUOTATION</span>
          <span>PROFORMA INVOICE</span>
          <span>DELEGATION SYSTEM</span>
          <span>STAFF CHECKLIST</span>
        </div> */}
        <div className="products_img">
          <Image src={ProductOne} 
            height={100}
            width={200}
            style={{width: "unset", height: "unset"}}
            alt='product_one'
            priority
          />
          <Image src={ProductTwo} 
            height={100}
            width={200}
            style={{width: "unset", height: "unset"}}
            alt='product_two'
            priority
          />
          <Image src={ProductThree} 
            height={100}
            width={200}
            style={{width: "unset", height: "unset"}}
            alt='product_three'
            priority
          />
          <Image src={ProductFour} 
            height={100}
            width={200}
            style={{width: "unset", height: "unset"}}
            alt='product_four'
            priority
          />
          <Image src={ProductFive} 
            height={100}
            width={200}
            style={{width: "unset", height: "unset"}}
            alt='product_five'
            priority
          />
          <Image src={ProductSix} 
            height={100}
            width={200}
            style={{width: "unset", height: "unset"}}
            alt='product_six'
            priority
          />
          <Image src={ProductSeven} 
            height={100}
            width={200}
            style={{width: "unset", height: "unset"}}
            alt='product_seven'
            priority
          />
          <Image src={ProductEight} 
            height={100}
            width={200}
            style={{width: "unset", height: "unset"}}
            alt='product_eight'
            priority
          />
          <Image src={ProductNine} 
            height={100}
            width={200}
            style={{width: "unset", height: "unset"}}
            alt='product_nine'
            priority
          />
          <Image src={ProductTen} 
            height={100}
            width={200}
            style={{width: "unset", height: "unset"}}
            alt='product_ten'
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Banner