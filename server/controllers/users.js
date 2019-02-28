const express = require('express');
const conn = require('../models/users.js');
const app = express.Router();

app.get("/",(eq,res)=>{     //every action has a method and a path / is the root of this controller
                            // express will execute this function.
    console.log('Roses are red')                        
    user.getAll((err, data) => {
        console.log('violets are blue')
        if(err) throw err;  // once function is called,call send method
        res.send(data);

    });
app.get("/:id",(eq,res)=>{     //every action has a method and a path / is the root of this controller
    user.get(req.params.id,(err, data) => {
        console.log('violets are blue')
        if(err) throw err;  // once function is called,call send method
        res.send(data);

});
   
    console.log('aysnc is great')
});

app.post("/", (req, res) => {

    user.add({FirstName: "Steve", LastName: "Irwin", Password: BobbyTables})
})

module.exports = app;