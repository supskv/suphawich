import url from "url"
import { Api as config } from "@config"
import { HttpService } from "@app/services"

/**
 * Main method for get media from Instagram link
 * @param {String} q
 */
export const getMediaFromIG = async (q) => {
  const url = replaceQueryString(q, "?__a=1")
  const content = await HttpService.getContentOfUrl(url)

  return getMediaPost(content)
}

/**
 * Main method for get media from Instagram stories link
 * @param {String} q
 */
export const getMediaFromIGStories = async (q) => {
  const url = replaceQueryString(q, "?__a=1")
  const content = await HttpService.getContentOfUrl(url)

  return await getMediaStories(content)
}

/**
 * Get graphql from Instagram link
 * @param {String} q
 */
const replaceQueryString = (q, text = "") => q.replace(/(\?.*|$)/, text)

/**
 * Get media from Graphql post
 * @param {Object} content
 */
const getMediaPost = (content) => {
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

/**
 * Get media from stories
 * @param {Object} content
 */
const getMediaStories = async (content) => {
  try {
    const id = parseInt(content.user.id)
    let { format } = config.social.ig.stories.fetch
    let { variables } = format.query
    variables.reel_ids.push(id)
    variables = JSON.stringify(variables)
    format.query.variables = variables

    return url.format(format)
  } catch (e) {
    return false
  }
}
