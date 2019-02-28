const conn = require('./mysql_connections');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM 2019Spring_Persons", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){

    },
    add(input, cb){
        // sql server cannot do this kind of validation.
        if(input.Password.length < 8){
            cb(Error('A longer password is required'));
            // do not want function to play out so return
            return;
        }
        conn.query( "INSERT INTO 2019Spring_Persons (FirstName,LastName,Birthday,Password,created_at) VALUES (?)",
                    [[input.FirstName, input.LastName, input.Birthday, input.Password, new Date()]],
                    (err, data) => {
                        if(err){
                            cb(err);
                            return;
                        }
                        model.get(data.insertId, (err,data) =>{
                            cb(err, data); 
                        })
                    }
        );    
    }
};

module.exports = model;