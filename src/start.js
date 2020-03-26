const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const port = process.env.PORT || 3033

const app = express()

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
