const { Router } = require("express");
const router = Router();

router.use(require("./book.route"));
router.use(require("./client.route"));
router.use(require("./genre.route"));
router.use(require("./review.route"));

module.exports = router;