import { DataTypes, Model } from "sequelize";

export default class Rating extends Model {
  static init(sequelize) {
    super.init(
      {
        product_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        rate: {
          type: DataTypes.DECIMAL(2, 1),
          allowNull: false,
        },
        count: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "rating",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.product, {
      foreignKey: "product_id",
    });
  }
}
