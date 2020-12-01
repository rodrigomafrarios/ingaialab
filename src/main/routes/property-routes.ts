import { Router } from 'express'
import { factoryPropertyController, factorySquareMetersController } from '@Main/factories'
import { adaptRoute } from '@Main/adapters/express-route-adapter'

export default (router: Router): void => {
	router.get('/property/square-meters', adaptRoute(factorySquareMetersController()))
	router.post('/property/calc', adaptRoute(factoryPropertyController()))
}
