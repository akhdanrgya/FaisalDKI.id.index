import { Sequelize } from "sequelize";
import db from "../config/DataBase";

const { DataTypes } = Sequelize;

const kabar = db.define(
  "kabar",
  {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    artikel: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default kabar;

(async () => {
  await db.sync();
})();
