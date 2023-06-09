import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// const { Sequelize } = ('sequalize')

const { DataTypes } = Sequelize;

const galeri = db.define(
  "galeri",
  {
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default galeri;

(async () => {
  await db.sync();
})();
