const path = require('path');
var PORT = process.env.PORT || 3000 ;

exports.rootDir = path.dirname(process.mainModule.filename);
exports.baseUrl = (route) => {
    if(route){
        return  'http://localhost:'+PORT+'/'+route;
    }
    return 'http://localhost:'+PORT+'/';
};
