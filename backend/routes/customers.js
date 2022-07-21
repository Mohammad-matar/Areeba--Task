
const express = require("express");
const Controller = require("../Controllers/Customers");
const router = express.Router();

//Create Routes
router.get("/", Controller.getAll);
router.get("/:id", Controller.getById);
router.get("/validate/:number", Controller.validate);
router.post("/", Controller.post);
router.put("/:id", Controller.put);
router.delete("/:id", Controller.delete);

module.exports = router;
