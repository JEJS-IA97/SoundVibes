import axiosConfig from "./axiosConfig";
import { getCookie, removeCookie, setCookie } from "../utils/cookieStorage";

const KEY = "sound_vibe_key";

/**
 * Sets the authorization header if a token value is passed. 
 * If nothing is passed, the authorization header is removed.
 * @param {string | null} token - JWT value.
 */
export const setSession = async (token = null) => {
  try {
    if (token) {
      await setKey(token); // Wait for token to be stored
      axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      await removeKey();
      delete axiosConfig.defaults.headers.common["Authorization"];
    }
  } catch (error) {
    console.error("Set session error:", error);
    throw Error(error);
  }
};

/**
 * Stores in a Cookie the jwt value.
 * @param {string} value - JWT value.
 */
export const setKey = async (value) => await setCookie(KEY, value);

/**
 * Gets the jwt key from a Cookie.
 * @returns {string | null} - JWT value or null if no JWT value exists.
 */
export const getKey = async () => await getCookie(KEY);

/**
 * Removes the JWT value from the Cookies.
 */
export const removeKey = async () => await removeCookie(KEY);