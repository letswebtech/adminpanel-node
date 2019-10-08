const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');
const bcrypt  = require('bcryptjs');

class User {
  constructor({fname, lname, profilePic, email, dialCode, mobileNo, password, address1, address2, cityId, stateId, countryId, local, profileCompleted, emailVerified, mobileNoVerified, subscriptionId, status } = {}) {
    this.fname = fname;
    this.lname = lname;
    this.profilePic = profilePic;
    this.email = email;
    this.dialCode = dialCode;
    this.mobileNo = mobileNo;
    this.password = password;
    this.address1 = address1;
    this.address2 = address2;
    this.cityId = cityId;
    this.stateId = stateId;
    this.countryId = countryId;
    this.local = local;
    this.profileCompleted = profileCompleted;
    this.emailVerified = emailVerified;
    this.mobileNoVerified = mobileNoVerified;
    this.subscriptionId = subscriptionId;
    this.status = status;
  }

  save() {
    const db = getDb();
    return db
      .collection('users')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('users')
      .find()
      .toArray()
      .then(users => {
        return users
      })
      .catch(err => {
        console.log(err);
      });
  }
  static findById(id) {
    const db = getDb();
    return db
      .collection('users')
      .find({ _id: new mongodb.ObjectId(id) })
      .next()
      .then(user => {
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static update(id, dataArr) {
    const db = getDb();
    return db
      .collection('users')
      .updateOne({ _id: new mongodb.ObjectId(id) }, { $set: dataArr})
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static login(email, password) {
    const db = getDb();
    return db
      .collection('users')
      .find({
        email: email
      })
      .next()
      .then(user => {
        return bcrypt.compare(password, user.password).then(doMatch =>{
          if(doMatch){
            return user;
          }else{
            return 
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }


}

module.exports = User;
