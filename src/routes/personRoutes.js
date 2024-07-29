const express = require('express');
const personController = require('../controllers/personController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/persons', authMiddleware, personController.createPerson);
router.get('/persons', authMiddleware, personController.getAllPersons);
router.get('/persons/:id', authMiddleware, personController.getPersonById);
router.put('/persons/:id', authMiddleware, personController.updatePerson);
router.delete('/persons/:id', authMiddleware, personController.deletePerson);

module.exports = router;
