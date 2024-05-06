import axiosConfig from "../axiosConfig";
import { getKey } from "../jwt";

const BASE = "/comment";

const createComment = async (comment) => {
    axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${await getKey()}`;
    const { data } = await axiosConfig.post(`${BASE}/create`, comment);
    return data;
};

const getCommentByPost = async (post_id) => {
    axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${await getKey()}`;
    const { data } = await axiosConfig.get(`${BASE}/getPost/${post_id}`);
    return data;
};


export {
    createComment,
    getCommentByPost
};