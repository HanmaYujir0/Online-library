const { Router } = require('express')
const { reviewController } = require('../controllers/review.controller');

const router = Router();

router.post('/admin/review', reviewController.postReview)
router.delete('/admin/review/:id', reviewController.deleteReview)

module.exports = router