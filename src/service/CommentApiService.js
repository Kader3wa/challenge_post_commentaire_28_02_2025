import axios from "axios";

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/';

const useCommentApi = () => {

    const getCommentsPost = async (postId) => {
        return await axios.get(API_ENDPOINT + 'comments?postId=' + postId);
    }

    const addComment = async (comment) => {
        return await axios.post(API_ENDPOINT + 'comments', comment);
    }

    return {
        getCommentsPost,
        addComment
    };
}

export default useCommentApi;