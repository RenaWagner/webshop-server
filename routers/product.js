const { Router } = require("express");
const router = new Router();
const Product = require("../models").product;
const Category = require("../models").category;

router.get("/", async (req, res, next) => {
  try {
    const limit = Math.min(req.query.limit || 25, 500); // limit indicates how many results are on a page.
    const offset = req.query.offset || 0;
    const allProducts = await Product.findAll({
      limit,
      offset,
      include: [{ model: Category, attributes: ["id", "name"] }],
    });
    if (!allProducts) {
      res.status(404).send("Products not found");
    } else {
      res.send(allProducts);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
