import { Sequelize } from "sequelize";
import berita from "../config/Berita.js";

const { DataTypes } = Sequelize;

const Berita = berita.define( "berita",{
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    artikel: DataTypes.STRING
  },
  {
    freezeTableName: true
  }
);

export default Berita;

(async()=>{
    await berita.sync()
})()
