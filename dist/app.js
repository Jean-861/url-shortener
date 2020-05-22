"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);
var _swaggerjson = require('../swagger.json'); var _swaggerjson2 = _interopRequireDefault(_swaggerjson);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

class App {

    

    constructor () {
        _dotenv2.default.config()
        this.express = _express2.default.call(void 0, )
        
        this.middlewares()
        this.database()
        this.routes()
    }

     middlewares () {
        this.express.use(_bodyparser2.default.urlencoded({ extended: false }))
        this.express.use( _express2.default.json() )
        this.express.use( _cors2.default.call(void 0, ) )
    }

     async database () {
        _mongoose2.default.connect(
            process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

     routes () {
        this.express.use('/docs', _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup( _swaggerjson2.default) )
        this.express.use('/', _routes2.default )
    }
    
}

exports. default = new App().express