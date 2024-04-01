const router = require("express").Router();

const listCars = require("../controllers/listCarsCotroller");

router.get("/", listCars.defaultPage);
router.get("/create", listCars.createListCarPage);
router.get("/all", listCars.getAllListCars);
router.post("/admin/create", listCars.createListCar);
router.get("/edit/:id", listCars.editListCarPage);
router.post("/admin/edit/:id", listCars.editListCar);
router.post("/delete/:id", listCars.deleteListCar);

module.exports = router;
