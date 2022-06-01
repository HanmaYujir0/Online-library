const Review = require('../models/Review.model');

module.exports.reviewController = ({
    postReview: (req, res) => {
        Review.create({
            text: req.body.text,
            $push: {
                clientName: req.body.clientName,
                book: req.body.book,
            }
            
        })
        .then(() => {
            res.json('Отзыв добавлен')
        })
        .catch((err) => {
            res.json('Ошибка при добавлении отзыва')
        })
    },
    deleteReview: (req, res) => {
        Review.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json('Отзыв удален')
        })
        .catch((err) => {
            res.json('Ошибка при удалении отзыва')
        })
    },
    patchReview: (req, res) => {
        Review.findByIdAndUpdate(req.params.id, {
            text: req.body.text,
            $push: {
                clientName: req.body.clientName,
                book: req.body.book,
            }
        })
        .then(() => {
            res.json('Отзыв изменен')
        })
        .catch((err) => {
            res.json('Ошибка при изменении отзыва')
        })
    },
    getReview: (req, res) => {
        Review.find()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json('Ошибка при выводе отзывов')
        })
    }
})