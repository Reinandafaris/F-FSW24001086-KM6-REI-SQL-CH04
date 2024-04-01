'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listCars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  listCars.init({
    nama: DataTypes.STRING,
    sewaPerHari: DataTypes.INTEGER,
    ukuran: DataTypes.STRING,
    foto: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'listCars',
  });
  return listCars;
};