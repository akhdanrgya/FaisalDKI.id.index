import { Sequelize } from "sequelize";
import dp from "../config/DataPendukung.js";

const { DataTypes } = Sequelize

const Pendukung = dp.define( "pendukung", {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    nik: DataTypes.STRING,
    hp: DataTypes.STRING,
    email: DataTypes.STRING,
    kecamatan: DataTypes.STRING
}, {
    freezeTableName: true
})

export default Pendukung;

(async()=>{
    await dp.sync()
})()