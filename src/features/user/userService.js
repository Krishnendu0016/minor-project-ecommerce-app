import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";
const register = async (userData) => {
    console.log(userData)
    const response = await axios.post(`${base_url}user/register`, userData);
    if (response.data) {
        return response.data;
    }
}

const login = async (userData) => {
    console.log(userData)
    const response = await axios.post(`${base_url}user/login`, userData);
    if (response.data) {
        localStorage.setItem("customer", JSON.stringify(response.data));
        return response.data;
    }
}

const getUserWishlist = async () => {
    const response = await axios.get(`${base_url}user/wishlist`, config);
    if (response.data) {
        return response.data;
    }
}
const addToCart = async (cartData) => {
    const response = await axios.post(`${base_url}user/cart`, cartData, config);
    if (response.data) {
        return response.data;
    }

}
const getCart = async (cartData) => {
    const response = await axios.get(`${base_url}user/cart`, config);
    if (response.data) {
        return response.data;
    }

}
const removeProductFromCart = async (cartItemId) => {
    const response = await axios.delete(`${base_url}user/delete-product-cart/${cartItemId}`, config);
    if (response.data) {
        return response.data;
    }
}
const updateProductFromCart = async (cartDetail) => {
    console.log(cartDetail);
    const response = await axios.delete(`${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`, config);
    if (response.data) {
        return response.data;
    }
}

const createOrder=async(orderDetail)=>{
const response = await axios.post(`${base_url}user/cart/create-order`,orderDetail, config);
    if (response.data) {
        return response.data;
    }
}

export const authService = {
    register,
    login,
    getUserWishlist,
    addToCart,
    getCart,
    removeProductFromCart,
    updateProductFromCart,
    createOrder,
} 
