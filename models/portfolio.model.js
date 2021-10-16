const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { Decimal128 } = mongoose.Schema.Types;
const portfolioSchema = new mongoose.Schema(
  {
    Stocks: [
      {
        stockName: String,
        quantity: Number,
        price: Decimal128,
      },
    ],
    Orders: [
      {
        stockName: String,
        quantity: Number,
        orderType: String,
        bidPrice: Decimal128,
      },
    ],
    belongsTo: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = Portfoio = mongoose.model("Portfoio", portfolioSchema);
