class NotFound {
    private statusCode : number = 404;
    private message    : string = "Não localizado";

    public getCode() : number {
        return this.statusCode
    }
    public getMessage () : string {
        return this.message
    }
}
export default new NotFound()