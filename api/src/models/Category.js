import { DataTypes, Model } from "sequelize";

export default class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "category",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.product, { foreignKey: "category_id" });
  }
}
