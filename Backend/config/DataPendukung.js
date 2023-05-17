import { Sequelize } from "sequelize";

const dp = new Sequelize('data_pendukung', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default dp