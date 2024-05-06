import axiosConfig from "../axiosConfig";
import { getKey } from "../jwt";

const BASE = "/user";

const updateUserImageProfile = async (image) => {
    axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${await getKey()}`;
    const { data } = await axiosConfig.put(`${BASE}/update/profile`, { imageUrl: image });
    return data;
};

const getUser = async (user_id) => {
    axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${await getKey()}`;
    const { data } = await axiosConfig.get(`${BASE}/${user_id}`);
    return data;
};

const updateUser = async (user_id, user) => {
    axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${await getKey()}`;
    const { data } = await axiosConfig.put(`${BASE}/${user_id}`, user);
    return data;
};

const changePassword = async (user) => {
    axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${await getKey()}`;
    const { data } = await axiosConfig.put(`${BASE}/updateUser/${user}`);
    return data;
};



export {
    updateUserImageProfile,
    getUser,
    updateUser,
    changePassword
};
