const Genre = require('../models/Genre.model');

module.exports.genreController = ({
    postGenre: (req,res) => {
        Genre.create({
            name: req.body.name,
            description: req.body.description,
        })
        .then(() => {
            res.json('Жанр добавлен')
        })
        .catch((err) => {
            res.json('Ошибка при добавлении жанра')
        })
    },
    deleteGenre: (req,res) => {
        Genre.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json('Жанр удален')
        })
        .catch((err) => {
            res.json('Ошибка при удалении жанра ')
        })
    },
    getGenreById: (req, res) => {
        Genre.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json('Ошибка при выводе жанра')
        })
    },
    getGenre: (req, res) => {
        Genre.find()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json('Ошибка при выводе жанров')
        })
    },
    patchGenre: (req, res) => {
        Genre.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            description: req.body.description,
        })
        .then(() => {
            res.json('Жанр изменен')
        })
        .catch((err) => {
            res.json("Ошибка при изменении жанра")
        })
    },
})