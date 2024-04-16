import { DataTypes, Model } from "sequelize";
import { hashSync } from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "user",
      }
    );

    this.addHook("afterValidate", (user) => {
      user.password = hashSync(user.password, 10);
    });

    return this;
  }
}
