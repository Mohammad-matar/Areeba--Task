//Schema

const { Schema, model } = require('mongoose')

const CustomerSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },

},

    {
        timestamps: true,
        collection: "customers"
    })
const Customer = model("Customer", CustomerSchema);
module.exports = Customer;
