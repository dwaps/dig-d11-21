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

// CNX TO DB
mongoose
  .connect('mongodb+srv://coco:coco@cluster0.m7qpn.mongodb.net/test-auth?retryWrites=true&w=majority')
  .then(() => console.log('DB CNX OK !'))
  .catch(console.error);

// MODEL
const User = mongoose.model('user', mongoose.Schema({
  name: String,
  email: String,
  password: String,
}));

// API ROUTES
const router = express.Router();
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (name, email, password) {
    const newUser = new User({
      name, email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(12))
    });
    newUser.save()
      .then(user => {
        user.password = undefined;
        return res.json(user);
      })
      .catch(() => res.send('Une erreur est survenue...'));
  }
  else { res.send('Il manque un champ...') }
});
router.post('/login', (req, res) => {
  res.send('login');
});
app.use('/api/auth', router);

app.get('*', (req, res) => {
  res.sendFile(resolve('..', 'public', 'index.html'));
});

app.listen(3000);
