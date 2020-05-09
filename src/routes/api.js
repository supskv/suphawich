import express from "express"
import { SocialController } from "@app/http/controllers"

const router = express.Router()

router.get("/social/ig/post/download", SocialController.getMediaFromIG)

export default router
