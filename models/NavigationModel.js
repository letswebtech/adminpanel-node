const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class Navigation {
  constructor({name, nameAr, icon, parentId, actionPath, status, showInMenu, showInPermission, childPermission, displayOrder} = {}) {
    this.name = name;
    this.nameAr = nameAr;
    this.icon = icon;
    this.parentId = parentId;
    this.actionPath = actionPath;
    this.showInMenu = showInMenu; //0.No, 1.Yes
    this.showInPermission = showInPermission; //0.No, 1.Yes
    this.childPermission = childPermission; //0.No, 1.Yes
    this.displayOrder = displayOrder;
    this.status = status; //0.Inactive, 1.Active
  }
  save() {
      const db = getDb();
      return db.collection('navigation_masters')
      .insertOne(this)
      .then(result => {
          console.log(result);
      }).catch(err => {
          console.log(err);
      });
  }
}


module.exports = Navigation;
