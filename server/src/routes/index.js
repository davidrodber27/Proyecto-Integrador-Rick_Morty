const { Router } = require("express");
const { postFav, deleteFav } = require("../controllers/favorites");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");

const router = Router();

router.get("/characters/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;