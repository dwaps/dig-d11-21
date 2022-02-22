const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { resolve } = require('path');

const app = express();

// CONFIGURATIONS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(resolve('..', 'public')));
app.use(cookieParser());

// API ROUTES
const router = express.Router();
router.post('/signup', (req, res) => {
  res.send('signup');
});
router.post('/login', (req, res) => {
  res.send('login');
});
app.use('/api/auth', router);

app.get('*', (req, res) => {
  res.sendFile(resolve('..', 'public', 'index.html'));
});

app.listen(3000);
