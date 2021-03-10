const User = require("./models").user;
const Order = require("./models").order;
const Product = require("./models").product;
const Category = require("./models").category;
const ProductOrder = require("./models").productOrder;

// async function getUsers() {
//   try {
//     console.log(User);
//     const users = await User.findAll();
//     return users.map((user) => user.get({ plain: true }));
//   } catch (e) {
//     console.error(e);
//   }
// }
// getUsers().then((user) => console.log(user));

// async function getUserWithOrder(id) {
//   try {
//     // console.log(User);
//     const userWithOrder = await User.findByPk(id, {
//       include: [Order],
//     });
//     return userWithOrder ? userWithOrder.get({ plain: true }) : "Not Found";
//   } catch (e) {
//     console.error(e);
//   }
// }
// getUserWithOrder(1).then((user) => console.log(user));

// async function getProductWithOrder(id) {
//   try {
//     const productWithOrder = await Product.findByPk(id, {
//       include: [Order],
//     });
//     return productWithOrder
//       ? productWithOrder.get({ plain: true })
//       : "Not Found";
//   } catch (e) {
//     console.error(e);
//   }
// }
// getProductWithOrder(3).then((user) => console.log(user));

// async function getAllProductsWithCategory() {
//   try {
//     const productsWithCategory = await Product.findAll({
//       include: [Category],
//     });
//     return productsWithCategory.map((product) => product.get({ plain: true }));
//   } catch (e) {
//     console.error(e);
//   }
// }
// getAllProductsWithCategory().then((product) => console.log(product));

// async function getAProductsWithCategory(id) {
//   try {
//     const specificProductWithCategory = await Product.findByPk(id, {
//       include: [{ model: Category, attributes: ["name"] }],
//     });
//     return specificProductWithCategory.get({ plain: true });
//   } catch (e) {
//     console.error(e);
//   }
// }
// getAProductsWithCategory(3).then((product) => console.log(product));

// async function getCategoryWithProducts(id) {
//   try {
//     const specificCategoryWithProducts = await Category.findByPk(id, {
//       include: [{ model: Product, attributes: ["name"] }],
//     });
//     return specificCategoryWithProducts.get({ plain: true });
//   } catch (e) {
//     console.error(e);
//   }
// }
// getCategoryWithProducts(3).then((product) => console.log(product));

// async function getUserProfile(id) {
//   try {
//     const user = await User.findByPk(id, {
//       include: {
//         model: Order,
//         attributes: ["quantity"],
//         include: {
//           model: Product,
//           attributes: ["name"],
//           include: {
//             model: Category,
//             attributes: ["name"],
//           },
//         },
//       },
//     });
//     return user.get({ plain: true });
//   } catch (e) {
//     console.error(e);
//   }
// }
// getUserProfile(1).then((user) =>
//   console.log(user.orders[0].product.categories)
// );

async function getOrderDetails(id) {
  try {
    const order = await ProductOrder.findByPk(id, {
      include: {
        model: Order,
        attributes: ["status"],
      },
      include: {
        model: Product,
        attributes: ["name"],
      },
    });
    return order.get({ plain: true });
  } catch (e) {
    console.error(e);
  }
}
getOrderDetails(1).then((user) => console.log(user));
