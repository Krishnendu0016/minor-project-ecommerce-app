import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from "react-icons/bs";


const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="newsletter" />
              <h2 className='mb-0 text-white'>Sign up for more updates</h2>
            </div>
          </div>
          <div className="col-7"><div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your email  " aria-label="Your email  " aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div></div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  A-701,Sygnora Sky, <br />Adajan,Surat <br />
                  Pincode : 395009
                </address>
                <a href="tel:+91 6359281236" className='mt-3 d-block mb-1 text-white'>
                    +91 6359281236
                </a>
                <a href="mailto:kushpatelvk@gmail.com" className='mt-2 d-block mb-2 text-white '>
                    kushpatelvk@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="https://www.linkedin.com/in/varun-maurya/" target="_blank">
                    <BsLinkedin className='fs-4'/>
                  </a>
                  <a className="text-white" href="https://github.com/Kush12203" target="_blank">
                    <BsGithub className='fs-4'/>
                  </a>
                  <a className="text-white" href="https://www.instagram.com/_k.r.i.s.h.n.e.n.d.u_016?igsh=OWx4M2hvcDk3NXJr" target="_blank">
                    <BsInstagram className='fs-4'/>
                  </a>
                  <a className="text-white" href="https://www.youtube.com/channel/UC7KQidPzX4vXzD_hHviz0bQ" target="_blank">
                    <BsYoutube className='fs-4'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
                
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptopes</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablet</Link>
                <Link className='text-white py-2 mb-1'>Watches</Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className='text-center mb-0 text-white'>
              &copy; {new Date().getFullYear()}; Powered by Developers
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;