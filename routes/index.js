const router = require("express").Router();

const listCars = require("./listCarsRouter");

router.use("/", listCars);
router.use("/api/v1/listcars", listCars);

module.exports = router;
