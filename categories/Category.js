const Sequelize = require("sequelize")
const connection = require("../database/database")

const Category = connection.define("categories", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },

})

// Category.sync({force: true}) - salva a tabela
// Category.sync({alter: true}) - altera a tabela

module.exports = Category