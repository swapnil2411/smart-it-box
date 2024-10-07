import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <Image
        src="/images/footer_bg.png"
        width={1920}
        height={590}
        style={{width: "100%", height: "30.729vw"}}
        className='footer_vector'
      />
      <div className='sec footer_wrapper'>
        <div className='footer_left_area'>
          <div className='footer_logo'>
            <Image
              src="/images/footer-logo.png"
              width={300}
              height={70}
              style={{width: "15.625vw", height: "3.646vw"}}
              priority
            />
          </div>
          <p>
            We are a digital solutions provider serving for more than 7+ years. The company has been accredited several prestigious recognitions for its quality services in the IT-Software industry.
          </p>
          <div className='footer_social_links'>
            <ul>
              <li>
                <Link href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164"/></svg>
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"/></svg>
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer_right_area'>
          <div className='footer_column'>
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/About">
                  About
                </Link>
              </li>
              <li>
                <Link href="">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/Certificate">
                  Certificate
                </Link>
              </li>
              <li>
                <Link href="/Contact">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link href="">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
          <div className='footer_column'>
            <h3>Our Services</h3>
            <ul>
              <li>
                <Link href="/">
                Google Sheet Automate
                </Link>
              </li>
              <li>
                <Link href="/">
                What’s app Api
                </Link>
              </li>
              <li>
                <Link href="/">
                Email Integration
                </Link>
              </li>
              <li>
                <Link href="/">
                Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/">
                UI/UX design
                </Link>
              </li>
              <li>
                <Link href="/">
                Web Development
                </Link>
              </li>
              <li>
                <Link href="/">
                App Development
                </Link>
              </li>
              <li>
                <Link href="/">
                Software Development
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer_column'>
            <h3>Our Products</h3>
            <ul>
              <li>
                <Link href="">
                Sales CRM
                </Link>
              </li>
              <li>
                <Link href="">
                Staff Checklist
                </Link>
              </li>
              <li>
                <Link href="">
                Payment Reminder
                </Link>
              </li>
              <li>
                <Link href="">
                Stock Management System
                </Link>
              </li>
              <li>
                <Link href="">
                Bom Creation Softline Goods
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p>2024 © Design & Develop by SMARTITBOX</p>
      </div>
    </footer>
  )
}

export default Footer