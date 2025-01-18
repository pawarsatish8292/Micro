const express = require ('express');
const axios = require ('axios');

const port = 3000;
const app = express();
app.use(express.json());

// User Service Routes

// GET all users
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:4001/users');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// POST create a new user
app.post('/users', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:4001/users', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// PUT update a user
app.put('/users/:id', async (req, res) => {
  try {
    const response = await axios.put(`http://localhost:4001/users/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

// DELETE a user
app.delete('/users/:id', async (req, res) => {
  try {
    const response = await axios.delete(`http://localhost:4001/users/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

// Product Service Routes

// GET all products
app.get('/products', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:4002/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// POST create a new product
app.post('/products', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:4002/products', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
});

// PUT update a product
app.put('/products/:id', async (req, res) => {
  try {
    const response = await axios.put(`http://localhost:4002/products/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error updating product' });
  }
});

// DELETE a product
app.delete('/products/:id', async (req, res) => {
  try {
    const response = await axios.delete(`http://localhost:4002/products/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product' });
  }
});

app.listen(port, () => {
  console.log(`API Gateway running on http://localhost:${port}`);
});