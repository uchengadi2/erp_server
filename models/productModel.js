const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "This field cannot be empty"],
    },
    description: {
      type: String,
      trim: true,
    },
    productId: {
      type: String,
      required: [true, "This field cannot be empty"],
      unique: true,
    },

    productType: {
      type: mongoose.Schema.ObjectId,
      ref: "ProductType",
    },
    totalQuantity: {
      type: Number,
      required: [true, "This field is required"],
    },
    unit: {
      type: String,
      enum: [
        "kg",
        "g",
        "tonnes",
        "pounds",
        "packs",
        "bag",
        "basket",
        "container",
        "unit",
      ],
    },
    unitWeight: {
      type: Number,
      enum: ["kg", "g", "pounds"],
    },
    totalCost: {
      type: Number,
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    priceSettings: [
      {
        allowedPrices: {
          startPrice: {
            type: Number,
          },
          endPrice: {
            type: Number,
          },
        },
        DiscountRange: {
          start: {
            type: Number,
          },
          startDate: {
            type: Date,
          },
          end: {
            type: Number,
          },
          endDate: {
            type: Date,
          },
        },
        application: {
          applyOnlyToStartRange: {
            type: Boolean,
            default: false,
          },
          applyOnlytoEndRange: {
            type: Boolean,
            default: true,
          },
          applyToBothDiscountRanges: {
            type: Boolean,
            default: false,
          },
        },
      },
    ],
    pricing: {
      regularPrice: {
        type: Number,
      },
      salesPrice: {
        type: Number,
      },
      activateSalesPrice: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
