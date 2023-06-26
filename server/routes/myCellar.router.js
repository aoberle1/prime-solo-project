const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
    const queryText = `SELECT "vineyard", "vintage", "grape"."name", "price", "place_bought", "notes", "rating" FROM "wine"
    JOIN "user" ON "user"."id" = "wine"."user_id"
    JOIN "grape" ON "grape"."id" = "wine"."grape_id"
    WHERE "user_id" = $1;`;
    console.log('req.user.id in cellar GET:', req.user.id)
    pool.query(queryText, [req.user.id])
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error in initial GET for myCellar:', error);
        res.sendStatus(500);
    })
});

module.exports = router  