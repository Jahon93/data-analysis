const express = require('express')
const app = express()

const courses = [
  { id: 1, name: 'JavaScript'},
  { id: 2, name: 'Python'},
  { id: 3, name: 'Golang'},
]

app.get('/', (req, res) => {
  res.send("Hi")
})

app.get('/api/courses', (req, res) => {
  res.send([1,2,3])
})

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id))
  if(!course) {
    res.status(404).json({message: 'Course with the given id was not found'})
  } else {
    res.send(course)
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))