"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cryptorandomstring = require('crypto-random-string'); var _cryptorandomstring2 = _interopRequireDefault(_cryptorandomstring);
var _Url = require('../schema/Url');

class HashUtils {
    
     __init() {this.defaultLength  = 10}
     __init2() {this.defaultCharacters  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"}
    
    

    constructor( cLength , cCharacters  ) {;HashUtils.prototype.__init.call(this);HashUtils.prototype.__init2.call(this);
        this.hashLength     = cLength > 0 ? cLength : this.defaultLength
        this.hashCharacters = cCharacters != "" ? cCharacters : this.defaultCharacters
    }

     async getNewCode()  {
        let answer = "";
        while( answer == "" ){
            let nHash = this.returnHash()
            if( await this.hasInBD( nHash ) )
                answer = nHash
        }
        return answer
    }

     returnHash()  {
        return _cryptorandomstring2.default.call(void 0, {length: this.hashLength, characters: this.hashCharacters })
    }

     async hasInBD( newHash  )  {
        let answer = await _Url.Url.find({ hashCode: newHash })
        if( answer.length > 0){
            return false
        }else{
            return true
        }
    }
    
}

exports. default = new HashUtils()