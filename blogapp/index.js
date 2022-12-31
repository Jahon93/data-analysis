const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hi')
})

app.get('/courses', (req, res) => {
  res.send('courses on ')
})

app.listen(3000, () => console.log('port runnign on running'))
