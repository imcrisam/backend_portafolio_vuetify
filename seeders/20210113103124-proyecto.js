'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Proyectos', [
      {
      title: "SpaceMan",
      category: "VideoGame",
      description: "Proyecto realizado con Unity, basado en el Curso: “C# para Videojuegos” en platzi",
      imagen: "/proyecto/spaceman.jpg",
      link: "https://imcrisam.itch.io/spaceman-platzi",
      repo: "https://github.com/imcrisam/Platzi_CSharp_",
      date: new Date("2020,09,01"),
      chips_code: "",
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        title: "CryptCreepers",
        category: "VideoGame",
        description: "Proyecto con Unity, basado en el Curso: “Videojuegos 2D con Unity” en Platzi",
        imagen: "/proyecto/Cryptcreepers.jpg",
        link: "https://imcrisam.itch.io/cryptcreepers",
        repo: "https://github.com/imcrisam/CryptCreepers_platzi",
        date: new Date("2021,02,04"),
        chips_code: "",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "BreachBreaker",
        category: "VideoGame",
        description: "Proyecto con Unity, basado en el Curso: “Desarrollo de Videojuegos para Móviles con Unity” en Platzi",
        imagen: "/proyecto/breachbreaker.jpg",
        link: "https://imcrisam.itch.io/breachbreaker",
        repo: "https://github.com/imcrisam/Intro_Unity_Moviles",
        date: new Date("2021,01,01"),
        chips_code: "",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Portefolio Frontend",
        category: "Frontend",
        description: "Proyecto con Vue2-cli y Vuetify para la creación de este portafolio",
        imagen: "/proyecto/portafolio_frontend.jpg",
        link: "/",
        repo: "https://github.com/imcrisam/portafolio_vuetify",
        date: new Date("2021,01,01"),
        chips_code: "",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Portefolio Backend",
        category: "Backend",
        description: "Backend (API) de este proyecto “portafolio” creada con express.js",
        imagen: "/proyecto/portafolio_backend.jpg",
        link: "",
        repo: "",
        date: new Date("2021,01,01"),
        chips_code: "",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "RetoFinal Mintic2022",
        category: "Frontend",
        description: "Proyecto con Vue2-cli y Vuetify donde desarrollé dashboard, login",
        imagen: "/proyecto/retoFinal_mintic2022.jpg",
        link: "https://glacial-reef-29701.herokuapp.com/LoginAdmin",
        repo: "https://github.com/Ciclo-3-MinTic/frontend-semana-4-161",
        date: new Date("2020,12,21"),
        chips_code: "",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "RetoFinal Mintic2022",
        category: "Backend",
        description: "Backend (API) del proyecto 'RetoFinal Mintic2022' creada con express.js",
        imagen: "/proyecto/retoFinal mintic2022_backend.jpg",
        link: "",
        repo: "https://github.com/Ciclo-3-MinTic/backend-seamana-4-161",
        date: new Date("2020,12,21"),
        chips_code: "",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Inicio en POO con Java",
        category: "Programación",
        description: "Proyectos en BlueJ Con Java: Loops, ArrayList, Herencia, Interfaces, Polimorfismo",
        imagen: "/proyecto/bluej.jpg",
        link: "",
        repo: "https://github.com/imcrisam/tareas_Bluej_oop_uis",
        date: new Date("2015,03,01"),
        chips_code: "",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Proyectos', null, {});

  }
};