const express = require("express");
const app = express();
const PORT = 4000;

const jsonParser = express.json();
app.use(jsonParser);

const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");
const orderRouter = require("./routers/order");
const middleware = require("./auth/middleware");
const adminRouter = require("./routers/admin");

app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/orders", middleware.auth, orderRouter);
app.use("/admin", middleware.authAdmin, adminRouter);

app.listen(PORT, () => console.log("Listening..."));
