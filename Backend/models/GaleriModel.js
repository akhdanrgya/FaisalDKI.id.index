import { Sequelize } from "sequelize";
import GaleriData from "../config/Galeridata.js";

const { DataTypes } = Sequelize;

const galeri = GaleriData.define( "galeri",{
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true
  }
);

export default galeri;

(async()=>{
    await GaleriData.sync()
})()