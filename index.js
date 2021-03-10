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
const authMiddleware = require("./auth/middleware");

app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/orders", authMiddleware, orderRouter);

app.listen(PORT, () => console.log("Listening..."));
