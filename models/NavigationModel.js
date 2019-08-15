const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class Navigation {
  constructor({name, nameAr, icon, parentId, actionPath, status, showInMenu, showInPermission, childPermission, displayOrder} = {}) {
    this.name = name;
    this.nameAr = nameAr;
    this.icon = icon;
    this.parentId = parentId;
    this.actionPath = actionPath;
    this.showInMenu = showInMenu;
    this.showInPermission = showInPermission;
    this.childPermission = childPermission;
    this.displayOrder = displayOrder;
    this.status = status;
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
