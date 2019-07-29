'use strict'

const Sequelize = require('sequelize')

module.exports = sequelize => {
  let cartProductModel = sequelize.define('cartProduct', {
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    }
  })

  return cartProductModel
}