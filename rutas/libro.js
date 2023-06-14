const express = require("express");
const ruta = express.Router();

const {
  getLibro,
  getLibros,
  postLibro,
  putLibro,
  deleteLibro,
} = require("../controller/libro");

ruta.route("/").get(getLibros).post(postLibro);
ruta.route("/:id").get(getLibro).put(putLibro).delete(deleteLibro);

module.exports = ruta;
