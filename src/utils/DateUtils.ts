class DateUtils {

    public now() : Date {
        return new Date()
    }

    public nowAddDays( days : number) : Date {
        let newDate = new Date()
            newDate.setDate( newDate.getDate() + days )
        
        return newDate
    }
    
}

export default new DateUtils()