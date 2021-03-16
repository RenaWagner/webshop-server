const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const router = new Router();
const User = require("../models").user;
const bcrypt = require("bcrypt");
const authMiddleware = require("../auth/middleware");

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || email === " " || !password || password === " ") {
    return res.status(400).send("Please provide a valid email and password");
  }
  const user = await User.findOne({
    where: { email: email },
  });

  if (!user) {
    return res.status(400).send("Please provide valid email address");
  } else {
    console.log(password);
    console.log(user.password); //undefined
    const result = bcrypt.compareSync(password, user.password);

    if (result) {
      res.send({ jwt: toJWT({ userId: user.id }) });
    } else {
      return res.status(400).send("Please provide valid password");
    }
  }
});

// router.get("/test-auth", authMiddleware, (req, res) => {
//   res.send({
//     message: `Thanks for visiting the secret endpoint ${req.user.email}.`,
//   });
// });
router.get("/me", authMiddleware, (req, res) => {
  res.send(req.user);
});

module.exports = router;
