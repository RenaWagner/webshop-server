const { Router } = require("express");
const router = new Router();
const User = require("../models").user;
const bcrypt = require("bcrypt");

router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, address, email, phone, password } = req.body;
    if (firstName && lastName && address && email && phone && password) {
      const newUser = await User.create({
        firstName,
        lastName,
        address,
        email,
        phone,
        password: bcrypt.hashSync(password, 10),
        isAdmin: false,
      });
      //   console.log(newUser);
      res.send(newUser);
    } else {
      res.status(400).send("Please provide all information.");
    }
  } catch (e) {
    next(e);
  }
});

router.post("/admin", async (req, res, next) => {
  try {
    const { firstName, lastName, address, email, phone } = req.body;
    if (firstName && lastName && address && email && phone) {
      const newAdminUser = await User.create({
        firstName,
        lastName,
        address,
        email,
        phone,
        password: bcrypt.hashSync(password, 10),
        isAdmin: true,
      });
      //   console.log(newUser);
      res.send(newAdminUser);
    } else {
      res.status(400).send("Please provide all information.");
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/:userId", async (req, res, next) => {
  try {
    const id = parseInt(req.params.userId);
    const userToDelete = await User.findByPk(id);
    if (!userToDelete) {
      return res.status(404).send("User not found");
    }
    const deleted = await userToDelete.destroy();
    res.send(deleted);
  } catch (e) {
    next(e);
  }
});

router.patch("/:userId", async (req, res, next) => {
  try {
    const id = parseInt(req.params.userId);
    const { firstName, lastName, address, phone } = req.body;
    const userToUpdate = await User.findByPk(id);
    if (!userToUpdate) {
      return res.status(404).send("User not found");
    }
    const updatedUser = await userToUpdate.update({
      firstName,
      lastName,
      address,
      phone,
    });
    console.log(updatedUser);
    res.send(updatedUser);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
