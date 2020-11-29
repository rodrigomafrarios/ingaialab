import { Router } from 'express'
import { factoryPropertyController } from '../factories/property'
import { adaptRoute } from '../adapters/express-route-adapter'
export default (router: Router): void => {
	router.post('/property/calc', adaptRoute(factoryPropertyController()))
}
