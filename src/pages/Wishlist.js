import React, { useEffect } from 'react'
import Meta from '../com/Meta'
import BreadCrumb from '../com/BreadCrumb'
import Container from '../com/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProductWishlist } from '../features/user/userSlice';
const Wishlist = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        getWishlistFromDb();
    },[])
    const getWishlistFromDb=()=>{
        dispatch(getUserProductWishlist());
    }
    const wishListState=useSelector((state)=>state.auth?.wishlist?.wishlist)

    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <Container class1="wishlist-wrapper home-wapper-2 py-5">
                <div className="row">
                    {
                        wishListState?.map((item,index)=>{
                            return(
                                <div className="col-3" key={index}>
                                <div className="wishlist-card position-relative">
                                    <img src="images/cross.svg"
                                        alt="cross"
                                        className="position-absolute cross img-fluid"
                                    />
                                    <div className="wishlist-card-image">
                                        <img src={item?.images[0].url?item?.images[0].url:"images/watch.jpg"}
                                            className="img-fluid w-100"
                                            alt="watch" />
                                    </div>
                                    <div className="py-3 px-3">
                                        <h5 className="title">
                                            {item?.title}
                                            </h5>
                                        <h6 className="price">${item?.price}</h6>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                   
                   


                </div>
            </Container>
        </>
    )
}

export default Wishlist


 
