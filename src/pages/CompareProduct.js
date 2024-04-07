import React, { useEffect } from 'react'
import Meta from '../com/Meta'
import BreadCrumb from '../com/BreadCrumb'
import Color from '../com/Color'
import Container from '../com/Container'
import { useDispatch, useSelector } from 'react-redux';
import { getUserProductWishlist } from '../features/user/userSlice';
import { addToWishlist } from "../features/products/productSlice";

const CompareProduct = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getWishlistFromDb();
    }, [])
    const getWishlistFromDb = () => {
        dispatch(getUserProductWishlist());
    }
    const wishListState = useSelector((state) => state?.auth?.wishlist?.wishlist || []);
    const removeFromWishlist = (id) => {
        dispatch(addToWishlist(id))
        setTimeout(() => {
            dispatch(getUserProductWishlist());
        }, 300);
    }
    const productState = useSelector(state => state.product.singleproduct)
    const props = {
        width: 594,
        height: 600,
        zoomWidth: 600,
        img: productState?.images[0]?.url ? productState?.images[0]?.url : "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
    };
    return (
        <>
            <Meta title={"compare Products"} />
            <BreadCrumb title="compare Products" />
            <Container class1="compare-product-wrapper py-5 home-wapper-2">

                <div className="row">
                    {wishListState && wishListState.length === 0 && <div className='text-center fs-3'>No Data</div>}
                    {wishListState &&
                        wishListState?.map((item, index) => {
                            return (
                                <div className="col-3" key={index}>
                                    <div className="compare-product-card position-relative">
                                        <img onClick={() => { removeFromWishlist(item?._id) }}
                                            src="images/cross.svg"
                                            alt="cross"
                                            className="position-absolute cross img-fluid"
                                        />
                                        <div className="wishlist-card-image bg-white">
                                            <img src={item.images && item.images[0] && item.images[0].url ? item.images[0].url : "images/watch.jpg"}
                                                className="img-fluid d-block mx-auto"
                                                alt="watch"
                                                width={160}
                                            />
                                        </div>

                                        <div className="py-3 px-3">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <h5 className="title">
                                                    {item?.title}
                                                </h5>
                                            </div>


                                            <div>
                                                <div className="product-detail">
                                                    <h5>Price:</h5>
                                                    <h6 className="price">₹{item?.price}</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="product-detail">
                                                    <h5>Brand:</h5>
                                                    <p>{item.brand}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="product-detail">
                                                    <h5>Type:</h5>
                                                    <p>{item.category}</p>
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
                                                    <ul className="colors ps-0">
                                                        <li style={{ backgroundColor: item?.color }} ></li>
                                                    </ul>
                                                    <Color />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="product-detail">
                                                    <h5 dangerouslySetInnerHTML={{
                                                        __html: item?.description
                                                    }}>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="compare-product-details">


                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className="col-3">
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
                    </div> */}

                    {/* <div className="col-3">
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
                        </div> */}
                    {/* </div> */}
                </div>
            </Container>
        </>
    )
}

export default CompareProduct