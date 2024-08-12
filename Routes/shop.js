const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");

// router.get("/", (req, res, next) => {
//     console.log("in another middleware");
//     res.send("<h1>Hello from express</h1>");
//   });

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: adminData.products,
    docTitle: "Shop",
    hasProducts: products.length > 0,
    activeShop:true,
    productCss:true,
    shopCss:true
  });
});

module.exports = router;
