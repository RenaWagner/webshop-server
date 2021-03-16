const cors = require("cors");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const jsonParser = express.json();
app.use(cors());
app.use(jsonParser);

const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");
const orderRouter = require("./routers/order");
const middleware = require("./auth/middleware");
const adminRouter = require("./routers/admin");
const productCategoryRouter = require("./routers/productCategory");

app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/orders", middleware.auth, orderRouter);
app.use("/admin", middleware.authAdmin, adminRouter);
app.use("/productCategories", productCategoryRouter);

app.listen(PORT, () => console.log("Listening..."));
