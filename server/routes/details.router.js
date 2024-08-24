const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    console.log('GET details received a request! The param is: ', req.query.q)
    // Add query to specific movie and genres
    // query will use a JOIN to get all genres for a specific movie id
    const query = `
    SELECT * FROM "movies"
      ORDER BY "title" ASC;
  `;
  pool.query(query)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get all movies', err);
    res.sendStatus(500)
  })
  });
  
  module.exports = router;