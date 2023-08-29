let products = require("../data/products");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const prodIndex = products.findIndex((p) => p.id === id);
    resolve(products[prodIndex]);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

function update(id, product) {
  return new Promise((resolve, reject) => {
    const productIndex = products.findIndex((p) => p.id === id);
    products[productIndex] = { id, ...product };
    writeDataToFile("./data/products.json", products);
    resolve(products[productIndex]);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    products = products.filter((p) => p.id !== id);
    writeDataToFile('./data/products.json', products)
    resolve()
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
