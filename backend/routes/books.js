const router = require('express').Router();
let Book = require('../models/books.model.js');

// handles http get request
router.route('/').get((req, res) => {
    // mongoose method, get all books and return in json  
    Book.find()
        .then(book => res.json(book))
        .catch(err => res.status(400).json('Error: ' + err));
});

// handles http get request
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const isbn = Number(req.body.isbn);
    const published_date = Date.parse(req.body.published_date);

    const newBook = new Book({
        title,
        author,
        isbn,
        published_date
    });
    
    newBook.save()
        .then(() => res.json('Book Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(() => res.json('Book has been deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Book.findById(req.params.id)
        .then(book => {
            book.title = req.body.title;
            book.author = req.body.author;
            book.isbn = Number(req.body.isbn);
            book.published_date = Date.parse(req.body.published_date);
        
            book.save()
                .then(() => res.json('Book updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;