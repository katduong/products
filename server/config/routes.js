const mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      products = require('../controllers/products.js'),
      path = require('path');
;
module.exports = function(app){
    app.get("/products", function(req, res) {
        products.allProducts(req,res);
    });
    app.get("/products/:id", function(req, res) {
        products.showProduct(req, res);
    })
    app.put("/products/:id", function(req, res) {
        products.editProduct(req,res);
    });
    app.post("/products", function(req, res) {
        products.createProduct(req, res);
    });
    app.delete("/products/:id", function(req, res) {
        products.deleteProduct(req, res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
