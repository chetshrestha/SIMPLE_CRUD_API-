const express = require("express");
const app = express();
const mongoose = require("mongoose");
const product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

//middleware to display body contain in browser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello programmer");
});

//connect to database

mongoose
  .connect(
    "mongodb+srv://chetshrestha:%40chetMon11go@cluster0.ytkzihd.mongodb.net/mongouser?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("database connected");

    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
