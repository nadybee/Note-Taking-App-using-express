const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const db = require('../db/db.json')
const fs = require('fs')


router.get('/', (req, res) => res.json(db));

router.post("/" , (req,res) => {
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    }

    if(!newNote.title || !newNote.text) {
       res.status(400).json ({msg:"Please add a note"})
    }
// adds new post to DB file
else { 
    fs.readFile('./db/db.json', function (err, data) {
        var json = JSON.parse(data);
        json.push(newNote);    
        fs.writeFile('./db/db.json', JSON.stringify(json), function(err){
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
        });
    })
}
    const response = {
        status: 'success',
        body: newNote,
    }
    console.log(response)
    res.status(201).json(response) 
   
})


module.exports = router