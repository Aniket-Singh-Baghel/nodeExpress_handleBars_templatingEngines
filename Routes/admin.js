const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require('../util/path')

const products =[]

//  /admin/add-products => get request
router.get("/add-products", (req, res, next) => {
  res.render('add-products',{pagTitle:"Add Product", productCss:true, shopCss:true, activeAddProducts:true})
});

//  /admin/add-products =>  post request
router.post("/add-products", (req, res, next) => {
  products.push({title:req.body.title,desc:req.body.desc})
  res.redirect("/");
});

exports.routes = router
exports.products= products



