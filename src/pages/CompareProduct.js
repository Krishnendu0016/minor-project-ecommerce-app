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
                                  <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
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