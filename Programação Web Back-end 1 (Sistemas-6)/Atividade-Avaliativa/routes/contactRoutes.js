const express = require('express');
const { getContacts, createContact, updateContact, deleteContact } = require('../controllers/contactController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/contatos', authenticateToken, getContacts);
router.post('/contato', authenticateToken, createContact);
router.put('/contato/:id', authenticateToken, updateContact);
router.delete('/contato/:id', authenticateToken, deleteContact);

module.exports = router;
