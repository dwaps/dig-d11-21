const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { resolve } = require('path');

const app = express();

// CONFIGURATIONS
app.use(express.static(resolve('..', 'public')));

// API ROUTES

app.get('*', (req, res) => {
  res.sendFile(resolve('..', 'public', 'index.html'));
});

app.listen(3000);
