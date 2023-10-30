"use strict";

const { Schema, model } = require("mongoose");

const SaleSchema = new Schema(
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
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Account", //!
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
  { collection: "Sales", timestamps: true }
);

module.exports = model("Sale", SaleSchema);
