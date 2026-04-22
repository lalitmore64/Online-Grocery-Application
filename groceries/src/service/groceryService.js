import axios from "axios";

const API_URL = 'http://localhost:8080/api/grocery';

export const fetchGroceryList = async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.log('Error fetching the item list', error);
            throw error;
        }
    }
    
export const fetchGroceryDetails = async (id) => {
        try {
            const response = await axios.get(API_URL+"/"+id);
            return response.data;
        } catch (error) {
            console.log('Error fetching the item details', error);
            throw error;
        }
    }    