module.exports = (sequelize, Sequelize) => {
    const Catalogo = sequelize.define("catalogo", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        artista: {
            type: Sequelize.STRING
        },
        duracion: {
            type: Sequelize.DECIMAL
        },
        extencion: {
            type: Sequelize.STRING
        },
        album: {
            type: Sequelize.STRING
        },
        anio: {
            type: Sequelize.INTEGER
        },
        carnet: {
            type: Sequelize.STRING
        }
    });
    return Catalogo;

};