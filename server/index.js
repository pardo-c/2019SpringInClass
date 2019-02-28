const express   = require('express');
const users     = require('./controllers/users.js');
const path      = require('path');
const app       = express();
const port      = 3000;

// functions, objects, classes, all the same in JS
// this is our middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// middleware that reads file system and if user asked for anything that matched, then pass back to user
app.use(express.static(path.join(__dirname, "../NoFramework")));
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', users);


app.listen(port, () => console.log(`Example app http://localhost:${port}`));