'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Livros', [
        {
          "titulo": "O senhor dos aneis",
          "autor": "Tolkien",
          "genero": "Fantasia Medieval",
          "anoDeLancamento": 1920,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "titulo": "O Menino do Pijama Listrado",
          "autor": "John Boyne",
          "genero": "Drama",
          "anoDeLancamento": 1980,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "titulo": "Harry Potter: O cálice de Fogo",
          "autor": "JK Rolling",
          "genero": "Fantasia",
          "anoDeLancamento": 1995,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "titulo": "The Witcher",
          "autor": null,
          "genero": "Fantasia",
          "anoDeLancamento": 1940,
          "createdAt": new Date(),
          "updatedAt": new Date()
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Livros', null, {});
     
  }
};
