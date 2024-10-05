"use client"
import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
    const visionMissionRef = useRef(null);

    useEffect(() => {
    
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: visionMissionRef.current,
              start: '0% 80%',  // Animation starts when the section hits 50% of the viewport
              end: '100% 50%',  // Animation ends at the same point
              scrub: true,
              markers: true, // Remove markers after debugging
            },
          });
    
          tl.to(".block_title", {
            translateY: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.2,
            ease: 'sine.out',  // Smooth easing
          }, "text_anim")
    
          
          tl.to(".vision_mission_para", {
            opacity: 1,
            duration: 0.5,
            delay: 1,
            ease: 'sine.out',  // Smooth easing
          }, "text_anim")
    
        }, visionMissionRef);
    
        // Clean up the animations when the component unmounts
        return () => ctx.revert();
      }, []);
  return (
    <section className='vision_mission_area' ref={visionMissionRef}>
        <div className='sec vision_mission_wrapper'>
          <div className='vision_block'>
            <h2 className='heading'><span className='block_title'><span className='text_yellow'>Our</span> Vision</span></h2>
            <p className='vision_mission_para'>
            We bestow promising software solutions that engage in subtle and effective service delivery architecture. We have taken resultative decisions that allowed us to envision our clients’ objectives fast and simply.
            </p>
          </div>
          <div className='mission_block'>
          <h2 className='heading'><span className='block_title'><span className='text_yellow'>Our</span> Mission</span></h2>
            <p className='vision_mission_para'>Upholding the principles of service delivery, we tender client-centric solutions that bring them maximum productivity in the least resources. As our motto says ‘MAKE IT SMART’, we aspire to bring in result-oriented strategies to carve the strategies for product design and creation.</p>
          </div>
        </div>
      </section>
  )
}

export default VisionMission