import { HttpService } from "@app/services"

/**
 * Main method for get media from Instagram link
 * @param {String} q
 */
export const getMediaFromIG = async (q) => {
  const url = convertUrlToGraphql(q)
  const content = await HttpService.getContentOfUrl(url)

  return getMedia(content)
}

/**
 * Get graphql from Instagram link
 * @param {String} q
 */
const convertUrlToGraphql = (q) => q.replace(/(\?.*|$)/, "?__a=1")

/**
 * Get media from Graphql
 * @param {Object} content
 */
const getMedia = (content) => {
  try {
    const { edges } = content.graphql.shortcode_media.edge_sidecar_to_children

    return edges.map((e) => mapMedia(e))
  } catch (e) {
    return false
  }
}

/**
 * Mapping media
 * @param {Object} edge
 */
const mapMedia = ({ node }) => {
  try {
    if (node.is_video) return node.video_url
    const { src } = [...node.display_resources].pop()

    return src
  } catch (e) {
    return false
  }
}
