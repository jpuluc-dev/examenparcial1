module.exports = app => {
    const catalogos = require("../controllers/catalogo.controller.js");
    var router = require("express").Router();
    router.post("/create/", catalogos.create);
    router.put("/update/:id", catalogos.update);
    router.delete("/delete/:id", catalogos.delete);
    router.get("/", catalogos.findAll);
    router.get("/:id", catalogos.findOne);
    app.use("/api/catalogo", router);
};