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
    const ordersWithDetails = await Order.findAll({
      where: { userId: req.user.id },
      include: [
        {
          model: Product,
          attributes: ["name", "price"],
          through: {
            attributes: ["quantity"],
          },
        },
      ],
    });
    res.send(ordersWithDetails);
  } catch (e) {
    next(e);
  }
});
//You can check with  http :4000/orders/ Authorization:"Bearer <token>"

router.post("/", async (req, res, next) => {
  try {
    //If you want to add multiple products at once, change the product here to array and map them
    //If that's the case, quantity needs to set up differently.
    const { product, quantity } = req.body;
    if (!product) {
      return res.status(400).send("Please choose the product");
    }
    console.log(req.body);

    const addOrderId = await Order.create({
      userId: req.user.id,
      status: "Ordered",
    });
    console.log("add new row for order", addOrderId);

    const newOrder = await ProductOrder.create({
      orderId: parseInt(addOrderId.id),
      productId: product,
      quantity,
    });
    // console.log(newOrder);
    res.send(newOrder);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
