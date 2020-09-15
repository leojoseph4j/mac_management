const mongoose = require('mongoose');

var AssetTypeSchema = new mongoose.Schema({
    id: {
        type: String
    },
    type: {
        type: String
    }
}, { collection: "AssetType" });

mongoose.model("AssetType", AssetTypeSchema);
