const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    // Add query to specific movie and genres
    // query will use a JOIN to get all genres for a specific movie id
    res.sendStatus(500)
  });
  
  module.exports = router;