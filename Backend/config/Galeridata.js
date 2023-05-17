import { Sequelize } from "sequelize";

const GaleriData = new Sequelize('galeri_db',"root","", {
    host: 'localhost',
    dialect: 'mysql'
})

export default GaleriData