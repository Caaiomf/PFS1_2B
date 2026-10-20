const express = require("express");
const VitrineController = require("../controllers/vitrineController");


const router = express.Router();

const ctrl = new VitrineController;
router.get("/",ctrl.listarView);

module.exports = router;
