"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');








const UrlSchema = new (0, _mongoose.Schema)({
    url: String,
    newUrl: String,
    hashCode: String,
    dueDate: Date
}, {
  timestamps: true
})

 const Url = _mongoose.model('url', UrlSchema); exports.Url = Url