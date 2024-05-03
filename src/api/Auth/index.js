// api/Auth/index.js
import axiosConfig from "../axiosConfig";

const BASE = "/user";

const login = async (username, password) => {
  const { data } = await axiosConfig.post(`${BASE}/login`, { username, password });
  return data;
};

const register = async (user) => {
  const { data } = await axiosConfig.post(`${BASE}/create`, user);
  return data;
};

const getUser = async (user_id) => { 
  const { data } = await axiosConfig.get(`${BASE}/${user_id}`); 
  return data;
};

const getUserProfileImage = async (user_id) => {
  const { data } = await axiosConfig.get(`${BASE}/${user_id}/profile`);
  return data.profileImageURL; 
};

export {
  login,
  register,
  getUser,
  getUserProfileImage
};
