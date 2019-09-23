const mongoose = require('mongoose'),
      Product = mongoose.model('Product')
;

module.exports = {
    allProducts: function(req, res) {
        Product.find({}, function(err, products) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json(products);
            }
        });
    },
    showProduct: function(req, res) {
        console.log("Showing product", req.params.id)
        Product.findOne({_id: req.params.id}, function(err, product) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json(product);
            }
        });
    },
    editProduct: function(req, res) {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, new: true}, function(error, product) {
            if (error) {
                res.json({message: "Error", error: error.errors});
            }
            else {
                res.json(product);
            }
        });
    },
    createProduct: function(req, res) {
        console.log("in the product post route", req.body);
        Product.create(req.body, function(err, product) {
            if (err) {
                res.json({message: "Error", error: err.errors});
            }
            else {
                res.json({message: "Product created successfully", product: product});
            }
        })
    },
    deleteProduct: function(req, res) {
        Product.remove({_id: req.params.id}, function(err) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                console.log("Product deleted successfully");
                res.json({message: "Product deleted successfully"});
            }
        });
    }
};
