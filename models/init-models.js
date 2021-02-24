var DataTypes = require("sequelize").DataTypes;
var _Auto = require("./auto");

function initModels(sequelize) {
  var Auto = _Auto(sequelize, DataTypes);


  return {
    Auto,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
