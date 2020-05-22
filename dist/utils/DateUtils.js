"use strict";Object.defineProperty(exports, "__esModule", {value: true});class DateUtils {

     now()  {
        return new Date()
    }

     setDate( date  )  {
        return new Date( date )
    }

     nowAddDays( days )  {
        let newDate = new Date()
            newDate.setDate( newDate.getDate() + days )
        
        return newDate
    }

     dueDateValidation( dueDate  )  {
        if( this.now() <= this.setDate( dueDate )){
            return true
        }else{
            return false
        }
    }
    
}

exports. default = new DateUtils()