const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/count', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT COUNT("user_id") AS "count" FROM "wine"
    WHERE "user_id"=$1;`;
    pool.query(queryText, [req.user.id])
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error in bottle count GET for My Profile:', error);
        res.sendStatus(500);
    })
});

router.get('/favorites', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "wine"
    JOIN "grape" ON "grape"."id" = "wine"."grape_id"
    WHERE "user_id" = $1
    ORDER BY "rating" DESC LIMIT 5;`;
    pool.query(queryText, [req.user.id])
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error in favorites GET for My Profile:', error);
        res.sendStatus(500);
    })
});


module.exports = router;