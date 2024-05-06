const express = require(`express`)
const app = express()
const PORT = 2419

const cors = require(`cors`)
app.use(cors())
app.use(express.static(__dirname))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//All Routes
const orderRoute = require(`./routes/order.route`)
const foodRoute = require(`./routes/food.routes`)
const auth = require ('./routes/auth.route')

///define prefix
app.use(`/order`, orderRoute)
app.use(`/food`, foodRoute)
app.use('/auth', auth)

//port
app.listen(PORT, () => {
    console.log(`Server of Ticket Sales run on port ${PORT}`)
})