const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfg2345sdfsfasdf';

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  'mongodb+srv://elibonner:9BUniBAXbZVEZQuG@cluster0.mgilic4.mongodb.net/?retryWrites=true&w=majority'
);

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});

// app.get('/profile', (req, res) => {
//   const { token } = req.cookies;
//   jwt.verify(token, secret, {}, (err, info) => {
//     if (err) throw err;
//     res.json(info);
//   });
// });
app.get('/profile', (req, res) => {
  const token = req.cookies.token; // Extract token from cookies
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    res.json(info);
  });
});

app.listen(4000);
