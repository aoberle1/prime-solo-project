const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT COUNT("user_id") AS "count" FROM "wine"
    WHERE "user_id"=$1;`;
    pool.query(queryText, [req.user.id])
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error in initial GET for My Profile:', error);
        res.sendStatus(500);
    })
});


module.exports = router;