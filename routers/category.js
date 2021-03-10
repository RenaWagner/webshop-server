const { Router } = require("express");
const router = new Router();
const Category = require("../models").category;
const Product = require("../models").product;

router.get("/", async (req, res, next) => {
  try {
    const limit = Math.min(req.query.limit || 25, 500); // limit indicates how many results are on a page.
    const offset = req.query.offset || 0;
    const allCategories = await Category.findAll({ limit, offset });
    if (!allCategories) {
      res.status(404).send("Categories not found");
    } else {
      res.send(allCategories);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:categoryId/products", async (req, res, next) => {
  try {
    const categoryIdParam = parseInt(req.params.categoryId);
    const category = await Category.findByPk(categoryIdParam);
    console.log(category);
    if (!category) {
      res.status(404).send("Category ID not found");
    } else {
      const limit = Math.min(req.query.limit || 25, 500);
      const offset = req.query.offset || 0;
      const products = await Category.findAll({
        where: { id: categoryIdParam },
        limit,
        offset,
        include: [Product],
      });
      if (!products) {
        res.status(404).send("Products not found");
      } else {
        res.send(products);
      }
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
