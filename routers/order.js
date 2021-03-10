const User = require("../models").user;
const Order = require("../models").order;
const Product = require("../models").product;
const ProductOrder = require("../models").productOrder;
const authMiddleware = require("../auth/middleware");
const { Router } = require("express");
const router = new Router();

// req.user -> whole Object (You can use is because of the middleware)
router.get("/", async (req, res, next) => {
  try {
    const userWithOrders = await User.findByPk(req.user.id, {
      include: {
        model: Order,
        attributes: ["status"],
        include: {
          model: Product,
          attributes: ["name"],
          include: {
            model: ProductOrder,
            attributes: ["quantity"],
          },
        },
      },
    });
    res.send(userWithOrders);
  } catch (e) {
    next(e);
  }
});
//You can check with  http :4000/orders/ Authorization:"Bearer <token>"

router.post("/", async (req, res, next) => {
  try {
    const userId = req.user.id;
  } catch (e) {
    next(e);
  }
});

module.exports = router;
