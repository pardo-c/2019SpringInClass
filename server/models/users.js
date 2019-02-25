const conn = require('./mysql_connections');

const model = {
    getAll(cb){
        conn.query("select * from 2019Spring_Persons", (err, data)=> {
            cb(err, data);
        });
    },
    get(id, cb){

    },
    
    add(input){

    }

};

module.exports = model;