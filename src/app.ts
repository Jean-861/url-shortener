import express from 'express'
import cors from 'cors'
import mongoose from "mongoose"
import routes from './routes'
import bodyParser from "body-parser"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from '../swagger.json'

class App {

    public express : express.Application

    constructor () {
        this.express = express()
        
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares () {
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use( express.json() )
        this.express.use( cors() )
    }

    private async database () {
        mongoose.connect(`mongodb://localhost:27017/url_system`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    private routes () {
        this.express.use('/docs', swaggerUi.serve, swaggerUi.setup( swaggerDocument) )
        this.express.use('/', routes )
    }
    
}

export default new App().express