const router = require('express').Router();
let Author = require('../models/authors.model.js');

router.route('/').get((req, res) => {
    Author.find()
        .then(author => res.json(author))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const author = req.body.author;
    const newAuthor = new Author({author});
    newAuthor.save()
        .then(() => res.json('Author Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(() => res.json('Author has been deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Author.findById(req.params.id)
        .then(author => {
            author.author = req.body.author;
        
            author.save()
                .then(() => res.json('Author updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;