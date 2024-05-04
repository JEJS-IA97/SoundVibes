import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * Sets in a Cookie linked to a key the value passed by parameter.
 * @param {string} key - Key to which the value passed by parameter can be accessed.
 * @param {string} value - Value stored in the Cookie linked to the indicated key.
 */
export const setCookie = async (key, value) => {
  await AsyncStorage.setItem(key, value, { expires: 30 });
};

/**
 * Gets the value of a Cookie linked to the given key parameter.
 * @param {string} key - Link to the Cookie containing the value to be obtained
 * @returns {string | null} - If the Cookie linked to the key exists, it returns its string value, otherwise it returns null.
 */
export const getCookie = async (key) => {
  return await AsyncStorage.getItem(key) ?? null;
};

/**
 * Removes the value of the Cookie linked to the key passed by parameter.
 * @param {string} key - Link to the Cookie you wish to remove its value.
 */
export const removeCookie = async (key) => {
  await AsyncStorage.removeItem(key);
};