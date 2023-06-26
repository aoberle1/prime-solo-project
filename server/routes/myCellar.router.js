const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "wine"
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

router.post('/', (req, res) => {
    console.log('req.body for POST is:', req.body);
    const dataPackage = [
        req.body.vineyard,
        req.body.vintage,
        req.body.grape,
        req.body.price,
        req.body.place_bought,
        req.body.notes,
        req.body.rating,
        req.user.id
    ]
    console.log('dataPackage variable is:', dataPackage);

    const queryText = `INSERT INTO "wine" 
    ("vineyard", "vintage", "grape_id", "price", "place_bought", "notes", "rating", "user_id") 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
    pool.query(queryText, dataPackage)
    .then(result => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error on server in POST:', error);
        res.sendStatus(500);
    })
});

module.exports = router  