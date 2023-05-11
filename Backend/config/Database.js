import { Sequelize } from "sequelize";

const db = new Sequelize('portal_berita_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db