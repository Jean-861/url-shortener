"use strict";Object.defineProperty(exports, "__esModule", {value: true});class NotFound {constructor() { NotFound.prototype.__init.call(this);NotFound.prototype.__init2.call(this); }
     __init() {this.statusCode  = 404}
     __init2() {this.message     = "Não localizado"}

     getCode()  {
        return this.statusCode
    }
     getMessage ()  {
        return this.message
    }
}
exports. default = new NotFound()