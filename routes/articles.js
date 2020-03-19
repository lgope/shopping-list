const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is Articles Page');
});

router.get('/test', (req, res) => {
  res.send('This is Articles Page Loading');
});

module.exports = router;
