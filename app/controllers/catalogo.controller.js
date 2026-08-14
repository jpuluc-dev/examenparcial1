const db = require("../models");
const Catalogo = db.catalogo;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    const catalogo = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        artista: req.body.artista,
        duracion: req.body.duracion,
        extencion: req.body.extencion,
        album: req.body.album,
        anio: req.body.anio,
        carnet: req.body.carnet,

    }
    Catalogo.create(catalogo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Se produjo un error al crear el catalogo!"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Catalogo.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar el catalogo con id=" + id
            });
        });
};


exports.update = (req, res) => {
    const id = req.params.id;

    Catalogo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El Catalogo se actualizo correctamene."
                });
            } else {
                res.send({
                    message: "No se puede actualizar el catalogo con id=${id}"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar el catalogo con id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    Catalogo.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El Catalogo se elimino correctamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar el catalogo con id=${id}, el catalogo no fue encontrado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el tutorial con id=" + id
            });
        });
};


exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Catalogo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Se produjo un error al recuperar los catalogod!"
            });
        });
};