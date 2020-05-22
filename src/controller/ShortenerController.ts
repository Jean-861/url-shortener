import { Request, Response, NextFunction } from "express"
import { Url }  from "../schema/Url";
import DateUtils from "../utils/DateUtils";
import HashUtills from "../utils/HashUtills";
import BadRequest  from "../routers/BadRequest";
import NotFound from "../routers/NotFound";
import isUrl from "is-url";
import dotenv from 'dotenv'
dotenv.config()

class ShortenerController {

    public async shortener( req : Request, res : Response ) : Promise <Response> {
        if( req.body.url != undefined && isUrl(req.body.url) ){
            const UrlServer = process.env.LINK_APP
            let hashString  = await HashUtills.getNewCode()

            let newRegister             = await Url.create( req.body )
                newRegister.newUrl      = UrlServer.concat( hashString )
                newRegister.dueDate     = DateUtils.nowAddDays(3)
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
                    .status( BadRequest.getCode() )
                    .send( BadRequest.getMessage() )
        }
    }

    public async getUrl( req : Request, res : Response, next : NextFunction ) : Promise <any> {
        const hashQuery = req.params.hashId
        if( hashQuery != "" && hashQuery != '{hashId}' ){
            const answer = await Url.find({ hashCode : req.params.hashId })
            if( answer.length > 0 && DateUtils.dueDateValidation( answer[0].dueDate ) ){
                return res
                        .status(200)
                        .redirect( answer[0].url )
            }else{
                return res  
                        .status( NotFound.getCode() )
                        .send( NotFound.getMessage() )
            }
        }else{
            return res
                    .status( BadRequest.getCode() )
                    .send( "Por favor acesse o link direto pelo browser!" )
        }
    }
    
}

export default new ShortenerController()