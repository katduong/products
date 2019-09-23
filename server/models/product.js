const mongoose = require("mongoose")
;

var ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product name is a required field"],
        minlength: [4, "Product name must be at least 3 characters long"]
    },
    price: {
        type: String,
        required: [true, "Price is a required field"],
        validate: {
            validator: function(v) {
                return /^\d+(,\d{3})*(\.\d{1,2})?$/.test(v);
            },
            message: props => `${props.value} is not a valid price!`
        }
    },
    imageUrl: {
        type: String
    }
}, {timestamps: true});

mongoose.model("Product", ProductSchema);
var Product = mongoose.model('Product');
mongoose.Promise = global.Promise;
