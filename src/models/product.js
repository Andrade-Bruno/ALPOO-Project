// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Product = sequelize.define("product", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    productName: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    productCategory: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    price: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [0.01, Infinity]
        }
    },
    quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
            len: [1, Infinity]
        }
    },
    available: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaulValue: true
        }
});
 
module.exports = Product;
