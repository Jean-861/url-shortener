class BadRequest {
    private statusCode : number = 400;
    private message    : string = "Por favor verifique os parametros";

    public getCode() : number {
        return this.statusCode
    }
    public getMessage () : string {
        return this.message
    }
}
export default new BadRequest()