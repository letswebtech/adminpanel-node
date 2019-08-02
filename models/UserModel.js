const db = require('../util/database');


module.exports = class User {
    constructor(id, fname, lname, email, password){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
    }
    save(){
        return db.execute('INSERT INTO users (fname, lname, email, password) VALUES (?, ?, ?, ?)',
            [
             this.fname,
             this.lname,
             this.email,
             this.password
            ]
          );
    }
};