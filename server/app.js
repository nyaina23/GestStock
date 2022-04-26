/* INTERDICTION DE MODIFIER LE CODE CI-DESSOUS */

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const products = require("./products.json");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

let inventory = [];
const moves = [];

app.post("/reset", (req, res) => {
  inventory.length = 0;
  movements.length = 0;
  res.sendStatus(204);
});

/* FIN D'INTERDICTION */

/*
 * Ecrivez le code de votre solution en dessous de ce commentaire.
 * Vous pouvez supprimer l'exemple "GET /".
 * Vous avez, bien sûr, le droit d'importer des modules supplémentaires.
 */

inventory = [
  {
    "productId": 123,
    "productName": "Bic bleu",
    "quantity": 35
  },
  {
    "productId": 124,
    "productName": "Bic red",
    "quantity": 12
  },
  {
    "productId": 125,
    "productName": "Bic verte",
    "quantity": 30
  }
]

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Show all products
app.get("/products", (req, res) => {
  res.json({ products });
});

// Add product
app.post("/products", (req, res) => {
  const newProd = req.body;
  products.push(newProd);
  console.log(req.body);
  res.status(201).send({ products })
});

// Show all inventory
app.get("/inventory", (req, res) => {
  res.status(201).send(inventory)
});

// Add in inventory
app.post("/moves", (req, res) => {
  const newProd = req.body;
  inventory.push(newProd);
  res.status(201).send({ inventory })
});




/* INTERDICTION DE MODIFIER LE CODE CI-DESSOUS */

module.exports = app;
