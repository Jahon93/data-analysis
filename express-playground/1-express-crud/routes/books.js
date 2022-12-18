const express = require('express')
const {Router} = require('express')
const { append } = require('express/lib/response')
const router = Router()
const books = require('../Books')

// Get all books
router.get('/', (req, res) => {
  res.json(books) 
})

// Get one book by Id
router.get('/:id', (req, res) => {
  const isExist = books.some(book => book.id === parseInt(req.params.id))
  if(isExist) {
    res.json(books.filter(book => book.id === parseInt(req.params.id)))
  } else {
    res.status(404).json({message: `Your request id ${req.params.id} not found`})
  }
})

// POST Request
router.post('/', (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 100000),
    name: req.body.name,
    author: req.body.author,
    page: req.body.pages
  }
  if(!req.body.name || !req.body.author || !req.body.name) {
    return res.status(400).json({message: 'Enter all data'})
  } else {
    books.push(newBook)
    res.json(books)
  }
})

// Put Request by Id
router.put('/:id', (req, res) => {
  const isExist = books.some(book => book.id === parseInt(req.params.id))
  if(isExist) {
    const updatedBook = req.body
    books.forEach(book => {
      if(book.id === parseInt(req.params.id)) {
        book.name = updatedBook.name ? updatedBook.name : book.name
        book.author = updatedBook.author ? updatedBook.author : book.author
        book.page = updatedBook.page ? updatedBook.page : book.page
        res.status(200).json({message: 'Book updated', book})
      }
    })
  } else {
    res.status(404).json({message: `Your request id ${req.params.id} not found`})
  }
})

// Delete Request
router.delete('/:id', (req, res) => {
  const isExist = books.some(book => book.id === parseInt(req.params.id))
  if(isExist) {
    res.json({
      message: 'Book deleted',
      books: books.filter(book => book.id !== parseInt(req.params.id))
    })
  } else {
    res.status(404).json({message: `Your request id ${req.params.id} not found`})
  }
})

module.exports = router