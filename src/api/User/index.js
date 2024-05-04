import axiosConfig from "../axiosConfig";
import { getKey } from "../jwt";

const BASE = "/user";

const updateUserImageProfile = async (image) => {
    axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${await getKey()}`;
    const { data } = await axiosConfig.put(`${BASE}/update/profile`, { imageUrl: image });
    return data;
};

export {
    updateUserImageProfile,
};
