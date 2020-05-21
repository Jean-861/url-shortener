import { Request, Response } from "express"
import { Url }  from "../schema/Url";
import DateUtils from "../utils/DateUtils";
import HashUtills from "../utils/HashUtills";


class ShortenerController {

    public async shortener( req : Request, res : Response ) : Promise <Response> {

        if( req.body.url != undefined && req.body.url.trim().length > 0 ){
            const UrlServer     = "http://localhost:8081/"

            let hashString  = await HashUtills.getNewCode()

            let newRegister             = await Url.create( req.body )
                newRegister.newUrl      = UrlServer.concat( hashString )
                newRegister.dueDate     = DateUtils.nowAddDays(3)
                newRegister.hashCode    = hashString

            return res.json( await newRegister.save() )
        }
        
    }

    public async getUrl( req : Request, res : Response ) : Promise <Response> {
        if( req.params.hashId != "favicon.ico" ){
            const answer = await Url.find({ hashCode : req.params.hashId })
            if( answer.length > 0){
                return res.redirect( answer[0].url )
            }else{
                return res.send("Não localizado")
            }
        }
    }
    
}

export default new ShortenerController()