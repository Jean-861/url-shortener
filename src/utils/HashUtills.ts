import cryptoRandomString from "crypto-random-string";
import { Url }  from "../schema/Url";

class HashUtils {
    
    private defaultLength : number = 10;
    private defaultCharacters : string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    private hashLength : number;
    private hashCharacters : string;

    constructor( cLength ?: number, cCharacters ?: string ) {
        this.hashLength     = cLength > 0 ? cLength : this.defaultLength
        this.hashCharacters = cCharacters != "" ? cCharacters : this.defaultCharacters
    }

    public async getNewCode() : Promise<string> {
        let answer = "";
        while( answer == "" ){
            let nHash = this.returnHash()
            if( await this.hasInBD( nHash ) )
                answer = nHash
        }
        return answer
    }

    private returnHash() : string {
        return cryptoRandomString({length: this.hashLength, characters: this.hashCharacters })
    }

    private async hasInBD( newHash : string ) : Promise<boolean> {
        let answer = await Url.find({ hashCode: newHash })
        if( answer.length > 0){
            return false
        }else{
            return true
        }
    }
    
}

export default new HashUtils()