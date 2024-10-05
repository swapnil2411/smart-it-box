"use client"
import React from 'react'
import { useEffect, useRef } from 'react';
const Youtube = () => {
    const floatingTextRef = useRef(null)
    const youtubedata = {
        "videos": [
            {
                "id": 1,
                "title": "Video 1",
                "url": "https://www.youtube.com/embed/q59HKKVZaS0?si=gYncARL3N8f5n0VJ"
            },
            {
                "id": 2,
                "title": "Video 2",
                "url": "https://www.youtube.com/embed/wCm1xzG2FcQ?si=Rj2w5gpbjXCZVs7K"
            },
            {
                "id": 3,
                "title": "Video 3",
                "url": "https://www.youtube.com/embed/p9_PQM_OA5s?si=EXCIfV9AJbdXvzxy"
            },
            {
                "id": 4,
                "title": "Video 4",
                "url": "https://www.youtube.com/embed/X6oKJKYtnEM?si=QXyDDX8ezDLcEGV_"
            },
            {
                "id": 5,
                "title": "Video 5",
                "url": "https://www.youtube.com/embed/u-LiKrqPD_E?si=RKpEc-DrL-K9Acxw"
            },
            {
                "id": 6,
                "title": "Video 6",
                "url": "https://www.youtube.com/embed/0HKEIpByP6E?si=EAWOjcAcQ3ohSDZR"
            },
            {
                "id": 7,
                "title": "Video 7",
                "url": "https://www.youtube.com/embed/QPer0gm-8ms?si=6iMshg9zrS8IGEiL"
            },
            {
                "id": 8,
                "title": "Video 8",
                "url": "https://www.youtube.com/embed/0DJdS-T9Og8?si=dj3_p0uK_pvRXKDd"
            },
            {
                "id": 9,
                "title": "Video 9",
                "url": "https://www.youtube.com/embed/tf0lIytVVKs?si=lLe3Agg6JS_yFVP3"
            }
        ]
    }

    return (
        <section className='youtube_area'>
            <h2 className='floating_txt' ref={floatingTextRef}>Presence</h2>
            <div className='sec youtube_videos_wrapper'>
                <div className='sec_header'>
                    <span className='chip'>Visibility</span>
                    <h2>
                        <span className='whyChooseUsTitle'><span className='text_yellow'>We Are on </span>youtube</span>
                    </h2>
                </div>
                <div className='videos_flex'>
                    {
                        youtubedata?.videos.map((item, idx) => {
                            return (
                                <div className='ytVideoBxo' id={item?.id}>
                                    <iframe width="420" height="315"
                                        src={item?.url}>
                                    </iframe>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Youtube