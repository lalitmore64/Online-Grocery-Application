import axios from "axios";

const API_URL = "http://localhost:8080/api/cart";

export const addToCart = async(groceryId, token) => {
    try {
        await axios.post(API_URL, {groceryId}, {headers: {Authorization: `Bearer ${token}`}});
    } catch (error) {
        console.error("Error while adding to cart.", error);
    }
}

export const removeQtyFromCart = async(groceryId, token) => {
    try {
        await axios.post(API_URL+"/remove", {groceryId}, {headers: {Authorization: `Bearer ${token}`}});
    } catch (error) {
        console.error("Error while removing from cart", error);
    }
}

export const getCartData = async(token) => {
    try {
        const response = await axios.get(API_URL, {headers: {Authorization: `Bearer ${token}`}});
        return response.data.items;
    } catch (error) {
        console.error("Error fetchig the cart data.", error);
        return {};
    }
}