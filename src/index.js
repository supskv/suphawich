import "dotenv/config"
import cors from "cors"
import path from "path"
import { ApiRouter, WebRouter } from "@routes"
import express from "express"
import { App as AppConfig } from "@config"

const app = express()

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))

// Router
app.use("/", WebRouter)
app.use("/api", ApiRouter)

// Start Server
app.listen(AppConfig.port, () =>
  console.log("Express server listening on: " + AppConfig.appUrl)
)
