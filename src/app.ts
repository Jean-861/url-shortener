import express from 'express'
import cors from 'cors'
import mongoose from "mongoose"
import routes from './routes'
import bodyParser from "body-parser"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from '../swagger.json'
import dotenv from 'dotenv'

class App {

    public express : express.Application

    constructor () {
        dotenv.config()
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
        mongoose.connect(
            process.env.MONGO_URL,
        {
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