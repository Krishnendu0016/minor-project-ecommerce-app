import React from 'react'
import Meta from '../com/Meta'
import BreadCrumb from '../com/BreadCrumb'
const compareProduct = () => {
    return (
        <>
            <Meta title={"compare Products"} />
            <BreadCrumb title="compare Products" />
            <div className="compare-product-wrapper py-5 home-wapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                 <img src="images/cross.svg" 
                                 alt="cross" 
                                 className="position-absolute cross img-fluid" 
                                 />
                                  <div className="producqt-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                  </div>
                                  <div className="compare-product-details">
                                    <h5 className="title">
                                        Honor T1 7.0 1GB RAM 8 GB RAM 7 Inch With Wi-fi+3G Tablet
                                    </h5>
                                    <h6 className="price">$100</h6>
                                  </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default compareProduct