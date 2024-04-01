const { listCars } = require("../models");

const getLocalHost = async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to Localhost",
  });
};

const defaultPage = async (req, res) => {
  try {
    const allListCars = await listCars.findAll();

    res.render("listCars/index.ejs", {
      allListCars,
      message: req.flash("message", ""),
    });
  } catch (error) {
    res.render("error.ejs", {
      message: error.message,
    });
  }
};

const createListCarPage = async (req, res) => {
  try {
    res.render("listCars/create.ejs");
  } catch (error) {
    res.render("error.ejs", {
      message: error.message,
    });
  }
};

const getAllListCars = async (req, res) => {
  try {
    const allListCars = await listCars.findAll();
    res.status(200).json({
      status: "success",
      message: "List of List Cars",
      data: allListCars,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

const createListCar = async (req, res) => {
  try {
    console.log(req.body);
    await listCars.create(req.body);
    req.flash("message", "Data Berhasil Ditambah");
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

const editListCarPage = async (req, res) => {
  const { id } = req.params;

  try {
    const listCar = await listCars.findOne({
      where: {
        id,
      },
    });

    if (listCar) {
      res.render("listCars/edit.ejs", {
        listCar,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: "List Car not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

const editListCar = async (req, res) => {
  const { id } = req.params;

  try {
    const listCar = await listCars.update(req.body, {
      where: {
        id,
      },
    });

    if (listCar) {
      req.flash("message", "Data Berhasil Diubah");
      res.redirect("/");
    } else {
      res.status(404).json({
        status: "error",
        message: "List Car not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

const deleteListCar = async (req, res) => {
  const { id } = req.params;

  try {
    const listCar = await listCars.destroy({
      where: {
        id,
      },
    });

    if (listCar) {
      req.flash("message", "Data Berhasil Dihapus");
      res.redirect("/");
    } else {
      res.status(404).json({
        status: "error",
        message: "List Car not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getLocalHost,
  defaultPage,
  createListCarPage,
  getAllListCars,
  createListCar,
  editListCarPage,
  editListCar,
  deleteListCar,
};
