const pool = require("../modules/pool");

const express = require('express');

//end of DB

// route
const router = express.Router();

//get
router.get('/', (req,res)=>{
    const queryText = 'SELECT "projects"."id", "projects"."name", "description", "github", "thumbnail", "website", "date_completed", "tags"."name" as "tag" FROM "projects" JOIN "tags" ON "tags"."id" = "projects"."tag_id" ORDER BY "name" DESC;';
    pool.query(queryText)
    .then((result)=>{
        res.send(result.rows);
    })
    .catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    });
});

router.get('/tags', (req,res)=>{
    const queryText = 'SELECT * FROM "tags" ORDER BY "id" DESC;';
    pool.query(queryText)
    .then((result)=>{
        res.send(result.rows);
    })
    .catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
})

//post, add
router.post('/', (req,res)=>{
    console.log(req.body);
    const queryText = 'INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") VALUES ($1, $2, $3, $4, $5, $6, $7);';
    pool.query(queryText, [req.body.name, req.body.description, req.body.thumbnail, req.body.website, req.body.github, req.body.date_completed, req.body.tag_id])
    .then((result)=>{
        res.sendStatus(200);
    })
    .catch((error)=>{
        res.send('error');
    })
})

//delete
router.delete('/delete/:id', (req,res)=>{
    // console.log(req.params.id);
    let projectId = req.params.id;
    const queryText = `DELETE FROM "projects" WHERE "id" = $1;`;
    pool.query(queryText, [projectId])
    .then((result)=>{
        res.sendStatus(200);
    })
    .catch((error)=>{
        res.sendStatus(500);
    })
})

//put, update
// router.put('/', (req,res)=>{
//     res.send('got to update');
// })

module.exports = router;