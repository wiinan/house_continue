"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class house extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //  static associate(models) {
    //   this.belongsTo(models.user,{foreignKey:'user_id', as:'user'})

    static associate(models) {
      this.belongsTo(models.users, { foreignKey: "user_id", as: "user" });
    }
  }
  house.init(
    {
      thumbnail: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1000 },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Digite Algo",
          },
        },
      },
      status: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "house",
    }
  );
  return house;
};
