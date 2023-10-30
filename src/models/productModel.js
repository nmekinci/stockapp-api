"use strict";

const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand_id: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    name: {
        type:String,
        trim: true,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    }
    
  },
  { collection: "products", timestamps: true }
);

module.exports = model("Product", ProductSchema);
