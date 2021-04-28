const cors = require("cors");
const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./models");

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

app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/", authRouter);
app.use("/users", userRouter);
app.use("/orders", middleware.auth, orderRouter);
app.use("/admin", middleware.authAdmin, adminRouter);

const { typeDefs } = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, db }),
});

server.applyMiddleware({ app });

app.listen(PORT, () => console.log("Listening..."));
