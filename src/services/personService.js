const personModel = require('../models/personModel');

const createPerson = async (name, age) => {
  const personId = await personModel.createPerson(name, age);
  return personId;
};

const getAllPersons = async () => {
  const persons = await personModel.getAllPersons();
  return persons;
};

const getPersonById = async (id) => {
  const person = await personModel.getPersonById(id);
  return person;
};

const updatePerson = async (id, name, age) => {
  await personModel.updatePerson(id, name, age);
};

const deletePerson = async (id) => {
  await personModel.deletePerson(id);
};

module.exports = { createPerson, getAllPersons, getPersonById, updatePerson, deletePerson };
