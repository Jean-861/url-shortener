"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ShortenerController = require('./controller/ShortenerController'); var _ShortenerController2 = _interopRequireDefault(_ShortenerController);

const routes = _express.Router.call(void 0, )

    routes.get('/:hashId', _ShortenerController2.default.getUrl )    
    routes.post('/encurtar', _ShortenerController2.default.shortener )

exports. default = routes