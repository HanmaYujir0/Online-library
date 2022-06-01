const Book = require('../models/Book.model');

module.exports.bookController = {
    postBook: (req,res) => {
        Book.create({
            name: req.body.name,
            genre: req.body.genre,
        })
        .then(() => {
            res.json('Книга добавлена')
        })
        .catch((err) => {
            res.json('Ошибка при добавлении книги')
        })
    },
    deleteBook: (req,res) => {
        Book.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json('Книга удалена')
        })
        .catch((err) => {
            res.json('Ошибка при удалении книги ')
        })
    },
    getBookById: (req, res) => {
        Book.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json('Ошибка при выводе книги')
        })
    },
    getBook: (req, res) => {
        Book.find()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json('Ошибка при выводе книг')
        })
    },
    patchBook: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            genre: req.body.genre,
        })
        .then(() => {
            res.json('Книга изменена')
        })
        .catch((err) => {
            res.json("Ошибка при изменении книги")
        })
    },
}