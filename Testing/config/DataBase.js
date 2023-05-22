import { Sequelize } from "sequelize";

const db = new Sequelize('faisal_db', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db