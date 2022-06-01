const { Router } = require('express')
const { bookController } = require('../controllers/book.controller')

const router = Router()

router.post('/admin/book', bookController.postBook)
router.get('/admin/book', bookController.getBook)
router.delete('/admin/book/:id', bookController.deleteBook)
router.patch('/admin/book/:id', bookController.patchBook)

module.exports = router