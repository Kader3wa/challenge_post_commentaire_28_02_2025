import axios from "axios";

const API_ENDPOINT = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

const useUserApi = () => {

    const getUser = async (id) => {
        return await axios.get(API_ENDPOINT + `users/${id}`);
    }

    return {
        getUser
    };
}

export default useUserApi;