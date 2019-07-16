const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const Author = require('../models/author')


// All books Route
router.get('/', async (req, res) => {
  res.send('All Books');
})

// New Book Route
router.get('/new', async (req, res) => {
  renderNewPage(res, new Book())
})

// Create book Route
router.post('/', async (req, res) => {
  res.send('Create Books');
})

async function renderNewPage(res, book, hasError = false) {
  try {
    const authors = await Author.find({})
    const params = {
      authors: authors,
      book: book
    }

    if (hasError) {
      params.errorMessage = 'Error Creating Book' 
    }

    res.render('books/new', params)
  } 
  catch {
    res.redirect('/books')
  }
}


module.exports = router