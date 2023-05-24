import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// const Sequelize = require('sequelize')

const { DataTypes } = Sequelize;

const Berita = db.define( "berita",{
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
    await db.sync()
})()
