import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee"
import ProductCard from '../com/ProductCard'
const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>iPad S13+ Pro</h5>
                                    <p>From ₹1000000 <br /> or ₹4000/mo</p>
                                    <Link className='button'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Best Sale!!</h4>
                                        <h5>iPad S13+ Pro</h5>
                                        <p>From ₹100000 <br /> or ₹4000/mo</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>From ₹100000 <br /> or ₹4000/mo</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>From ₹100000 <br /> or ₹4000/mo</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>From ₹100000 <br /> or ₹4000/mo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-25">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className=" d-flex algin-items-center gap-15">
                                    <img src="images/service.png" alt="Service 1" />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className='mb-0'>From all orders over ₹499</p>
                                    </div>
                                </div>

                                <div className=" d-flex algin-items-center gap-15">
                                    <img src="images/service-02.png" alt="Service 2" />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className='mb-0'>Save upto 25% off</p>
                                    </div>
                                </div>
                                <div className=" d-flex algin-items-center gap-15">
                                    <img src="images/service-03.png" alt="Service 3" />
                                    <div>
                                        <h6> Support 24/7</h6>
                                        <p className='mb-0'> Shop with in expert</p>
                                    </div>
                                </div>
                                <div className=" d-flex algin-items-center gap-15">
                                    <img src="images/service-04.png" alt="Service 4" />
                                    <div>
                                        <h6>Affordable Price</h6>
                                        <p className='mb-0'>Get Factory Default Price</p>
                                    </div>
                                </div>
                                <div className=" d-flex algin-items-center gap-15">
                                    <img src="images/service-05.png" alt="Service 5" />
                                    <div>
                                        <h6>Secure Payment</h6>
                                        <p className='mb-0'> 100% Protected Payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories  d-flex justify-content-between flex-wrap align-items-center ">
                                <div className='d-flex gap  align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap  align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap  align-items-center'>
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap  align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap  align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap  align-items-center'>
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap  align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="marque-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marque-inner-wrapper card-wrapper">
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-01.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-02.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-03.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-04.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-05.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-06.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-07.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-08.png" alt="brand" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-wrapper py-5 home-wapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Featured Collection</h3>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home