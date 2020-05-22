"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Url = require('../schema/Url');
var _DateUtils = require('../utils/DateUtils'); var _DateUtils2 = _interopRequireDefault(_DateUtils);
var _HashUtills = require('../utils/HashUtills'); var _HashUtills2 = _interopRequireDefault(_HashUtills);
var _BadRequest = require('../routers/BadRequest'); var _BadRequest2 = _interopRequireDefault(_BadRequest);
var _NotFound = require('../routers/NotFound'); var _NotFound2 = _interopRequireDefault(_NotFound);
var _isurl = require('is-url'); var _isurl2 = _interopRequireDefault(_isurl);

class ShortenerController {

     async shortener( req , res  )  {
        if( req.body.url != undefined && _isurl2.default.call(void 0, req.body.url) ){
            const UrlServer = "http://localhost:8081/"
            let hashString  = await _HashUtills2.default.getNewCode()

            let newRegister             = await _Url.Url.create( req.body )
                newRegister.newUrl      = UrlServer.concat( hashString )
                newRegister.dueDate     = _DateUtils2.default.nowAddDays(3)
                newRegister.hashCode    = hashString
            await newRegister.save()

            return res
                    .status(200)
                    .json(
                        {
                            newUrl : newRegister.newUrl,
                            dueDate: newRegister.dueDate
                        } )
            
        }else{
            return res
                    .status( _BadRequest2.default.getCode() )
                    .send( _BadRequest2.default.getMessage() )
        }
    }

     async getUrl( req , res , next  )  {
        const hashQuery = req.params.hashId
        if( hashQuery != "" && hashQuery != '{hashId}' ){
            const answer = await _Url.Url.find({ hashCode : req.params.hashId })
            if( answer.length > 0 && _DateUtils2.default.dueDateValidation( answer[0].dueDate ) ){
                return res
                        .status(200)
                        .redirect( answer[0].url )
            }else{
                return res  
                        .status( _NotFound2.default.getCode() )
                        .send( _NotFound2.default.getMessage() )
            }
        }else{
            return res
                    .status( _BadRequest2.default.getCode() )
                    .send( "Por favor acesse o link direto pelo browser!" )
        }
    }
    
}

exports. default = new ShortenerController()