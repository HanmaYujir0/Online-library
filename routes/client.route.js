const { Router } = require('express')
const { clientController } = require('../controllers/client.controller')

const router = Router();

router.post('/client', clientController.postClient)
router.delete('/client/:id', clientController.deleteClient)
router.get('/client', clientController.getClient)
router.get('/client/:id', clientController.getClientById)
router.patch('/client/:id', clientController.patchClient)
router.patch('/client/:id/bookRent/:bookId', clientController.bookRent)
router.patch('/client/:id/bookreturn', clientController.returnBook)
router.patch('/admin/client/:id/book', clientController.bookBlock)

module.exports = router;