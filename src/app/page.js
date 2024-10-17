"use client"
import React from 'react'
import Banner from './components/home/Banner'
import Specialization from './components/home/Specialization'
import GoogleWorkplaceAutomation from './components/home/GoogleWorkplaceAutomation'
import AboutBrief from './components/home/AboutBrief'
import WhatWeDo from './components/home/WhatWeDo'
import WhyChooseUs from './components/home/WhyChooseUs'
import GetInTouch from './components/home/GetInTouch'
import ClientsSlide from './components/home/ClientsSlide'
import Industries from './components/home/Industries'
import Blogs from './components/home/Blogs'
import Youtube from './components/home/Youtube'

const Home = () => {
    return (
      <div>
        <Banner />
        <Specialization />
        <GoogleWorkplaceAutomation />
        <AboutBrief />
        <WhatWeDo />
        <WhyChooseUs />
        <GetInTouch />
        <ClientsSlide />
        <Industries />
        <Blogs />
        <Youtube />
      </div>
    )
}

export default Home