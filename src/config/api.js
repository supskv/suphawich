import "dotenv/config"

export default {
  social: {
    ig: {
      stories: {
        fetch: {
          format: {
            protocol: "https",
            hostname: "www.instagram.com",
            pathname: "/graphql/query",
            query: {
              query_hash: "f5dc1457da7a4d3f88762dae127e0238",
              variables: {
                reel_ids: [],
                tag_names: [],
                location_ids: [],
                highlight_reel_ids: [],
                precomposed_overlay: false,
                show_story_viewer_list: true,
                story_viewer_fetch_count: 50,
                story_viewer_cursor: "",
                stories_video_dash_manifest: false,
              },
            },
          },
        },
      },
    },
  },
}
