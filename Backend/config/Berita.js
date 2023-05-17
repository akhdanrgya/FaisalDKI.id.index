import { Sequelize } from "sequelize";

const berita = new Sequelize('portal_berita_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default berita