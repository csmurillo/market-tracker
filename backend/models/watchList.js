const mongoose = require('mongoose');

const StockSchema = mongoose.Schema({
    tickerSymbol:{type:String, required:true},
    alertPrice:{type:Number, required:true}
});

const Stock = mongoose.model("Stock", StockSchema);

const WatchListSchema = mongoose.Schema({
    owner:{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    stocks:{
        type: [StockSchema]
    }
},{ timestamps: true });

const WatchList = mongoose.model('WatchList', WatchListSchema);

module.exports = { Stock, WatchList };
