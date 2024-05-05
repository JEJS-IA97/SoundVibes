import axiosConfig from "../axiosConfig";
import { getKey } from "../jwt";

const BASE = "/post";

const updatePostImage = async (image) => {
    axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${await getKey()}`;
    const { data } = await axiosConfig.put(`${BASE}/update/image/:id`, { imageUrl: image });
    return data;
};

const create = async (post) => {
    axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${await getKey()}`;
    const { data } = await axiosConfig.post(`${BASE}/create`, post);
    return data;
};

const getPostById = async (post_id) => {
    axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${await getKey()}`;
    const { data } = await axiosConfig.get(`${BASE}/${post_id}`);
    return data;
};

const getAllPosts = async () => {
    axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${await getKey()}`;
    const { data } = await axiosConfig.get(`${BASE}/all`);
    return data;
};

export {
    updatePostImage,
    create,
    getPostById,
    getAllPosts
};
