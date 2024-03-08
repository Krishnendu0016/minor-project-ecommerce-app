import React from 'react'
import Meta from '../com/Meta'
import BreadCrumb from '../com/BreadCrumb'
import ProductCard from '../com/ProductCard'
const SingleProduct = () => {
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <section className="popular-wrapper py-5 home-wapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Collection</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct