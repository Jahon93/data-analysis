const express = require('express')
const path = require('path')
const logger = require('./middleswares/logger')

const app = express()

// Body parser
app.use(express.json()) // changes incoming data into json
app.use(express.urlencoded({extended: false})) // reads form data

app.use(logger)

// Books API Endpoints
app.use('/api/books', require('./routes/books'))

app.use(express.static(path.join(__dirname, 'public'))) // sending static file 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')) // sending html file
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))