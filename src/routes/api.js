import express from "express"
import { SocialController } from "@app/http/controllers"

const router = express.Router()

router.get("/social/ig/post/download", SocialController.getMediaFromIG)
router.get("/social/ig/stories/download", SocialController.getMediaFromIGStories)

export default router
