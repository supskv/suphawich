import Axios from "axios"

/**
 * Get content from url
 * @param {String} url
 */
export const getContentOfUrl = async (url) => {
  try {
    const { data } = await Axios.get(url)
    return data
  } catch (e) {
    return false
  }
}
