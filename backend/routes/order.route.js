const express = require(`express`)
const app = express()
app.use(express.json())
const orderController = require(`../controllers/order.controller`)

app.get("/:key", orderController.findAllOrder)
app.post("/", orderController.addOrder)

module.exports = app