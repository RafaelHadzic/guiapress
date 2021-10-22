const Sequelize = require("sequelize")
const connection = require("../database/database")

const User = connection.define("users", {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

})

// User.sync({force: true}) // - salva a tabela
// User.sync({alter: true}) // - altera a tabela

module.exports = User