const express = require('express');
const pg = require('pg');

// db
let config = {}

if (process.env.DATABASE_URL) { // if db url exist
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true, // heroku requires ssl to be true
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
} else { // if no db online exist use local
    config = {
        host: 'localhost',
        port: '5432', // pg port
        database: 'portfolio', // db name
        max: 10,
        idleTimeoutMillis: 30000,
    };
}

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('Postgesql connected');
});

pool.on('error', (err) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
});
//end of DB

// route
const router = express.Router();

//get
router.get('/', (req,res)=>{
    res.send('got to get');
});

//post, add
router.post('/', (req,res)=>{
    res.send('got to post');
})

//delete
router.delete('/', (req,res)=>{
    res.send('got to delete');
})

//put, update
router.put('/', (req,res)=>{
    res.send('got to update');
})

module.exports = router;