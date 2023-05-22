import { Sequelize } from "sequelize";
import db from "../config/DataBase.js";

const { DataTypes } = Sequelize;

const Pendukung = db.define(
  "pendukung",
  {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    nik: DataTypes.STRING,
    hp: DataTypes.STRING,
    email: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Pendukung;

(async () => {
  await db.sync();
})();
