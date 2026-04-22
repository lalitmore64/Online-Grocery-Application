import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { fetchGroceryList } from "../service/groceryService";
import { addToCart, getCartData, removeQtyFromCart } from "../service/cartService";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

    const [groceryList, setGroceryList] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const increaseQty = async (groceryId) => {
        setQuantities((prev) => ({...prev, [groceryId]: (prev[groceryId] || 0) + 1}));
        await addToCart(groceryId, token);
    };

    const decreaseQty = async(groceryId) => {
        setQuantities((prev) => ({...prev, [groceryId]: prev[groceryId] > 0 ? prev[groceryId] - 1 : 0}));
        await removeQtyFromCart(groceryId, token);
    };

    const removeFromCart = (groceryId) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            delete updatedQuantities[groceryId];
            return updatedQuantities;
        });
    };

    const loadCartData = async (token) => {
        const items = await getCartData(token);
        if (items) setQuantities(items);
    };

    const contextValue = {
        groceryList,
        increaseQty,
        decreaseQty,
        quantities,
        removeFromCart,
        token,
        setToken,
        setQuantities,
        loadCartData,
    };

    useEffect(() => {
        async function loadData() {
            const data = await fetchGroceryList();
            setGroceryList(data);
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}