const { Router } = require("express");
const router = new Router();
const User = require("../models").user;
const Product = require("../models").product;
const Order = require("../models").order;
const Category = require("../models").category;
const ProductCategory = require("../models").productCategory;
// const middleware = require("../auth/middleware");

router.get("/users", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    if (!allUsers) {
      return res.status(404).send("Users not found");
    }
    res.send(allUsers);
  } catch (e) {
    next(e);
  }
});

router.get("/products", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    if (!allProducts) {
      return res.status(404).send("Products not found");
    }
    res.send(allProducts);
  } catch (e) {
    next(e);
  }
});

router.get("/orders", async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      include: {
        model: Product,
        attributes: ["name"],
      },
    });
    if (!allOrders) {
      return res.status(404).send("Orders not found");
    }
    res.send(allOrders);
  } catch (e) {
    next(e);
  }
});

router.post("/products", async (req, res, next) => {
  try {
    const { name, description, imgUrl, price, category } = req.body;
    if (!category) {
      return res.status(404).send("Please provide at least one category");
    }
    console.log(req.body);

    if (!name) {
      return res.status(404).send("Please provide name");
    }
    const newProduct = await Product.create({
      name,
      description,
      imgUrl,
      price,
    });

    //check if category is an array or not:
    if (Array.isArray(category)) {
      const newProductCategories = category.map(async (categoryId) => {
        const checkedCategory = await Category.findByPk(categoryId);
        // console.log(checkedCategory);
        if (!checkedCategory) {
          return res
            .status(400)
            .send(
              "Please provide registered category, or create the category first."
            );
        }
        const newProductCategory = await ProductCategory.create({
          productId: newProduct.id,
          categoryId: checkedCategory.id,
        });
        // console.log(newProductCategory);
      });
    } else {
      const checkedCategory = await Category.findByPk(category);
      //   console.log("CheckedCateogy", checkedCategory);
      if (!checkedCategory) {
        return res
          .status(400)
          .send(
            "Please provide registered category, or create the category first."
          );
      }
      const newProductCategory = await ProductCategory.create({
        productId: newProduct.id,
        categoryId: checkedCategory.id,
      });
      //   console.log(newProductCategory);
    }
    // console.log(newProduct);
    res.send(newProduct);
  } catch (e) {
    next(e);
  }
});

router.delete("/products/:productId", async (req, res, next) => {
  try {
    const productId = parseInt(req.params.productId);
    const productToDelete = await Product.findByPk(productId);
    if (!productToDelete) {
      return res.status(404).send("Product not found");
    }
    const deleted = await productToDelete.destroy();
    res.send(deleted);
  } catch (e) {
    next(e);
  }
});

router.post("/categories", async (req, res, send) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(404).send("Please provide name");
    }
    const newCategory = await Category.create({
      name,
    });
    // console.log(newProduct);

    res.send(newCategory);
  } catch (e) {
    next(e);
  }
});

// router.get("/test-auth", middleware.authAdmin, (req, res) => {
//   res.send({
//     message: `You are admin visiting the secret endpoint ${req.user.email}.`,
//   });
// });

module.exports = router;
