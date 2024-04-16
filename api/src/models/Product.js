import { DataTypes, Model } from "sequelize";

export default class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.DECIMAL(6, 2),
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        image: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "product",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.category, { foreignKey: "category_id" });
  }
}
