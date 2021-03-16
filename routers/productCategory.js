const { Router } = require("express");
const router = new Router();
const ProductCategory = require("../models").productCategory;

router.get("/", async (req, res, next) => {
  try {
    const limit = Math.min(req.query.limit || 25, 500); // limit indicates how many results are on a page.
    const offset = req.query.offset || 0;
    const allProductsCategories = await ProductCategory.findAll({
      limit,
      offset,
    });
    if (!allProductsCategories) {
      res.status(404).send("Products not found");
    } else {
      res.send(allProductsCategories);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
