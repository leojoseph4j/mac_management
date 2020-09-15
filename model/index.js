const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true }, (error) => {
    if (!error) {
        console.log("Mongo DB Connection successfull");
    } else {
        console.log("Mongo DB Connection Failed");
    }
});

const AssetType = require('./assettype.model');
