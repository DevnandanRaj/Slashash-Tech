const express = require('express');
const router = express.Router();
const favoritesController = require("../Controller/favoritesController");

router.get("/get", favoritesController.getFavorites);
router.post("/add", favoritesController.saveFavorite);

module.exports = router;
