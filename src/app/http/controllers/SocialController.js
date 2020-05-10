import { SocialRepo } from "@app/repositories"
export const getMediaFromIG = async (req, res) => {
  const media = await SocialRepo.getMediaFromIG(req.query.q)

  if (media) {
    res.send({ media }).end()
  }

  res.status(400).end()
}

export const getMediaFromIGStories = async (req, res) => {
  const media = await SocialRepo.getMediaFromIGStories(req.query.q)

  if (media) {
    res.send({ media }).end()
  }

  res.status(400).end()
}
