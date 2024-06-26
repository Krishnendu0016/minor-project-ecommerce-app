import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom"
import { BiArrowBack } from 'react-icons/bi'
import watch from "../images/watch.jpg"
import Container from '../com/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { config } from "../utils/axiosConfig";
import { createAnOrder } from '../features/user/userSlice'
import MapComponent from './Map'

const shippingSchema = yup.object({
    firstName: yup.string().required("First Name is Required"),
    lastName: yup.string().required("Last Name is Required"),
    address: yup.string().required("Address Details are Required"),
    state: yup.string().required("State is Required"),
    city: yup.string().required("City is Required"),
    country: yup.string().required("Country is Required"),
    pincode: yup.number().required("Pincode is Required"),
});

const Checkout = () => {
    const dispatch = useDispatch()
    const cartState = useSelector(state => state.auth.cartProducts)
    const [totalAmount, setTotalAmount] = useState(null)
    const [cartProductState, setCartProductState] = useState([])
    let shippingInfo = {}
    let paymentInfo = {}
    useEffect(() => {
        let sum = 0;
        for (let index = 0; cartState && index < cartState.length; index++) {
            sum = sum + (Number(cartState[index].quantity) * cartState[index].price)
        }
        setTotalAmount(sum)
    }, [cartState])

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            address: "",
            state: "",
            city: "",
            country: "",
            pincode: "",
            other: ""
        },
        validationSchema: shippingSchema,
        onSubmit: values => {
            shippingInfo = values
            setTimeout(() => {
                checkoutHandler();
            }, 300)
        },
    });

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }


    useEffect(() => {
        let items = []
        if (cartState) {
            for (let index = 0; index < cartState.length; index++) {
                items.push({
                    product: cartState[index].productId._id,
                    quantity: cartState[index].quantity,
                    color: cartState[index].color._id,
                    price: cartState[index].price
                })
            }
            setCartProductState(items);
        } else {
            console.log('cartState is undefined');
        }
    }, [])

    const checkoutHandler = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if (!res) {
            alert("Razorpay SDK failed to load")
            return;
        }
        try {
            const result = await axios.post("http://localhost:5000/api/user/order/checkout", { amount: (totalAmount + 100) * 100 }, config)
            if (!result) {
                alert("Something went wrong")
                return;
            }

            const { amount, id, currency } = result.data.order;
            const options = {
                key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
                amount: amount.toString(),
                currency: currency,
                name: "Shoppers",
                description: "Test Transaction",
                order_id: id,
                handler: async function (response) {
                    const data = {
                        orderCreationId: id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                    };
                    const result = await axios.post("http://localhost:5000/api/user/order/paymentVerification", data, config);
                    paymentInfo = {
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                    }
                    dispatch(createAnOrder({ totalPrice: totalAmount, totalPriceAfterDiscount: totalAmount, orderItems: cartProductState, paymentInfo, shippingInfo }))

                },
                prefill: {
                    name: "Shoppers",
                    email: "shoppers@example.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "Shoppers Office",
                },
                theme: {
                    color: "#61dafb",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error(error.response ? error.response.data : error);
        }
    }
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    return (
        <Container class1="checkout-wrapper py-5 home-wapper-2">
            <div className="row">
                <div className="col-7">
                    <div className="checkout-left-data">
                        <h3 className="website-name">5-friends Cornor</h3>
                        <nav style={{ "--bs-breadcrumb-divider": '>' }}
                            aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/cart" className="text-dark total-price">Cart</Link>
                                </li>
                                &nbsp; /&nbsp;
                                <li className="breadcrumb-item total-price active" aria-current="page">
                                    Information
                                </li>
                                &nbsp; /<li className="breadcrumb-item total-price active">
                                    Shipping
                                </li>
                                &nbsp; /
                                <li className="breadcrumb-item total-price active" aria-current="page">
                                    Payment
                                </li>
                            </ol>
                        </nav>
                        <h4 className="title total">Contact Information</h4>
                        <p className="user-details total">
                            Rishikesh Kumar (2105209@kiit.ac.in)
                        </p>
                        <h4 className="mb-3">Shipping Address</h4>

                        <form onSubmit={formik.handleSubmit}
                            action=""
                            className="d-flex gap-15 flex-wrap justify-content-between"
                        >

                            <div className="flex-grow-1">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="form-control"
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange("firstName")}
                                    onBlur={formik.handleBlur("firstName")}
                                />
                                <div className="error ms-2 my-1">
                                    {
                                        formik.touched.firstName && formik.errors.firstName
                                    }
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="form-control"
                                    name="lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange("lastName")}
                                    onBlur={formik.handleBlur("lastName")}
                                />
                                <div className="error ms-2 my-1">
                                    {
                                        formik.touched.lastName && formik.errors.lastName
                                    }
                                </div>
                            </div>
                            <div className="w-100">
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="form-control"
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange("address")}
                                    onBlur={formik.handleBlur("address")}
                                />
                                <div className="error ms-2 my-1">
                                    {
                                        formik.touched.address && formik.errors.address
                                    }
                                </div>
                            </div>
                            <div className="w-100">
                                <input
                                    type="text"
                                    placeholder="Apartment, Suite, etc"
                                    className="form-control"
                                    name="other"
                                    value={formik.values.other}
                                    onChange={formik.handleChange("other")}
                                    onBlur={formik.handleBlur("other")}
                                />
                                <div className="error ms-2 my-1">
                                    {
                                        formik.touched.other && formik.errors.other
                                    }
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <select
                                    name="country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange("country")}
                                    onBlur={formik.handleBlur("country")}
                                    className="form-control form-select"
                                    id="">
                                    <option value="" selected disabled>
                                        Select Country
                                    </option>
                                    <option value="India">
                                        India
                                    </option>
                                </select>
                                <div className="error ms-2 my-1">
                                    {
                                        formik.touched.country && formik.errors.country
                                    }
                                </div>
                            </div>

                            <div className="flex-grow-1">
                                <select
                                    name="state"
                                    value={formik.values.state}
                                    onChange={formik.handleChange("state")}
                                    onBlur={formik.handleBlur("state")}
                                    className="form-control form-select"
                                    id="">
                                    <option value="" selected disabled>
                                        Select State
                                    </option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>

                                </select>


                                <div className="error ms-2 my-1">
                                    {
                                        formik.touched.state && formik.errors.state
                                    }
                                </div>
                            </div>




                            <div className="flex-grow-1" >
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="form-control"
                                    name="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange("city")}
                                    onBlur={formik.handleBlur("city")}
                                />
                                <div className="error ms-2 my-1">
                                    {
                                        formik.touched.city && formik.errors.city
                                    }
                                </div>
                            </div>


                            <div className="flex-grow-1">
                                <select
                                    name="mode"
                                    value={formik.values.mode}
                                    onChange={formik.handleChange("mode")}
                                    onBlur={formik.handleBlur("mode")}
                                    className="form-control form-select"
                                    id="">
                                    <option value="" selected >
                                        Delivery to my address
                                    </option>
                                    {/* <option value="Delivery">Delivery to my address</option> */}
                                    <option value="Pickup">Pick up from the store</option>

                                    <div className="error ms-2 my-1">
                                        {
                                            formik.touched.mode && formik.errors.mode
                                        }
                                    </div>
                                </select>
                            </div>
                            <div className="flex-grow-1">
                                <input
                                    type="text"
                                    placeholder="Zipcode"
                                    className="form-control"
                                    name="pincode"
                                    value={formik.values.pincode}
                                    onChange={formik.handleChange("pincode")}
                                    onBlur={formik.handleBlur("pincode")}
                                />
                                <div className="error ms-2 my-1">
                                    {
                                        formik.touched.pincode && formik.errors.pincode
                                    }
                                </div>
                            </div>
                            <div className="w-100">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to="/cart" className="text-darker">
                                        <BiArrowBack className="me-2" />
                                        Return to Cart
                                    </Link>
                                    <Link to="/cart" className="button">Continue to Shopping</Link>
                                    <button className="button" type="submit" >Place Order</button>
                                </div>

                            </div>

                        </form>

                    </div>
                </div>

                <div className="col-5">
                    <div className="border-bottom py-4">
                        {
                            cartState && cartState?.map((item, index) => {
                                return (<div key={index} className="d-flex gap-10 mb-2 align-items-center">
                                    <div className="w-75 d-flex gap-10">
                                        <div className="w-25 position-relative">
                                            <span
                                                style={{ top: "-10px", right: "2px" }}
                                                className="badge bg-secondary text-white rounded-cicle p-2 position-absolute"
                                            >
                                                {item?.quantity}
                                            </span>
                                            <img width={100} height={100} src={item?.productId?.images[0]?.url} alt="product" />
                                        </div>
                                        <div>
                                            <h5 className="total-price">{item?.productId?.title}</h5>
                                            <p className='total-price'>{item?.color?.title}</p>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className='total'>₹{item?.price * item?.quantity}</h5>
                                    </div>
                                </div>)
                            })
                        }

                    </div>
                    <div className-="border-bottom py-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className='total'>Subtotal</p>
                            <p className='total-price'>₹{totalAmount ? totalAmount : "0"}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className='mb-0 total'>Shipping</p>
                            <p className='mb-0 total-price'>₹100</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>₹{totalAmount ? totalAmount + 100 : "0"}</h5>
                    </div>
                </div>
            </div>
            <Container class1="contact-wrapper py-5 home-wapper-2">
                <div className="row">
                    <div className="col-12 ">
                    {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29926.107061537532!2d85.80364222784135!3d20.35139139254361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190912b69339ab%3A0xa11e7186a04f1474!2sPatia%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1709872271022!5m2!1sen!2sin"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239486.66728487329!2d85.65563903334204!3d20.30112904837954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1711974785205!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
                
            </iframe>
            {/* <MapComponent/> */}
                    </div>
                </div>
            </Container>
        </Container>



    )
}

export default Checkout



 



