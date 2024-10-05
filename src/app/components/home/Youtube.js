"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Youtube = () => {
  const youtubeAreaRef = useRef(null);
  const floatingTextRef = useRef(null);
  const youtubeChipRef = useRef(null);

  const youtubedata = {
    "videos": [
      { "id": 1, "title": "Video 1", "url": "https://www.youtube.com/embed/q59HKKVZaS0?si=gYncARL3N8f5n0VJ" },
      { "id": 2, "title": "Video 2", "url": "https://www.youtube.com/embed/wCm1xzG2FcQ?si=Rj2w5gpbjXCZVs7K" },
      { "id": 3, "title": "Video 3", "url": "https://www.youtube.com/embed/p9_PQM_OA5s?si=EXCIfV9AJbdXvzxy" },
      { "id": 4, "title": "Video 4", "url": "https://www.youtube.com/embed/X6oKJKYtnEM?si=QXyDDX8ezDLcEGV_" },
      { "id": 5, "title": "Video 5", "url": "https://www.youtube.com/embed/u-LiKrqPD_E?si=RKpEc-DrL-K9Acxw" },
      { "id": 6, "title": "Video 6", "url": "https://www.youtube.com/embed/0HKEIpByP6E?si=EAWOjcAcQ3ohSDZR" },
      { "id": 7, "title": "Video 7", "url": "https://www.youtube.com/embed/QPer0gm-8ms?si=6iMshg9zrS8IGEiL" },
      { "id": 8, "title": "Video 8", "url": "https://www.youtube.com/embed/0DJdS-T9Og8?si=dj3_p0uK_pvRXKDd" },
      { "id": 9, "title": "Video 9", "url": "https://www.youtube.com/embed/tf0lIytVVKs?si=lLe3Agg6JS_yFVP3" }
    ]
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: youtubeAreaRef.current,
          start: '0% 90%',
          end: '100% 50%',
          scrub: 1,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      tl.addLabel("start")
        .from(floatingTextRef.current, {
          delay: -0.6,
          duration: 0.8,
          y: 200,
          ease: "sine.out",
          stagger: { amount: 0.2 },
        }, "text_anim")
        .to(youtubeChipRef.current, {
          translateY: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'sine.out',
        }, "text_anim")
        .to(".youtube_title", {
          translateY: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'sine.out',
        }, "text_anim")
        .from('.ytVideoBox_0', {
          delay: 0.1,
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "sine.out",
          stagger: { amount: 0.2 },
        }, "text_anim")
        .from('.ytVideoBox_1', {
            delay: 0.2,
            duration: 0.8,
            y: 100,
            opacity: 0,
            ease: "sine.out",
            stagger: { amount: 0.2 },
          }, "text_anim")
          .from('.ytVideoBox_2', {
            delay: 0.3,
            duration: 0.8,
            y: 100,
            opacity: 0,
            ease: "sine.out",
            stagger: { amount: 0.2 },
          }, "text_anim")
          .from('.ytVideoBox_3', {
            delay: 0.4,
            duration: 0.8,
            y: 100,
            opacity: 0,
            ease: "sine.out",
            stagger: { amount: 0.2 },
          }, "text_anim")
          .from('.ytVideoBox_4', {
            delay: 0.5,
            duration: 0.8,
            y: 100,
            opacity: 0,
            ease: "sine.out",
            stagger: { amount: 0.2 },
          }, "text_anim")
          .from('.ytVideoBox_5', {
            delay: 0.6,
            duration: 0.8,
            y: 100,
            opacity: 0,
            ease: "sine.out",
            stagger: { amount: 0.2 },
          }, "text_anim")
          .from('.ytVideoBox_6', {
            delay: 0.7,
            duration: 0.8,
            y: 100,
            opacity: 0,
            ease: "sine.out",
            stagger: { amount: 0.2 },
          }, "text_anim")
          .from('.ytVideoBox_7', {
            delay: 0.8,
            duration: 0.8,
            y: 100,
            opacity: 0,
            ease: "sine.out",
            stagger: { amount: 0.2 },
          }, "text_anim")
          .from('.ytVideoBox_8', {
            delay: 0.9,
            duration: 0.8,
            y: 100,
            opacity: 0,
            ease: "sine.out",
            stagger: { amount: 0.2 },
          }, "text_anim");
      
    }, youtubeAreaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className='youtube_area' ref={youtubeAreaRef}>
      <h2 className='floating_txt' ref={floatingTextRef}>Presence</h2>
      <div className='sec youtube_videos_wrapper'>
        <div className='sec_header'>
          <span className='chip' ref={youtubeChipRef}>Visibility</span>
          <h2>
            <span className='youtube_title'><span className='text_yellow'>We Are on </span>youtube</span>
          </h2>
        </div>
        <div className='videos_flex'>
          {youtubedata.videos.map((item, idx) => (
            <div className={`ytVideoBox_ ytVideoBox_${idx}`} key={item.id}>
              <iframe
                width="420"
                height="315"
                src={item.url}
                title={item.title}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Youtube;
