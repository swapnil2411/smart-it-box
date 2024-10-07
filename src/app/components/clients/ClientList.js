"use client"
import React from 'react'
import { useEffect, useState } from 'react';

const ClientList = () => {
    const images = [
        { "baseUrl": "1" },
        { "baseUrl": "2" },
        { "baseUrl": "3" },
        { "baseUrl": "4" },
        { "baseUrl": "5" },
        { "baseUrl": "6" },
        { "baseUrl": "7" },
        { "baseUrl": "8" },
        { "baseUrl": "9" },
        { "baseUrl": "10" },
        { "baseUrl": "11" },
        { "baseUrl": "12" },
        { "baseUrl": "13" },
        { "baseUrl": "14" },
        { "baseUrl": "15" },
        { "baseUrl": "16" },
        { "baseUrl": "17" },
        { "baseUrl": "18" },
        { "baseUrl": "19" },
        { "baseUrl": "20" },
        { "baseUrl": "21" },
        { "baseUrl": "22" },
        { "baseUrl": "23" },
        { "baseUrl": "24" },
        { "baseUrl": "25" },
        { "baseUrl": "26" },
        { "baseUrl": "27" },
        { "baseUrl": "28" },
        { "baseUrl": "29" },
        { "baseUrl": "30" },
        { "baseUrl": "31" },
        { "baseUrl": "32" },
        { "baseUrl": "33" },
        { "baseUrl": "34" },
        { "baseUrl": "35" },
        { "baseUrl": "36" },
        { "baseUrl": "37" },
        { "baseUrl": "38" },
        { "baseUrl": "39" },
        { "baseUrl": "40" },
        { "baseUrl": "41" },
        { "baseUrl": "42" },
        { "baseUrl": "43" },
        { "baseUrl": "44" },
        { "baseUrl": "45" },
        { "baseUrl": "46" },
        { "baseUrl": "47" },
        { "baseUrl": "48" },
        { "baseUrl": "49" },
        { "baseUrl": "50" },
        { "baseUrl": "51" },
        { "baseUrl": "52" },
        { "baseUrl": "53" },
        { "baseUrl": "54" },
        { "baseUrl": "55" },
        { "baseUrl": "56" },
        { "baseUrl": "57" },
        { "baseUrl": "58" },
        { "baseUrl": "59" },
        { "baseUrl": "60" },
        { "baseUrl": "61" },
        { "baseUrl": "62" },
        { "baseUrl": "63" },
        { "baseUrl": "64" },
        { "baseUrl": "65" },
        { "baseUrl": "66" }
    ]
    const [validUrls, setValidUrls] = useState({});
    const [loading, setLoading] = useState(true); // Single loader state

    useEffect(() => {
        const loadImages = async () => {
            const urls = {};
            const loadPromises = images.map((image) => {
                return new Promise((resolve) => {
                    const pngUrl = `/images/clients/${image.baseUrl}.png`;
                    const jpgUrl = `/images/clients/${image.baseUrl}.jpg`;
                    const jpegUrl = `/images/clients/${image.baseUrl}.jpeg`;

                    const imgPng = new Image();
                    const imgJpg = new Image();
                    const imgJpeg = new Image();

                    // Attempt to load PNG
                    imgPng.src = pngUrl;
                    imgPng.onload = () => {
                        urls[image.baseUrl] = pngUrl;
                        resolve();
                    };

                    // If PNG fails, attempt to load JPG
                    imgPng.onerror = () => {
                        imgJpg.src = jpgUrl;
                        imgJpg.onload = () => {
                            urls[image.baseUrl] = jpgUrl;
                            resolve();
                        };

                        // If JPG fails, attempt to load JPEG
                        imgJpg.onerror = () => {
                            imgJpeg.src = jpegUrl;
                            imgJpeg.onload = () => {
                                urls[image.baseUrl] = jpegUrl;
                                resolve();
                            };

                            // If JPEG fails, resolve with no valid URL
                            imgJpeg.onerror = () => {
                                resolve();
                            };
                        };
                    };
                });
            });

            await Promise.all(loadPromises);
            setValidUrls(urls);
            setLoading(false); // Hide loader once all images are checked
        };

        loadImages();
    }, []);

    if (loading) {
        return <div className="loader_wrapper"><div className="loader"></div></div>; // Display single loader while all images are loading
    }
  return (
    <section className="clients_display_area">
            <div className="sec clients_wrapper">
            <div className='sec_header'>
              <span className='chip'>Clients</span>
              <h2>
                <span className='clients_title'><span className='text_yellow'>Our</span> Valued Clients</span>
              </h2>
            </div>
                <div className="clients_logo_gallery">
                    {images.map((image, index) => (
                        validUrls[image.baseUrl] ? (
                            <div className="client_logo_col" key={index}>
                                <div className='client_logo_box'>
                                    <img
                                        key={index}
                                        src={validUrls[image.baseUrl]}  
                                        alt={`Image ${image.baseUrl}`}
                                    />
                                </div>
                            </div>
                        ) : (
                            <p key={index}>Image {image.baseUrl} not found</p>
                        )
                    ))}
                </div>
            </div>
        </section>
  )
}

export default ClientList