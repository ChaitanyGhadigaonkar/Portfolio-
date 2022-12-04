const mongoose = require('mongoose');
const validator = require('validator');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    eamilAddress: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    }

});
const PortFolioClient = mongoose.model("PortFolioClient", clientSchema);
module.exports = PortFolioClient;