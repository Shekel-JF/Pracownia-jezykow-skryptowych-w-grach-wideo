const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const categories = [
  { id: 1, name: 'Elektronika' },
  { id: 2, name: 'Książki' },
  { id: 3, name: 'Odzież' }
];

const products = [
  { id: 1, name: 'Laptop', price: 3500, categoryId: 1 },
  { id: 2, name: 'Smartfon', price: 1500, categoryId: 1 },
  { id: 3, name: 'Wiedźmin 3', price: 40, categoryId: 2 },
  { id: 4, name: 'Koszulka', price: 60, categoryId: 3 }
];

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Serwer backend działa na porcie ${PORT}`);
});