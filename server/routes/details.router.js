const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    console.log('GET details received a request! The param is: ', req.query.q)
    // Add query to specific movie and genres
    // query will use a JOIN to get all genres for a specific movie id
    const query = `
        SELECT 
            "movies_genres"."genre_id",
            "genres"."name" AS "genre_name",
            "movies_genres"."movie_id",
            "movies"."title",
            "movies"."poster",
            "movies"."description"
            FROM "genres"
            JOIN "movies_genres"
                ON "genres"."id" = "movies_genres"."genre_id"
            JOIN "movies"
                ON "movies_genres"."movie_id" = "movies"."id"
            WHERE "movies"."id" = $1;
  `;
  const queryVariables = [req.query.q];
  pool.query(query, queryVariables)
  .then(result => {
    console.log('result from database: ', result.rows);
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get all movies', err);
    res.sendStatus(500)
  })
  });
  
  module.exports = router;