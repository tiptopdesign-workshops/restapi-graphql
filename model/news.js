const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsModel = new Schema({
    title: {
        type: String,
    },
    summary: {
        type: String,
    }
});

module.exports = mongoose.model('news', newsModel);