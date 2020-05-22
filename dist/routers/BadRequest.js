"use strict";Object.defineProperty(exports, "__esModule", {value: true});class BadRequest {constructor() { BadRequest.prototype.__init.call(this);BadRequest.prototype.__init2.call(this); }
     __init() {this.statusCode  = 400}
     __init2() {this.message     = "Por favor verifique os parametros"}

     getCode()  {
        return this.statusCode
    }
     getMessage ()  {
        return this.message
    }
}
exports. default = new BadRequest()