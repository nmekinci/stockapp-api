"use strict";

const { Schema, model } = require("mongoose");

const PurchaseSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    brand_id: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    firm_id: {
      type: Schema.Types.ObjectId,
      ref: "Firm", 
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default:0
    },
    price: {
      type: Number,
    },
    price_total: {
      type: Number,
    },
  },
  { collection: "purchases", timestamps: true }
);

module.exports = model("Purchase", PurchaseSchema);
