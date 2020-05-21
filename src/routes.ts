import { Router } from "express";
import ShortenerController from "./controller/ShortenerController";

const routes = Router()

    routes.get('/:hashId', ShortenerController.getUrl )
    
    routes.post('/encurtar', ShortenerController.shortener )

export default routes