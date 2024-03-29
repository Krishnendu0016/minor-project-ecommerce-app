import React from 'react'
import Meta from '../com/Meta'
import BreadCrumb from '../com/BreadCrumb'
import Color from '../com/Color'
import Container from '../com/Container'
const compareProduct = () => {
    return (
        <>
            <Meta title={"compare Products"} />
            <BreadCrumb title="compare Products" />
            <Container class1="compare-product-wrapper py-5 home-wapper-2">
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
                                <h6 className="price" mb-3 mt-3>$100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Havels</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Watch</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                </div>
                                <div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                <h6 className="price" mb-3 mt-3>$100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Havels</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Watch</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                </div>
                                <div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default compareProduct