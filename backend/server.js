import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"


// make express app
const app = express()

//use express middleware - cors module
app.use(cors())

//json parser
app.use(express.json())

//initial routes
app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

export default app