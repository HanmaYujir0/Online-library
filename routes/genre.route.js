const { Router } = require('express')
const { genreController } = require('../controllers/genre.controller');

const router = Router();

router.post('/admin/genre', genreController.postGenre)
router.get('/admin/genre', genreController.getGenre)
router.delete('/admin/genre/:id', genreController.deleteGenre)
router.patch('/admin/genre/:id', genreController.patchGenre)

module.exports = router