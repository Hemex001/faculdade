const { body, validationResult } = require('express-validator');
const prisma = require('../models/prismaClient');

const getContacts = async (req, res) => {
  const contacts = await prisma.contact.findMany({
    where: { userId: req.user.userId },
  });
  res.json(contacts);
};

const createContact = [
  body('name').notEmpty().withMessage('Name is required'),
  body('phone').matches(/^[0-9]{10,11}$/).withMessage('Phone must be a valid 10 or 11 digit number'),
  body('email').isEmail().withMessage('Invalid email format'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, email } = req.body;

    const contact = await prisma.contact.create({
      data: {
        name,
        phone,
        email,
        userId: req.user.userId,
      },
    });
    res.status(201).json(contact);
  }
];

const updateContact = [
  body('name').notEmpty().withMessage('Name is required'),
  body('phone').matches(/^[0-9]{10,11}$/).withMessage('Phone must be a valid 10 or 11 digit number'),
  body('email').isEmail().withMessage('Invalid email format'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { name, phone, email } = req.body;

    try {
      const contact = await prisma.contact.update({
        where: { id: Number(id) },
        data: { name, phone, email },
      });
      res.json(contact);
    } catch (error) {
      res.status(404).json({ error: 'Contact not found' });
    }
  }
];

const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.contact.delete({
      where: { id: Number(id) },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(404).json({ error: 'Contact not found' });
  }
};

module.exports = { getContacts, createContact, updateContact, deleteContact };
