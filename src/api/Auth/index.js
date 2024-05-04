import axiosConfig from "../axiosConfig";
import { getKey } from "../jwt";

const BASE = "/user";

const loginUser = async (username, password) => {
  const { data } = await axiosConfig.post(`${BASE}/login`, { username, password });
  return data;
};

const getUserLogged = async () => {
  const response = await axiosConfig.get(`${BASE}`);
  return response;
}

const register = async (user) => {
  const { data } = await axiosConfig.post(`${BASE}/create`, user);
  return data;
};

const getUser = async (user_id) => {
  const { data } = await axiosConfig.get(`${BASE}/${user_id}`);
  return data;
};

const getUserProfileImage = async () => {
  axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${await getKey()}`;
  const { data } = await axiosConfig.get(`${BASE}/profile`);
  return data;
};

export {
  loginUser,
  register,
  getUser,
  getUserProfileImage,
  getUserLogged,
};
