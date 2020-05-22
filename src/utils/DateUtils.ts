class DateUtils {

    public now() : Date {
        return new Date()
    }

    public setDate( date : Date ) : Date {
        return new Date( date )
    }

    public nowAddDays( days : number) : Date {
        let newDate = new Date()
            newDate.setDate( newDate.getDate() + days )
        
        return newDate
    }

    public dueDateValidation( dueDate : Date ) : boolean {
        if( this.now() <= this.setDate( dueDate )){
            return true
        }else{
            return false
        }
    }
    
}

export default new DateUtils()