const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Auto.init(sequelize, DataTypes);
}

class Auto extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idauto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    placa: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idauto" },
        ]
      },
    ]
  });
  return Auto;
  }
}
