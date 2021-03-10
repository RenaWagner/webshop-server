const User = require("../models").user;
const Order = require("../models").order;
const Product = require("../models").product;
const authMiddleware = require("../auth/middleware");
const { Router } = require("express");
const router = new Router();

// req.user -> whole Object (You can use is because of the middleware)
router.get("/", async (req, res, next) => {
  try {
    const userWithOrders = await User.findByPk(req.user.id, {
      include: {
        model: Order,
        attributes: ["quantity"],
        include: {
          model: Product,
          attributes: ["name"],
        },
      },
    });
    res.send(userWithOrders);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const userId = req.user.id;
  } catch (e) {
    next(e);
  }
});

module.exports = router;
