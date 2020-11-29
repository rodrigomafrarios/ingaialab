import { PropertyController } from '../../presentation/controllers/property'
import { SquareMeterValidatorAdapter } from '../../utils/square-meter-validator'
import { DbCalcPropertyPrice } from '../../data/usecases/calc-property-price/db-calc-property-price'
import { PropertyDbRepository } from '../../infra/db/property-repository/property'

export const factoryPropertyController = (): PropertyController => {
	const squareMeterValidator = new SquareMeterValidatorAdapter()
	const propertyDbRepository = new PropertyDbRepository()
	const dbCalcPropertyPrice = new DbCalcPropertyPrice(propertyDbRepository)
	return new PropertyController(squareMeterValidator,dbCalcPropertyPrice)
}
