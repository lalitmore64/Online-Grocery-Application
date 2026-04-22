import axios from "axios";

const API_URL = 'http://localhost:8080/api/grocery';

export const addGrocery = async (groceryData, image) => {
    const formData = new FormData();
    formData.append('grocery', JSON.stringify(groceryData));
    formData.append('file', image);

    try {
        await axios.post(API_URL, formData, {headers: {"Content-Type": "multipart/form-data"}});
    } catch (error) {
        console.log('Error', error);
        throw error;
    }
}

export const getGroceryList = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Error fetching the list.', error);
        throw error;
    }
}

export const deleteGrocery = async (groceryId) => {
    try {
        const response = await axios.delete(API_URL+"/"+groceryId);
        return response.status === 204;
    } catch (error) {
        console.log('Error while deleting the item.');
        throw error;
    }
}