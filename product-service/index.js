const express = require('express');
const app = express();
const PORT = 4002;

app.use(express.json());

// Mock product data (in-memory)
let products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 }
];

// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST create a new product
app.post('/products', (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update a product
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(product => product.id === productId);
  
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  products[productIndex] = { id: productId, ...req.body };
  res.json(products[productIndex]);
});

// DELETE a product
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(product => product.id === productId);
  
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  products.splice(productIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Product Service running on http://localhost:${PORT}`);
});
