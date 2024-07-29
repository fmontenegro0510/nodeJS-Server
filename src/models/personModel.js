const db = require('./db');

const createPerson = async (name, age) => {
  const [result] = await db.execute('INSERT INTO persons (name, age) VALUES (?, ?)', [name, age]);
  return result.insertId;
};

const getAllPersons = async () => {
  const [rows] = await db.execute('SELECT * FROM persons');
  return rows;
};

const getPersonById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM persons WHERE id = ?', [id]);
  return rows[0];
};

const updatePerson = async (id, name, age) => {
  await db.execute('UPDATE persons SET name = ?, age = ? WHERE id = ?', [name, age, id]);
};

const deletePerson = async (id) => {
  await db.execute('DELETE FROM persons WHERE id = ?', [id]);
};

module.exports = { createPerson, getAllPersons, getPersonById, updatePerson, deletePerson };
