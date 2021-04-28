const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const router = new Router();
const User = require("../models").user;
const bcrypt = require("bcrypt");
const middleware = require("../auth/middleware");
const { SALT_ROUNDS } = require("../config/constants");

// router.post("/login", async (req, res, next) => {
//   const { email, password } = req.body;

//   if (!email || email === " " || !password || password === " ") {
//     return res.status(400).send("Please provide a valid email and password");
//   }
//   const user = await User.findOne({
//     where: { email: email },
//   });

//   if (!user) {
//     return res.status(400).send("Please provide valid email address");
//   } else {
//     console.log(password);
//     console.log(user.password); //undefined
//     const result = bcrypt.compareSync(password, user.password);

//     if (result) {
//       res.send({ jwt: toJWT({ userId: user.id }) });
//     } else {
//       return res.status(400).send("Please provide valid password");
//     }
//   }
// });

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  if (!email || !password || !firstName || !lastName) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      firstName,
      lastName,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/me", middleware.auth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
