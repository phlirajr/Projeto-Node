const express = require ('express');


const listController = require('./controllers/listController');
const listMiddleware = require('./middlewares/listMiddleware')

const router = express.Router();


router.get ('/movies', listController.getAll);
router.post ('/movies',listMiddleware.checkBody , listController.addMovie);
router.delete('/movies/:id', listController.deleteMovie);
router.put('/movies/:id',listMiddleware.checkBody, listController.updateMovie);

module.exports = router;