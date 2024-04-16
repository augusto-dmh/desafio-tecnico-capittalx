import Sequelize from "sequelize";
import dbConfig from "../config/database";
import models from "../models";

const connection = new Sequelize(dbConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
