import axios from "axios";

const API_ENDPOINT = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

const usePostApi = () => {
    const getPosts = async () => {
        return await axios.get(API_ENDPOINT + 'posts');
    };

    const getPost = async (id) => {
        return await axios.get(API_ENDPOINT + `posts/${id}`);
    }

    const addPost = async (post) => {
        return await axios.post(API_ENDPOINT + 'posts', post);
    }

    return {
        getPosts,
        getPost,
        addPost
    };
};

export default usePostApi;