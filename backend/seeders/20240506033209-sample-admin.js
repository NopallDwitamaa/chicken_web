'use strict';
let md5 = require('md5')
const now = new Date()
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admins', [{
        name: "nopal",
        email: "adminnopal@gmail.com",
        password: md5("12345"),
        createdAt: now,
        updatedAt: now
      },
      {
        name: "shella",
        email: "adminshella@gmail.com",
        password: md5("12345"),
        createdAt: now,
        updatedAt: now
      },
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};