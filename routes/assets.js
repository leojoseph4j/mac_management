const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const AssetTypeModel = mongoose.model("AssetType");

router.get("/getAssetTypes", (req, res) => {
    AssetTypeModel.find((err, docs) => {
        if(!err) {
            console.log("Data Obtained");
            console.log(docs);
            res.json(docs);
        } else {
            console.log("Error Occured While Listing");
        }
    })
});


module.exports = router;