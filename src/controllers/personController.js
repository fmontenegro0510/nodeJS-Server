const personService = require('../services/personService');

const createPerson = async (req, res) => {
  try {
    const { name, age } = req.body;
    const personId = await personService.createPerson(name, age);
    res.status(201).json({ message: 'Person created', personId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPersons = async (req, res) => {
  try {
    const persons = await personService.getAllPersons();
    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await personService.getPersonById(id);
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    await personService.updatePerson(id, name, age);
    res.status(200).json({ message: 'Person updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    await personService.deletePerson(id);
    res.status(200).json({ message: 'Person deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createPerson, getAllPersons, getPersonById, updatePerson, deletePerson };
